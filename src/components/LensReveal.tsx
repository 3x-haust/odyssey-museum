import { useRef, useState, type ReactNode } from 'react';
import styled from 'styled-components';
import { useIsFinePointer } from '../hooks/useMediaQuery';

/**
 * "The Lens" — the work sits dormant (dimmed, low-contrast). A circular
 * aperture follows the cursor and is the only place the work resolves into
 * full brightness/contrast. You inspect the exhibition by *looking* —
 * the HAL-eye / camera-lens motif the works themselves are built on.
 */
const Frame = styled.div`
  position: relative;
  overflow: hidden;
  --mx: 50%;
  --my: 50%;
  --lens: 0px;
  /* the registered prop animates here; children inherit the animated value */
  transition: --lens 0.45s cubic-bezier(0.16, 1, 0.3, 1);
`;

const Content = styled.div`
  position: relative;
`;

/** Dark, desaturated scrim with a transparent hole punched at the cursor. */
const Scrim = styled.div<{ $on: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  background: rgba(8, 8, 8, ${({ $on }) => ($on ? 0.62 : 0.74)});
  transition: background 0.5s ease;
  -webkit-mask: radial-gradient(
    circle var(--lens) at var(--mx) var(--my),
    transparent 0,
    transparent calc(var(--lens) - 1px),
    #000 var(--lens)
  );
  mask: radial-gradient(
    circle var(--lens) at var(--mx) var(--my),
    transparent 0,
    transparent calc(var(--lens) - 1px),
    #000 var(--lens)
  );
`;

/** The aperture rim that rides the cursor. */
const Iris = styled.div<{ $on: boolean }>`
  position: absolute;
  top: var(--my);
  left: var(--mx);
  z-index: 4;
  width: calc(var(--lens) * 2);
  height: calc(var(--lens) * 2);
  translate: -50% -50%;
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode: difference;
  border: 1px solid rgba(255, 255, 255, 0.9);
  opacity: ${({ $on }) => ($on ? 1 : 0)};
  transition: opacity 0.4s ease;

  &::after {
    content: '';
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.25);
  }
`;

const Hint = styled.div<{ $on: boolean }>`
  position: absolute;
  z-index: 4;
  bottom: 14px;
  right: 14px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.paper};
  mix-blend-mode: difference;
  opacity: ${({ $on }) => ($on ? 0 : 0.85)};
  transition: opacity 0.4s ease;
  pointer-events: none;
`;

interface Props {
  children: ReactNode;
  className?: string;
}

export function LensReveal({ children, className }: Props) {
  const fine = useIsFinePointer();
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  if (!fine) {
    // touch / coarse pointer: no occlusion, show the work plainly
    return <div className={className}>{children}</div>;
  }

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  const open = () => {
    const el = ref.current;
    if (el) el.style.setProperty('--lens', 'clamp(90px, 13vw, 170px)');
    setOn(true);
  };
  const close = () => {
    const el = ref.current;
    if (el) el.style.setProperty('--lens', '0px');
    setOn(false);
  };

  return (
    <Frame
      ref={ref}
      className={className}
      onPointerMove={onMove}
      onPointerEnter={open}
      onPointerLeave={close}
    >
      <Content>{children}</Content>
      <Scrim $on={on} aria-hidden />
      <Iris $on={on} aria-hidden />
      <Hint $on={on} aria-hidden>
        LOOK
      </Hint>
    </Frame>
  );
}
