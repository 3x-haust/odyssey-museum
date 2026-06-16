import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { exhibition } from '../data/works';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery';

const Screen = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.z.loader};
  background: ${({ theme }) => theme.color.ink};
  color: ${({ theme }) => theme.color.paper};
  display: grid;
  place-items: center;
  overflow: hidden;
`;

/* the monolith materialises: a thin line rises, then opens into the 1:4:9 slab */
const rise = keyframes`
  0%   { transform: scaleY(0) scaleX(0.05); }
  42%  { transform: scaleY(1) scaleX(0.05); }
  100% { transform: scaleY(1) scaleX(1); }
`;

const Stage = styled.div`
  position: relative;
  height: min(48vh, 420px);
  aspect-ratio: 4 / 9;
`;

const Slab = styled.div<{ $reduced: boolean }>`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.color.near};
  border: 1px solid ${({ theme }) => theme.color.lineInv};
  transform-origin: center;
  animation: ${rise} ${({ $reduced }) => ($reduced ? '0.2s' : '0.8s')}
    cubic-bezier(0.83, 0, 0.17, 1) forwards;
`;

const Caption = styled(motion.div)`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
`;

const Meta = styled.div`
  position: absolute;
  top: clamp(16px, 4vw, 32px);
  left: clamp(16px, 4vw, 32px);
  right: clamp(16px, 4vw, 32px);
  display: flex;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 0.7;
`;

const Word = styled.span`
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(1.4rem, 4vw, 2.4rem);
  letter-spacing: -0.02em;
`;

const Tagline = styled.div`
  position: absolute;
  bottom: clamp(16px, 4vw, 32px);
  left: clamp(16px, 4vw, 32px);
  right: clamp(16px, 4vw, 32px);
  text-align: center;
  font-family: ${({ theme }) => theme.font.kr};
  font-size: 11px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.color.g300};
`;

interface Props {
  onComplete: () => void;
}

export function Loader({ onComplete }: Props) {
  const reduced = usePrefersReducedMotion();
  const done = useRef(false);

  useEffect(() => {
    const t = window.setTimeout(
      () => {
        if (!done.current) {
          done.current = true;
          onComplete();
        }
      },
      reduced ? 250 : 1050,
    );
    return () => window.clearTimeout(t);
  }, [onComplete, reduced]);

  return (
    <Screen
      initial={{ y: 0 }}
      exit={{ y: '-101%' }}
      transition={{ duration: 0.55, ease: [0.83, 0, 0.17, 1] }}
    >
      <Stage>
        <Slab $reduced={reduced} />
        <Caption
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduced ? 0 : 0.45, duration: 0.4 }}
        >
          <Meta>
            <span>{exhibition.year}</span>
            <span>1:4:9</span>
          </Meta>
          <Word>{exhibition.title}</Word>
          <Tagline>{exhibition.subtitle}</Tagline>
        </Caption>
      </Stage>
    </Screen>
  );
}
