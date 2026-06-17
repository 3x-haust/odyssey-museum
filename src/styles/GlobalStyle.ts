import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Animatable custom prop for the "Lens" aperture radius. */
  @property --lens {
    syntax: '<length>';
    inherits: true;
    initial-value: 0px;
  }

  *, *::before, *::after { box-sizing: border-box; }

  * { margin: 0; padding: 0; }

  :root {
    color-scheme: light;
    --gutter: clamp(20px, 5vw, 80px);
    --background: #ffffff;
    --foreground: #111111;
    --card: #ffffff;
    --card-foreground: #111111;
    --primary: #111111;
    --primary-foreground: #ffffff;
    --muted: #f2f2f2;
    --muted-foreground: #666666;
    --border: rgba(0, 0, 0, 0.16);
    --input-background: #f5f5f5;
  }

  html {
    -webkit-text-size-adjust: 100%;
    overflow: hidden;
    scrollbar-width: none;
  }

  /* Lenis smooth-scroll required styles */
  html.lenis, html.lenis body { height: auto; }
  .lenis.lenis-smooth { scroll-behavior: auto !important; }
  .lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
  .lenis.lenis-stopped { overflow: hidden; }

  body {
    background: var(--background);
    color: var(--foreground);
    font-family: ${({ theme }) => theme.font.sans};
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-synthesis-weight: none;
    overflow: hidden;
    scrollbar-width: none;
  }

  a { color: inherit; text-decoration: none; }
  button { font: inherit; color: inherit; background: none; border: none; cursor: pointer; }
  img, canvas, svg, iframe { display: block; max-width: 100%; }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.03;
    z-index: 9999;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }

  *, *::before, *::after {
    border-radius: 0 !important;
  }

  * {
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }

  ::selection {
    background: ${({ theme }) => theme.color.ink};
    color: ${({ theme }) => theme.color.paper};
  }

  h1, h2, h3, h4 { font-weight: 700; line-height: 0.98; letter-spacing: 0; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
