import styled from 'styled-components';
import { exhibition, works, workCount } from '../data/works';
import { useLenis } from '../hooks/useSmoothScroll';
import { Reveal } from './Reveal';

const Section = styled.footer`
  background: ${({ theme }) => theme.color.ink};
  color: ${({ theme }) => theme.color.paper};
  padding: clamp(70px, 12vh, 150px) var(--gutter) clamp(28px, 5vh, 48px);
  overflow: hidden;
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  padding-bottom: clamp(3rem, 8vh, 6rem);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const ArtistList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const ArtistItem = styled.li`
  display: flex;
  align-items: baseline;
  gap: 16px;
  padding: 14px 0;
  border-top: 1px solid ${({ theme }) => theme.color.lineInv};
  font-family: ${({ theme }) => theme.font.kr};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.color.lineInv};
  }

  .idx {
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 11px;
    opacity: 0.5;
  }
  .name {
    font-size: clamp(1.1rem, 2vw, 1.6rem);
    font-weight: 700;
  }
  .roman {
    margin-left: auto;
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 10px;
    letter-spacing: 0.18em;
    opacity: 0.6;
    text-transform: uppercase;
  }
`;

const Colophon = styled.div`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.12em;
  line-height: 2;
  text-transform: uppercase;
  opacity: 0.75;

  h5 {
    font-weight: 500;
    opacity: 0.5;
    margin-bottom: 0.4rem;
  }
  .block + .block {
    margin-top: 1.6rem;
  }
`;

const Word = styled.div`
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(3.5rem, 24vw, 24rem);
  line-height: 0.78;
  letter-spacing: -0.05em;
  white-space: nowrap;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: clamp(2rem, 5vh, 4rem);
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.7;
`;

const TopBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.16em;
  opacity: 1;
  span {
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  &:hover span {
    transform: translateY(-4px);
  }
`;

export function Footer() {
  const lenis = useLenis();
  const toTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Section id="colophon">
      <Inner>
        <Top>
          <div>
            <Colophon style={{ marginBottom: '2rem' }}>
              <h5>The Exhibition</h5>
              {exhibition.tagline}
            </Colophon>
            <ArtistList>
              {works.map((w) => (
                <ArtistItem key={w.id}>
                  <span className="idx">{w.index}</span>
                  <span className="name">{w.artist}</span>
                  <span className="roman">{w.title}</span>
                </ArtistItem>
              ))}
            </ArtistList>
          </div>

          <Colophon>
            <div className="block">
              <h5>Based On</h5>
              2001: A SPACE ODYSSEY
              <br />
              DIR. STANLEY KUBRICK · 1968
            </div>
            <div className="block">
              <h5>Built With</h5>
              REACT · TYPESCRIPT
              <br />
              STYLED-COMPONENTS
              <br />
              FRAMER MOTION · LENIS · PDF.JS
            </div>
            <div className="block">
              <h5>Made By</h5>
              미림마이스터고
              <br />
              학생 {workCount}인 · {exhibition.year}
            </div>
            <div className="block">
              <h5>Format</h5>
              INTERACTIVE WEB ART
              <br />
              {workCount} WORKS · {workCount} STUDENTS
            </div>
          </Colophon>
        </Top>

        <Reveal y={30}>
          <Word aria-hidden>{exhibition.title}</Word>
        </Reveal>

        <Bottom>
          <span>© {exhibition.year} {exhibition.title} — 미림마이스터고 STUDENTS</span>
          <TopBtn onClick={toTop} data-cursor="TOP">
            BACK TO TOP <span>↑</span>
          </TopBtn>
        </Bottom>
      </Inner>
    </Section>
  );
}
