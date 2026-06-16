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
  }

  html { -webkit-text-size-adjust: 100%; }

  /* Lenis smooth-scroll required styles */
  html.lenis, html.lenis body { height: auto; }
  .lenis.lenis-smooth { scroll-behavior: auto !important; }
  .lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
  .lenis.lenis-stopped { overflow: hidden; }

  body {
    background: ${({ theme }) => theme.color.paper};
    color: ${({ theme }) => theme.color.ink};
    font-family: ${({ theme }) => theme.font.sans};
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }

  a { color: inherit; text-decoration: none; }
  button { font: inherit; color: inherit; background: none; border: none; cursor: pointer; }
  img, canvas, svg, iframe { display: block; max-width: 100%; }

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
