import { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { exhibition, workCount } from '../data/works';

const Section = styled.section`
  position: relative;
  min-height: 100svh;
  background: ${({ theme }) => theme.color.ink};
  color: ${({ theme }) => theme.color.paper};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(90px, 12vh, 160px) var(--gutter) clamp(28px, 5vh, 56px);
  overflow: hidden;
`;

/* the monolith — the 1:4:9 slab that recurs across every work in the show */
const Monolith = styled(motion.div)`
  position: absolute;
  top: 46%;
  left: 50%;
  height: min(62vh, 560px);
  aspect-ratio: 4 / 9;
  translate: -50% -50%;
  border: 1px solid ${({ theme }) => theme.color.lineInv};
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0)
  );
  pointer-events: none;
`;

const TopRow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.75;
  gap: 1rem;
`;

const Center = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: clamp(1rem, 3vh, 2.2rem);
`;

const Word = styled.h1`
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(3.6rem, 19vw, 20rem);
  line-height: 0.84;
  letter-spacing: -0.05em;
  overflow: hidden;
  display: block;

  span {
    display: inline-block;
  }
`;

const Sub = styled(motion.p)`
  font-family: ${({ theme }) => theme.font.kr};
  font-weight: 300;
  font-size: clamp(0.95rem, 1.8vw, 1.4rem);
  letter-spacing: 0.02em;
  max-width: 38ch;
  line-height: 1.5;
`;

const EnLine = styled(motion.span)`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  opacity: 0.6;
`;

const BottomRow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.75;
  gap: 1rem;
`;

const ScrollCue = styled(motion.div)`
  position: absolute;
  left: 50%;
  bottom: clamp(28px, 5vh, 56px);
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.7;
`;

const CueLine = styled(motion.span)`
  width: 1px;
  height: 46px;
  background: ${({ theme }) => theme.color.paper};
  transform-origin: top;
`;

interface Props {
  start: boolean;
}

export function Hero({ start }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-55%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const slabScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const slabY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const slabOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Section ref={ref}>
      <Monolith
        style={{ scale: slabScale, y: slabY, opacity: slabOpacity }}
        aria-hidden
      />

      <TopRow>
        <span>{exhibition.subtitle}</span>
        <span>MIRIM MEISTER H.S.</span>
      </TopRow>

      <Center>
        <motion.div style={{ y: titleY, opacity: titleOpacity }}>
          <Word>
            <motion.span
              initial={{ y: '115%' }}
              animate={start ? { y: 0 } : { y: '115%' }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {exhibition.title}
            </motion.span>
          </Word>
        </motion.div>

        <Sub
          initial={{ opacity: 0, y: 20 }}
          animate={start ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {exhibition.tagline}
        </Sub>
        <EnLine
          initial={{ opacity: 0 }}
          animate={start ? { opacity: 0.6 } : {}}
          transition={{ delay: 0.95, duration: 0.9 }}
        >
          {exhibition.taglineEn}
        </EnLine>
      </Center>

      <BottomRow>
        <span>
          {workCount} WORKS — {workCount} STUDENTS
        </span>
        <span>EST. {exhibition.year}</span>
      </BottomRow>

      <ScrollCue
        initial={{ opacity: 0 }}
        animate={start ? { opacity: 0.7 } : {}}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span>SCROLL</span>
        <CueLine
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </ScrollCue>
    </Section>
  );
}
