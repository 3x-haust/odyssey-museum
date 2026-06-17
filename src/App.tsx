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
  filter: grayscale(1) contrast(1.04) brightness(0.72);
`;

const BackdropTint = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: rgba(255, 255, 255, 0.74);
`;

const Stage = styled.div`
  position: relative;
  z-index: 2;
  width: min(100vw, 177.7778svh);
  height: min(100svh, 56.25vw);
  min-height: 540px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 58px 1fr 52px;

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
  padding: clamp(18px, 2.8vw, 40px) clamp(18px, 3.2vw, 54px) clamp(14px, 2vw, 28px);
  display: grid;
  grid-template-rows: auto 1fr;
  gap: clamp(14px, 2vw, 26px);
`;

const Hero = styled(motion.section)`
  text-align: center;
`;

const HeroTitle = styled.p`
  max-width: 1024px;
  margin: 0 auto;
  color: var(--foreground, #111111);
  font-size: clamp(1.35rem, 3.2vw, 3.05rem);
  line-height: 1.18;
  word-break: keep-all;

  strong {
    font-weight: 700;
  }

  .highlight {
    display: inline-block;
    margin: 0 0.38em;
    padding: 0 0.34em 0.04em;
    color: var(--background, #ffffff);
    background: var(--foreground, #111111);
    font-weight: 600;
    white-space: nowrap;
    vertical-align: baseline;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: clamp(12px, 1.4vw, 20px);
  min-height: 0;

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
`;

const CardWrap = styled(motion.article)`
  height: 100%;
`;

const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(14px);
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
  padding: clamp(14px, 1.75vw, 24px);
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PostTitle = styled.button`
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
  color: var(--foreground, #111111);
  font-family: ${({ theme }) => theme.font.kr};
  font-size: clamp(1rem, 1.35vw, 1.35rem);
  font-weight: 500;
  line-height: 1.35;
  word-break: keep-all;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: var(--primary, #111111);
  }
`;

const Excerpt = styled.p`
  margin-bottom: 12px;
  color: var(--muted-foreground, #666666);
  font-family: ${({ theme }) => theme.font.kr};
  font-size: clamp(0.72rem, 0.92vw, 0.92rem);
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
  word-break: keep-all;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--muted-foreground, #666666);
  font-size: clamp(0.62rem, 0.78vw, 0.78rem);
  line-height: 1.2;
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
  padding-top: 14px;
`;

const Action = styled.button<{ $primary?: boolean }>`
  min-height: 34px;
  padding: 0 clamp(10px, 1.1vw, 14px);
  border: 1px solid
    ${({ $primary }) =>
      $primary ? 'var(--primary, #111111)' : 'var(--border, rgba(0, 0, 0, 0.16))'};
  background: ${({ $primary }) => ($primary ? 'var(--primary, #111111)' : 'transparent')};
  color: ${({ $primary }) => ($primary ? 'var(--primary-foreground, #ffffff)' : 'inherit')};
  font-size: clamp(0.72rem, 0.86vw, 0.88rem);
  font-weight: 500;
  transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
    border-color: var(--primary, #111111);
    background: ${({ $primary }) => ($primary ? '#2a2a2a' : 'var(--muted, #f2f2f2)')};
  }
`;

const Footer = styled.footer`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  border-top: 1px solid var(--border, rgba(0, 0, 0, 0.16));
`;

const FooterInner = styled.div`
  max-width: 100%;
  margin: 0 auto;
  height: 52px;
  padding: 0 clamp(18px, 3.2vw, 54px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: var(--muted-foreground, #666666);
  font-size: 0.75rem;
  line-height: 1.4;

  @media (max-width: 560px) {
    align-items: center;
    flex-direction: row;
  }
`;

const FooterBrand = styled.span`
  color: var(--foreground, #111111);
  font-weight: 600;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--foreground, #111111);
  }
`;

export default function App() {
  const [infoWork, setInfoWork] = useState<Work | null>(null);
  const [liveWork, setLiveWork] = useState<Work | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Shell>
        <BackgroundVideo src="/배경.mp4" autoPlay muted loop playsInline aria-hidden />
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
                  <span className="highlight">인터랙션 웹아트</span>
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

          <Footer>
            <FooterInner>
              <FooterBrand>EX.IT</FooterBrand>
              <SocialLinks aria-label="social links">
                <a href="https://github.com/3x-haust" target="_blank" rel="noreferrer">
                  GitHub 3x-haust
                </a>
                <a href="https://www.instagram.com/3xhaust_" target="_blank" rel="noreferrer">
                  Instagram 3xhaust_
                </a>
              </SocialLinks>
            </FooterInner>
          </Footer>
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
