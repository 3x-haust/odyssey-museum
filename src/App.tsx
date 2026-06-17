import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { works, type Work } from './data/works';
import { WorkModal } from './components/WorkModal';
import { LiveStage } from './components/LiveStage';

const Shell = styled.div`
  position: relative;
  width: 100vw;
  height: 100svh;
  overflow: hidden;
  background: #050505;
  color: var(--foreground, #111111);
`;

const BackgroundVideo = styled.video`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  filter: grayscale(0.18) contrast(1.12) brightness(0.56);
`;

const BackdropTint = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.26) 0%,
    rgba(0, 0, 0, 0.12) 44%,
    rgba(0, 0, 0, 0.24) 100%
  );
`;

const Stage = styled.div`
  position: relative;
  z-index: 2;
  width: min(100vw, 177.7778svh);
  height: min(100svh, 56.25vw);
  min-height: 540px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 58px 1fr;

  @media (max-height: 720px) {
    min-height: 100svh;
  }
`;

const Header = styled.header`
  position: relative;
  z-index: ${({ theme }) => theme.z.nav};
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border, rgba(0, 0, 0, 0.16));
`;

const HeaderInner = styled.div`
  max-width: 100%;
  height: 56px;
  margin: 0 auto;
  padding: 0 clamp(18px, 3.2vw, 54px);
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Brand = styled.button`
  flex: 0 0 auto;
  font-family: ${({ theme }) => theme.font.sans};
  font-size: 1.5rem;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 0;
`;

const HeaderMark = styled.div`
  margin-left: auto;
  color: var(--foreground, #111111);
  font-family: ${({ theme }) => theme.font.kr};
  font-size: clamp(0.82rem, 1.2vw, 1rem);
  font-weight: 700;
  letter-spacing: 0.04em;
  white-space: nowrap;
`;

const Main = styled.main`
  min-height: 0;
  overflow: hidden;
`;

const Container = styled.div`
  height: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: clamp(16px, 2.1vw, 30px) clamp(18px, 2.4vw, 44px) clamp(14px, 1.5vw, 22px);
  display: grid;
  grid-template-rows: auto auto;
  align-content: center;
  gap: clamp(28px, 3vw, 46px);
`;

const Hero = styled(motion.section)`
  text-align: center;
`;

const HeroTitle = styled.p`
  max-width: 1024px;
  margin: 0 auto;
  color: #ffffff;
  font-family: ${({ theme }) => theme.font.kr};
  font-size: clamp(1.55rem, 3.45vw, 3.65rem);
  line-height: 1.12;
  word-break: keep-all;

  strong {
    font-weight: 700;
  }

  .highlight {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.38em;
    min-height: 1.18em;
    padding: 0.145em 0.34em;
    color: #111111;
    background: #ffffff;
    font-family: ${({ theme }) => theme.font.kr};
    font-weight: 800;
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(2, clamp(220px, 23vh, 270px));
  gap: clamp(20px, 2vw, 34px);
  min-height: 0;

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(3, clamp(176px, 18vh, 220px));
  }
`;

const CardWrap = styled(motion.article)`
  height: 100%;
  min-height: 0;
`;

const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.76);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border, rgba(0, 0, 0, 0.16));
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 0, 0, 0.24);
    box-shadow: 0 16px 34px rgba(17, 17, 17, 0.1);
  }
`;

const CardBody = styled.div`
  min-height: 0;
  padding: clamp(16px, 1.55vw, 26px);
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.font.kr};
`;

const PostTitle = styled.button`
  width: 100%;
  text-align: left;
  margin-bottom: clamp(8px, 0.8vw, 14px);
  color: var(--foreground, #111111);
  font-family: ${({ theme }) => theme.font.kr};
  font-size: clamp(1.08rem, 1.38vw, 1.5rem);
  font-weight: 700;
  line-height: 1.35;
  word-break: keep-all;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: var(--primary, #111111);
  }
`;

const Excerpt = styled.p`
  margin-bottom: clamp(12px, 1.2vw, 22px);
  color: #161616;
  font-family: ${({ theme }) => theme.font.kr};
  font-size: clamp(0.88rem, 0.98vw, 1.08rem);
  font-weight: 700;
  line-height: 1.75;
  overflow: visible;
  word-break: keep-all;
  overflow-wrap: normal;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  color: #262626;
  font-family: ${({ theme }) => theme.font.kr};
  font-weight: 700;
  font-size: clamp(0.7rem, 0.78vw, 0.86rem);
  line-height: 1.45;
  flex-wrap: wrap;
`;

const Dot = styled.span`
  width: 3px;
  height: 3px;
  background: currentColor;
  display: inline-block;
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
  padding-top: clamp(10px, 1vw, 18px);
`;

const Action = styled.button<{ $primary?: boolean }>`
  min-height: clamp(34px, 2.2vw, 42px);
  padding: 0 clamp(12px, 1.15vw, 18px);
  border: 1px solid
    ${({ $primary }) =>
      $primary ? 'var(--primary, #111111)' : 'var(--border, rgba(0, 0, 0, 0.16))'};
  background: ${({ $primary }) => ($primary ? 'var(--primary, #111111)' : 'transparent')};
  color: ${({ $primary }) => ($primary ? 'var(--primary-foreground, #ffffff)' : 'inherit')};
  font-size: clamp(0.75rem, 0.88vw, 0.92rem);
  font-weight: 500;
  line-height: 1.2;
  transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
    border-color: var(--primary, #111111);
    background: ${({ $primary }) => ($primary ? '#2a2a2a' : 'var(--muted, #f2f2f2)')};
  }
`;

export default function App() {
  const [infoWork, setInfoWork] = useState<Work | null>(null);
  const [liveWork, setLiveWork] = useState<Work | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Shell>
        <BackgroundVideo src="/background.mp4" autoPlay muted loop playsInline aria-hidden />
        <BackdropTint />

        <Stage>
          <Header>
            <HeaderInner>
              <Brand onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                EX.IT
              </Brand>
              <HeaderMark>MICRO 교육과정</HeaderMark>
            </HeaderInner>
          </Header>

          <Main>
            <Container>
              <Hero initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <HeroTitle>
                  2001 스페이스 오디세이
                  <span className="highlight">인터렉션 웹아트</span>
                </HeroTitle>
              </Hero>

              <Cards>
                {works.map((work, index) => (
                  <CardWrap
                    key={work.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <Card>
                      <CardBody>
                        <PostTitle type="button" onClick={() => setInfoWork(work)}>
                          {work.title}
                        </PostTitle>
                        <Excerpt>{work.theme}</Excerpt>
                        <Meta>
                          <span>{work.artist}</span>
                          <Dot aria-hidden />
                          <span>Work {work.index}</span>
                          <Dot aria-hidden />
                          <span>Interactive</span>
                        </Meta>

                        <Actions>
                          <Action type="button" onClick={() => setInfoWork(work)}>
                            기획안
                          </Action>
                          {work.liveReady && (
                            <Action $primary type="button" onClick={() => setLiveWork(work)}>
                              웹 아트 실행
                            </Action>
                          )}
                        </Actions>
                      </CardBody>
                    </Card>
                  </CardWrap>
                ))}
              </Cards>
            </Container>
          </Main>

        </Stage>

        <AnimatePresence>
          {infoWork && (
            <WorkModal
              work={infoWork}
              onClose={() => setInfoWork(null)}
              onLaunch={setLiveWork}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {liveWork && <LiveStage work={liveWork} onClose={() => setLiveWork(null)} />}
        </AnimatePresence>
      </Shell>
    </ThemeProvider>
  );
}
