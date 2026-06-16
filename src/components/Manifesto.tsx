import styled from 'styled-components';
import { Reveal, MaskLines } from './Reveal';
import { works } from '../data/works';

const Section = styled.section`
  background: ${({ theme }) => theme.color.paper};
  color: ${({ theme }) => theme.color.ink};
  padding: clamp(80px, 14vh, 200px) 0 clamp(60px, 10vh, 120px);
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 var(--gutter);
`;

const Kicker = styled.div`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.g500};
  margin-bottom: clamp(2rem, 6vh, 4rem);
  display: flex;
  gap: 1rem;
  align-items: center;

  &::before {
    content: '';
    width: 40px;
    height: 1px;
    background: ${({ theme }) => theme.color.ink};
  }
`;

const Statement = styled.h2`
  font-family: ${({ theme }) => theme.font.kr};
  font-weight: 700;
  font-size: clamp(1.7rem, 4.6vw, 4rem);
  line-height: 1.12;
  letter-spacing: -0.03em;
  max-width: 20ch;
`;

const Grid = styled.div`
  margin-top: clamp(2.5rem, 7vh, 5rem);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Body = styled.div`
  grid-column: 7 / 13;
  font-family: ${({ theme }) => theme.font.kr};
  font-weight: 300;
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  line-height: 1.75;
  color: ${({ theme }) => theme.color.g700};

  p + p {
    margin-top: 1.2em;
  }

  @media (max-width: 820px) {
    grid-column: 1 / -1;
  }
`;

const IndexStrip = styled.div`
  margin-top: clamp(4rem, 12vh, 9rem);
  border-top: 1px solid ${({ theme }) => theme.color.ink};
`;

const IndexItem = styled.a`
  display: grid;
  grid-template-columns: 3rem 1fr auto;
  align-items: baseline;
  gap: 1.2rem;
  padding: clamp(0.9rem, 2vw, 1.5rem) 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  transition: padding-left 0.45s cubic-bezier(0.16, 1, 0.3, 1);

  .n {
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 11px;
    letter-spacing: 0.14em;
    color: ${({ theme }) => theme.color.g500};
  }
  .name {
    font-family: ${({ theme }) => theme.font.kr};
    font-weight: 900;
    font-size: clamp(1.6rem, 5vw, 3.4rem);
    line-height: 1;
    letter-spacing: -0.02em;
  }
  .kr {
    font-family: ${({ theme }) => theme.font.kr};
    font-weight: 500;
    font-size: clamp(0.85rem, 1.4vw, 1.05rem);
    color: ${({ theme }) => theme.color.g500};
    text-align: right;
  }

  &:hover {
    padding-left: clamp(0.6rem, 2vw, 2rem);
  }
  &:hover .kr {
    color: ${({ theme }) => theme.color.ink};
  }
`;

export function Manifesto() {
  return (
    <Section>
      <Inner>
        <Reveal>
          <Kicker>
            <span>CURATORIAL NOTE</span>
          </Kicker>
        </Reveal>

        <Statement>
          <MaskLines text="하나의 영화, 일곱 개의 우주." />
        </Statement>

        <Grid>
          <Body style={{ gridColumnStart: 7 }}>
            <Reveal delay={0.05}>
              <p>
                미림마이스터고 학생 일곱 명이 스탠리 큐브릭의 <em>&lt;2001: 스페이스
                오디세이&gt;</em>를 각자의 방식으로 해체하고 다시 조립했다. 모노리스의 침묵,
                HAL 9000의 붉은 눈, 스타게이트의 빛 — 같은 원천에서 출발했지만 누구도
                같은 곳에 도착하지 않았다.
              </p>
              <p>
                스크롤은 시간을 가르고, 마우스는 기계를 깨우며, 휠의 속도는 음악이 된다.
                이 전시는 흑과 백의 여백 위에서, 오직 작품만이 빛나도록 설계되었다.
                각 작품을 클릭해 원본 기록을 펼쳐 보라.
              </p>
            </Reveal>
          </Body>
        </Grid>

        <IndexStrip>
          {works.map((w) => (
            <IndexItem key={w.id} href="#works" data-cursor="VIEW">
              <span className="n">{w.index}</span>
              <span className="name">{w.artist}</span>
              <span className="kr">{w.title}</span>
            </IndexItem>
          ))}
        </IndexStrip>
      </Inner>
    </Section>
  );
}
