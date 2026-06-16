import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { renderPage } from '../lib/pdf';

const shimmer = keyframes`
  0% { background-position: -150% 0; }
  100% { background-position: 250% 0; }
`;

const Wrap = styled.div<{ $ratio: number }>`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ $ratio }) => $ratio};
  background: ${({ theme }) => theme.color.g100};
  overflow: hidden;

  canvas {
    width: 100% !important;
    height: auto !important;
    display: block;
  }
`;

const Placeholder = styled.div<{ $hidden: boolean }>`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  transition: opacity 0.6s ease;
  pointer-events: none;
  background: linear-gradient(
    100deg,
    ${({ theme }) => theme.color.g100} 30%,
    ${({ theme }) => theme.color.g200} 50%,
    ${({ theme }) => theme.color.g100} 70%
  );
  background-size: 250% 100%;
  animation: ${shimmer} 1.6s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const PlaceLabel = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.g500};
`;

interface Props {
  url: string;
  page?: number;
  ratio?: number;
  maxWidth?: number;
  className?: string;
  label?: string;
}

export function PdfCanvas({
  url,
  page = 1,
  ratio = 16 / 9,
  maxWidth = 1400,
  className,
  label = 'RENDERING',
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const renderedWidth = useRef(0);
  const [ready, setReady] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    let cancelled = false;

    const draw = async () => {
      const width = Math.round(wrap.clientWidth);
      if (width < 24) return;
      // only re-render when growing meaningfully (keeps it crisp without thrashing)
      if (renderedWidth.current && width <= renderedWidth.current * 1.25) return;
      renderedWidth.current = width;
      try {
        await renderPage(url, page, canvas, Math.min(width, maxWidth));
        canvas.style.width = '100%';
        canvas.style.height = 'auto';
        if (!cancelled) setReady(true);
      } catch {
        if (!cancelled) setErrored(true);
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) draw();
      },
      { rootMargin: '400px 0px' },
    );
    io.observe(wrap);

    let resizeTimer = 0;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(draw, 220);
    });
    ro.observe(wrap);

    return () => {
      cancelled = true;
      io.disconnect();
      ro.disconnect();
      window.clearTimeout(resizeTimer);
    };
  }, [url, page, maxWidth]);

  return (
    <Wrap ref={wrapRef} $ratio={ratio} className={className}>
      <canvas ref={canvasRef} aria-hidden />
      <Placeholder $hidden={ready}>
        <PlaceLabel>{errored ? 'PREVIEW UNAVAILABLE' : label}</PlaceLabel>
      </Placeholder>
    </Wrap>
  );
}
