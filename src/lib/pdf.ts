import * as pdfjsLib from 'pdfjs-dist';
import type { PDFDocumentProxy } from 'pdfjs-dist';
// Vite resolves the worker from the SAME pdfjs-dist version → no version mismatch.
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;

const docCache = new Map<string, Promise<PDFDocumentProxy>>();

export function loadDocument(url: string): Promise<PDFDocumentProxy> {
  let task = docCache.get(url);
  if (!task) {
    task = pdfjsLib.getDocument({
      url,
      // served from /public/pdfjs — guarantees correct CJK glyph + standard-font
      // rendering for the Korean slide decks regardless of font embedding.
      cMapUrl: '/pdfjs/cmaps/',
      cMapPacked: true,
      standardFontDataUrl: '/pdfjs/standard_fonts/',
    }).promise;
    docCache.set(url, task);
  }
  return task;
}

export interface RenderedSize {
  cssWidth: number;
  cssHeight: number;
}

/**
 * Render a single PDF page into a canvas, crisp on HiDPI displays.
 * `targetWidth` is the intended CSS width in px.
 */
export async function renderPage(
  url: string,
  pageNumber: number,
  canvas: HTMLCanvasElement,
  targetWidth: number,
): Promise<RenderedSize> {
  const pdf = await loadDocument(url);
  const page = await pdf.getPage(pageNumber);

  const base = page.getViewport({ scale: 1 });
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const cssScale = targetWidth / base.width;
  const viewport = page.getViewport({ scale: cssScale * dpr });

  const ctx = canvas.getContext('2d', { alpha: false });
  if (!ctx) throw new Error('Canvas 2D context unavailable');

  canvas.width = Math.floor(viewport.width);
  canvas.height = Math.floor(viewport.height);
  const cssWidth = viewport.width / dpr;
  const cssHeight = viewport.height / dpr;
  canvas.style.width = `${cssWidth}px`;
  canvas.style.height = `${cssHeight}px`;

  await page.render({ canvasContext: ctx, viewport }).promise;
  return { cssWidth, cssHeight };
}

export async function getPageCount(url: string): Promise<number> {
  const pdf = await loadDocument(url);
  return pdf.numPages;
}
