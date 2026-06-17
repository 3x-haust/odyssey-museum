// Strictly monochrome palette. Any color on screen must come from the artworks
// themselves (PDF previews) — never from the chrome. This keeps the works the
// only thing that "lights up" against a neutral black/white gallery.
export const theme = {
  color: {
    ink: '#000000',
    paper: '#ffffff',
    near: '#0a0a0a',
    g900: '#111111',
    g700: '#2b2b2b',
    g500: '#6f6f6f',
    g300: '#a8a8a8',
    g200: '#cfcfcf',
    g100: '#e9e9e9',
    line: 'rgba(0, 0, 0, 0.14)',
    lineSoft: 'rgba(0, 0, 0, 0.08)',
    lineInv: 'rgba(255, 255, 255, 0.18)',
    lineInvSoft: 'rgba(255, 255, 255, 0.08)',
  },
  font: {
    display:
      "'Archivo Black', 'Apple SD Gothic Neo', 'Pretendard', 'Noto Sans KR', 'Malgun Gothic', sans-serif",
    sans:
      "'Apple SD Gothic Neo', 'Pretendard', 'Noto Sans KR', 'Malgun Gothic', 'Archivo', system-ui, sans-serif",
    kr: "'Apple SD Gothic Neo', 'Pretendard', 'Noto Sans KR', 'Malgun Gothic', system-ui, sans-serif",
    mono: "'IBM Plex Mono', 'SFMono-Regular', monospace",
  },
  // cubic-bezier easings used across motion components
  ease: {
    out: [0.16, 1, 0.3, 1] as [number, number, number, number],
    inOut: [0.83, 0, 0.17, 1] as [number, number, number, number],
    expo: [0.19, 1, 0.22, 1] as [number, number, number, number],
  },
  maxWidth: '1680px',
  z: {
    grain: 60,
    nav: 70,
    progress: 75,
    modal: 90,
    cursor: 100,
    loader: 120,
  },
} as const;

export type AppTheme = typeof theme;
