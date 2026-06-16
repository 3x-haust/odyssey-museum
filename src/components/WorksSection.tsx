import { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { works, workCount, type Work } from '../data/works';
import { WorkShowcase } from './WorkShowcase';
import { WorkModal } from './WorkModal';
import { LiveStage } from './LiveStage';
import { Reveal } from './Reveal';

const Section = styled.section`
  position: relative;
  background: ${({ theme }) => theme.color.paper};
  color: ${({ theme }) => theme.color.ink};
  padding-top: clamp(40px, 8vh, 100px);
`;

const Header = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 var(--gutter) clamp(20px, 4vh, 40px);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  gap: 1rem;
`;

const HeaderTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(2.4rem, 7vw, 6rem);
  line-height: 0.86;
  letter-spacing: -0.04em;
`;

const HeaderMeta = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.g500};
  text-align: right;
`;

const Divider = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  height: 1px;
  background: ${({ theme }) => theme.color.line};
`;

export function WorksSection() {
  const [infoWork, setInfoWork] = useState<Work | null>(null);
  const [liveWork, setLiveWork] = useState<Work | null>(null);

  return (
    <Section id="works">
      <Header>
        <Reveal y={20}>
          <HeaderTitle>SELECTED WORKS</HeaderTitle>
        </Reveal>
        <HeaderMeta>
          INDEX
          <br />
          0{workCount} / 0{workCount}
        </HeaderMeta>
      </Header>

      {works.map((work, i) => (
        <div key={work.id}>
          <WorkShowcase
            work={work}
            i={i}
            total={workCount}
            onOpen={setInfoWork}
            onLaunch={setLiveWork}
          />
          {i < works.length - 1 && <Divider />}
        </div>
      ))}

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
    </Section>
  );
}
