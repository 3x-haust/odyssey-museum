import styled from 'styled-components';
import { motion, useScroll, useSpring } from 'framer-motion';

const Track = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: ${({ theme }) => theme.z.progress};
  pointer-events: none;
  mix-blend-mode: difference;
`;

const Bar = styled(motion.div)`
  transform-origin: 0 50%;
  height: 100%;
  background: #fff;
`;

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Track>
      <Bar style={{ scaleX }} />
    </Track>
  );
}
