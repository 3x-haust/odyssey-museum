import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { works, workCount, type Work } from './data/works';
import { WorkModal } from './components/WorkModal';
import { LiveStage } from './components/LiveStage';

const Shell = styled.div`
  min-height: 100svh;
  background: var(--background, #ffffff);
  color: var(--foreground, #111111);
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.z.nav};
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border, rgba(0, 0, 0, 0.16));
`;

const HeaderInner = styled.div`
  max-width: 1280px;
  height: 56px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 16px;

  @media (min-width: 640px) {
    padding: 0 24px;
  }

  @media (min-width: 1024px) {
    padding: 0 32px;
  }
`;

const Brand = styled.button`
  flex: 0 0 auto;
  font-family: ${({ theme }) => theme.font.sans};
  font-size: 1.5rem;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 0;
`;

const HeaderSpacer = styled.div`
  margin-left: auto;
  color: var(--muted-foreground, #666666);
  font-size: 0.875rem;
`;

const Main = styled.main`
  padding-bottom: 80px;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 16px 0;

  @media (min-width: 640px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (min-width: 1024px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

const Hero = styled(motion.section)`
  margin-bottom: 24px;
  text-align: center;
`;

const HeroTitle = styled.p`
  max-width: 1024px;
  margin: 0 auto;
  color: var(--foreground, #111111);
  font-size: clamp(1.5rem, 4.3vw, 2.25rem);
  line-height: 1.38;
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
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
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
  background: var(--card, #ffffff);
  border: 1px solid var(--border, rgba(0, 0, 0, 0.16));
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 0, 0, 0.24);
    box-shadow: 0 16px 34px rgba(17, 17, 17, 0.1);
  }
`;

const PreviewButton = styled.button`
  position: relative;
  width: 100%;
  height: 192px;
  overflow: hidden;
  background: var(--muted, #f2f2f2);
  text-align: left;

  & > div {
    min-height: 192px;
    transition: transform 0.5s ease;
  }

  ${Card}:hover & > div {
    transform: scale(1.05);
  }
`;

const PreviewArt = styled.div`
  height: 192px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--muted, #f2f2f2);
  color: var(--muted-foreground, #666666);
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 0.82rem;
  letter-spacing: 0.34em;
  text-transform: uppercase;
`;

const CardBody = styled.div`
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PostTitle = styled.button`
  width: 100%;
  text-align: left;
  margin-bottom: 12px;
  color: var(--foreground, #111111);
  font-family: ${({ theme }) => theme.font.kr};
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5;
  word-break: keep-all;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: var(--primary, #111111);
  }
`;

const Excerpt = styled.p`
  margin-bottom: 16px;
  color: var(--muted-foreground, #666666);
  font-family: ${({ theme }) => theme.font.kr};
  font-size: 0.875rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
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
  font-size: 0.75rem;
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
  margin-top: 20px;
`;

const Action = styled.button<{ $primary?: boolean }>`
  min-height: 36px;
  padding: 0 14px;
  border: 1px solid
    ${({ $primary }) =>
      $primary ? 'var(--primary, #111111)' : 'var(--border, rgba(0, 0, 0, 0.16))'};
  background: ${({ $primary }) => ($primary ? 'var(--primary, #111111)' : 'transparent')};
  color: ${({ $primary }) => ($primary ? 'var(--primary-foreground, #ffffff)' : 'inherit')};
  font-size: 0.875rem;
  font-weight: 500;
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
        <Header>
          <HeaderInner>
            <Brand onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              EX.IT
            </Brand>
            <HeaderSpacer>{workCount} posts</HeaderSpacer>
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
                    <PreviewButton
                      type="button"
                      onClick={() => setInfoWork(work)}
                      aria-label={`${work.title} 자세히 보기`}
                    >
                      <PreviewArt>WORK {work.index}</PreviewArt>
                    </PreviewButton>

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
                          읽기
                        </Action>
                        {work.liveReady && (
                          <Action $primary type="button" onClick={() => setLiveWork(work)}>
                            실행
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
