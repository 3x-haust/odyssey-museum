import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useIsFinePointer } from '../hooks/useMediaQuery';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Root = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.z.cursor};
  pointer-events: none;
  mix-blend-mode: difference;
  color: #fff;
`;

/** Reticle scales; the inner ring carries the rotation so transforms don't clash. */
const Reticle = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 34px;
  height: 34px;
  margin: -17px 0 0 -17px;
`;

const Spinner = styled.div`
  position: absolute;
  inset: 0;
  animation: ${spin} 9s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  span {
    position: absolute;
    background: #fff;
  }
  /* four L-ticks at the corners */
  span:nth-child(1),
  span:nth-child(2) { top: 0; left: 0; }
  span:nth-child(3),
  span:nth-child(4) { bottom: 0; right: 0; }
  span:nth-child(1),
  span:nth-child(3) { width: 9px; height: 1px; }
  span:nth-child(2),
  span:nth-child(4) { width: 1px; height: 9px; }
`;

const Focus = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 3px;
  margin: -1.5px 0 0 -1.5px;
  background: #fff;
  border-radius: 50%;
`;

const Label = styled(motion.span)`
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(22px, -6px);
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  white-space: nowrap;
`;

export function Cursor() {
  const isFine = useIsFinePointer();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  const [active, setActive] = useState(false);
  const [label, setLabel] = useState('');
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!isFine) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-cursor]');
      setActive(!!el);
      setLabel(el?.dataset.cursor || '');
    };
    const dn = () => setDown(true);
    const up = () => setDown(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', dn);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', dn);
      window.removeEventListener('mouseup', up);
    };
  }, [isFine, x, y]);

  if (!isFine) return null;

  return (
    <Root style={{ x: sx, y: sy }}>
      <Reticle
        animate={{ scale: down ? 0.85 : active ? 1.85 : 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      >
        <Spinner>
          <span />
          <span />
          <span />
          <span />
        </Spinner>
      </Reticle>
      <Focus animate={{ scale: active ? 0 : 1 }} transition={{ duration: 0.2 }} />
      {label && (
        <Label
          key={label}
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {label}
        </Label>
      )}
    </Root>
  );
}
