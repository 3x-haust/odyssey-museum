import styled, { keyframes } from 'styled-components';

const drift = keyframes`
  0%   { transform: translate(0, 0); }
  10%  { transform: translate(-4%, -2%); }
  20%  { transform: translate(-8%, 4%); }
  30%  { transform: translate(2%, -6%); }
  40%  { transform: translate(-3%, 8%); }
  50%  { transform: translate(-8%, 2%); }
  60%  { transform: translate(5%, 0); }
  70%  { transform: translate(-2%, 6%); }
  80%  { transform: translate(8%, -4%); }
  90%  { transform: translate(-6%, 2%); }
  100% { transform: translate(0, 0); }
`;

const Layer = styled.div`
  position: fixed;
  inset: -60%;
  z-index: ${({ theme }) => theme.z.grain};
  pointer-events: none;
  opacity: 0.05;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  animation: ${drift} 6s steps(8) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export function Grain() {
  return <Layer aria-hidden />;
}
