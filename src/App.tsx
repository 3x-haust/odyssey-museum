import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { works, workCount, type Work } from './data/works';
import { WorkModal } from './components/WorkModal';
import { LiveStage } from './components/LiveStage';

const Shell = styled.div`
  min-height: 100svh;
  background: ${({ theme }) => theme.color.paper};
  color: ${({ theme }) => theme.color.ink};
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.z.nav};
  height: 58px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lineSoft};
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
`;

const HeaderInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 0 clamp(20px, 3vw, 32px);
`;

const Brand = styled.button`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0;
`;

const HeaderMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.color.g500};

  @media (max-width: 640px) {
    .hide-sm {
      display: none;
    }
  }
`;

const Main = styled.main`
  padding: 0 clamp(20px, 3vw, 32px);
`;

const Hero = styled.section`
  min-height: clamp(410px, 55svh, 560px);
  display: grid;
  place-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.lineSoft};
`;

const TitleBlock = styled.div`
  width: min(1040px, 100%);
  text-align: center;
`;

const Eyebrow = styled.p`
  margin-bottom: 26px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.color.g500};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.kr};
  font-size: clamp(3rem, 9vw, 8.5rem);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: 0;
  text-wrap: balance;
  word-break: keep-all;
`;

const Intro = styled.p`
  max-width: 760px;
  margin: 28px auto 0;
  font-family: ${({ theme }) => theme.font.kr};
  font-size: clamp(1rem, 1.7vw, 1.22rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.color.g700};
  word-break: keep-all;
`;

const ListSection = styled.section`
  max-width: 1012px;
  margin: 0 auto;
  padding: clamp(38px, 6vw, 76px) 0 clamp(80px, 10vw, 140px);
`;

const ListHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.color.ink};
`;

const ListTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.kr};
  font-size: clamp(1.15rem, 2vw, 1.5rem);
  font-weight: 700;
  letter-spacing: 0;
`;

const Count = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.color.g500};
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Post = styled.article`
  display: grid;
  grid-template-columns: 76px minmax(0, 1fr) auto;
  gap: clamp(18px, 3vw, 36px);
  align-items: baseline;
  padding: clamp(22px, 4vw, 38px) 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.lineSoft};

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const Index = styled.div`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.color.g500};
`;

const PostBody = styled.div`
  min-width: 0;
`;

const PostTitle = styled.h3`
  font-family: ${({ theme }) => theme.font.kr};
  font-size: clamp(1.65rem, 4vw, 3.15rem);
  font-weight: 760;
  line-height: 1.08;
  letter-spacing: 0;
  word-break: keep-all;
`;

const PostSub = styled.p`
  margin-top: 10px;
  max-width: 720px;
  font-family: ${({ theme }) => theme.font.kr};
  font-size: clamp(0.98rem, 1.5vw, 1.08rem);
  line-height: 1.68;
  color: ${({ theme }) => theme.color.g700};
  word-break: keep-all;
`;

const Artist = styled.p`
  margin-top: 16px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.color.g500};
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  @media (max-width: 760px) {
    justify-content: flex-start;
  }
`;

const Action = styled.button<{ $primary?: boolean }>`
  height: 38px;
  padding: 0 14px;
  border: 1px solid
    ${({ theme, $primary }) => ($primary ? theme.color.ink : theme.color.line)};
  background: ${({ theme, $primary }) => ($primary ? theme.color.ink : theme.color.paper)};
  color: ${({ theme, $primary }) => ($primary ? theme.color.paper : theme.color.ink)};
  font-family: ${({ theme }) => theme.font.kr};
  font-size: 14px;
  border-radius: 6px;
  white-space: nowrap;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.ink};
    background: ${({ theme, $primary }) => ($primary ? theme.color.g900 : theme.color.g100)};
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 28px clamp(20px, 3vw, 32px);
  border-top: 1px solid ${({ theme }) => theme.color.lineSoft};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.color.g500};

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
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
            <HeaderMeta>
              <span>{workCount} posts</span>
              <span className="hide-sm">Interactive Web Art</span>
            </HeaderMeta>
          </HeaderInner>
        </Header>

        <Main>
          <Hero>
            <TitleBlock>
              <Eyebrow>2001: A Space Odyssey</Eyebrow>
              <Title>2001 스페이스 오디세이 인터랙션 웹아트</Title>
              <Intro>
                영화의 시간, 감시, 진화, 소리와 공간을 각자의 방식으로 다시 만든
                인터랙션 웹아트 기록입니다.
              </Intro>
            </TitleBlock>
          </Hero>

          <ListSection aria-label="작품 글 목록">
            <ListHeader>
              <ListTitle>글 목록</ListTitle>
              <Count>{workCount} entries</Count>
            </ListHeader>

            <PostList>
              {works.map((work) => (
                <Post key={work.id}>
                  <Index>{work.index}</Index>
                  <PostBody>
                    <PostTitle>{work.title}</PostTitle>
                    <PostSub>{work.theme}</PostSub>
                    <Artist>
                      {work.artist} · {work.artistRoman}
                    </Artist>
                  </PostBody>
                  <Actions>
                    <Action onClick={() => setInfoWork(work)}>읽기</Action>
                    {work.liveReady && (
                      <Action $primary onClick={() => setLiveWork(work)}>
                        실행
                      </Action>
                    )}
                  </Actions>
                </Post>
              ))}
            </PostList>
          </ListSection>
        </Main>

        <Footer>
          <span>EX.IT</span>
          <span>2001 스페이스 오디세이 인터랙션 웹아트</span>
        </Footer>

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
