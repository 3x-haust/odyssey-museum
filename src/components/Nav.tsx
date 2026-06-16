import styled from 'styled-components';
import { motion } from 'framer-motion';
import { exhibition, workCount } from '../data/works';
import { useLenis } from '../hooks/useSmoothScroll';

const Bar = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.z.nav};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: clamp(16px, 2.4vw, 32px) var(--gutter);
  mix-blend-mode: difference;
  color: #fff;
  pointer-events: none;
`;

const Logo = styled.button`
  pointer-events: auto;
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(15px, 1.5vw, 20px);
  letter-spacing: 0.02em;
  line-height: 1;
`;

const Right = styled.nav`
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: clamp(16px, 2.5vw, 40px);
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

const NavLink = styled.button`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 1px;
    background: #fff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

export function Nav() {
  const lenis = useLenis();

  const scrollTo = (target: string | number) => {
    if (lenis) {
      lenis.scrollTo(target, { duration: 1.6 });
    } else if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' });
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Bar
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Logo onClick={() => scrollTo(0)} data-cursor="TOP">
        {exhibition.title}
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10, opacity: 0.7 }}>
          {' '}
          ®
        </span>
      </Logo>
      <Right>
        <NavLink onClick={() => scrollTo('#works')} data-cursor="">
          WORKS ({workCount})
        </NavLink>
        <NavLink onClick={() => scrollTo('#colophon')}>INFO</NavLink>
        <span style={{ opacity: 0.6 }}>{exhibition.year}</span>
      </Right>
    </Bar>
  );
}
