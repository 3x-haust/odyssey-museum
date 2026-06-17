import { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { Work } from '../data/works';
import { useScrollLock } from '../hooks/useSmoothScroll';
import { PlaceholderVisual } from './PlaceholderVisual';

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.z.modal};
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(10px) saturate(120%);
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

const Panel = styled(motion.div)`
  position: relative;
  width: min(1180px, 94vw);
  height: min(860px, 92vh);
  margin: auto;
  background: ${({ theme }) => theme.color.paper};
  color: ${({ theme }) => theme.color.ink};
  display: grid;
  grid-template-rows: minmax(260px, 54%) minmax(0, 46%);
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.color.ink};

  @media (max-width: 860px) {
    width: min(94vw, 720px);
    height: min(92vh, 820px);
    grid-template-rows: minmax(220px, 44%) minmax(0, 56%);
  }
`;

const Aside = styled.div`
  padding: clamp(18px, 2.2vw, 34px);
  display: grid;
  grid-template-columns: minmax(220px, 0.85fr) minmax(0, 1.6fr);
  gap: clamp(18px, 2.4vw, 34px);
  border-top: 1px solid ${({ theme }) => theme.color.line};
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

const Summary = styled.div`
  min-width: 0;
`;

const Details = styled.div`
  min-width: 0;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.g500};
  margin-bottom: 1.4rem;
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.font.kr};
  font-weight: 900;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1;
  letter-spacing: -0.03em;
`;

const TitleEn = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.g500};
  margin: 0.6rem 0 1.6rem;
`;

const Label = styled.h4`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.g500};
  margin: 1.8rem 0 0.7rem;
`;

const Concept = styled.p`
  font-family: ${({ theme }) => theme.font.kr};
  font-weight: 300;
  font-size: 0.96rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.color.g900};
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 1.4rem;
  font-family: ${({ theme }) => theme.font.kr};
  font-weight: 300;
  font-size: 0.9rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.color.g700};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.color.ink};
  }
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechChip = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 5px 10px;
  background: ${({ theme }) => theme.color.ink};
  color: ${({ theme }) => theme.color.paper};
`;

const OfficialName = styled.p`
  font-family: ${({ theme }) => theme.font.kr};
  font-weight: 500;
  font-size: 0.92rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.g700};
  padding-left: 12px;
  border-left: 2px solid ${({ theme }) => theme.color.ink};
  margin-bottom: 1.4rem;
`;

const ModalActions = styled.div`
  padding-top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LiveBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 20px;
  background: ${({ theme }) => theme.color.ink};
  color: ${({ theme }) => theme.color.paper};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  border-radius: 100px;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  .ic {
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  &:hover {
    transform: translateY(-2px);
  }
  &:hover .ic {
    transform: translateX(4px);
  }
`;

const LinkRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Open = styled.a`
  flex: 1;
  min-width: 140px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  padding: 0 18px;
  border: 1px solid ${({ theme }) => theme.color.ink};
  border-radius: 100px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  transition: background 0.3s, color 0.3s;
  span.a {
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  &:hover {
    background: ${({ theme }) => theme.color.ink};
    color: ${({ theme }) => theme.color.paper};
  }
  &:hover span.a {
    transform: translate(4px, -4px);
  }
`;

const LaunchPanel = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  padding: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.color.paper};

  .frame {
    width: min(80%, 520px);
  }
  .note {
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    opacity: 0.7;
    max-width: 42ch;
    line-height: 1.8;
  }
`;

const BigLaunch = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  height: 54px;
  padding: 0 28px;
  background: ${({ theme }) => theme.color.paper};
  color: ${({ theme }) => theme.color.ink};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  border-radius: 100px;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  &:hover {
    transform: scale(1.04);
  }
`;

const Viewer = styled.div`
  position: relative;
  background: ${({ theme }) => theme.color.g700};
  min-height: 0;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media (max-width: 860px) {
    min-height: 0;
  }
`;

const Close = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 3;
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.color.paper};
  border: 1px solid ${({ theme }) => theme.color.ink};
  border-radius: 50%;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 16px;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s;

  &:hover {
    transform: rotate(90deg);
    background: ${({ theme }) => theme.color.ink};
    color: ${({ theme }) => theme.color.paper};
  }
`;

interface Props {
  work: Work;
  onClose: () => void;
  onLaunch: (work: Work) => void;
}

export function WorkModal({ work, onClose, onLaunch }: Props) {
  useScrollLock(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <Backdrop
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Panel
        role="dialog"
        aria-modal="true"
        aria-label={`${work.artist} — ${work.title}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Viewer>
          <Close onClick={onClose} aria-label="닫기" data-cursor="CLOSE">
            ✕
          </Close>
          {work.pdf ? (
            <iframe
              src={`${work.pdf}#view=FitH&toolbar=1`}
              title={`${work.artist} ${work.title} PDF`}
            />
          ) : (
            <LaunchPanel>
              <div className="frame">
                <PlaceholderVisual work={work} />
              </div>
              {work.liveReady ? (
                <BigLaunch onClick={() => onLaunch(work)} data-cursor="LAUNCH">
                  작품 실행 ▶
                </BigLaunch>
              ) : (
                <BigLaunch onClick={onClose} data-cursor="CLOSE">
                  닫기
                </BigLaunch>
              )}
              <p className="note">
                제작 과정 PDF가 없어 대표 비주얼을 표시합니다.
                {work.liveReady
                  ? ' 작품 실행은 좌측 버튼에서 확인할 수 있습니다.'
                  : ' 제공된 PDF와 올바른 프로젝트 export가 없어 작품 정보만 표시합니다.'}
              </p>
            </LaunchPanel>
          )}
        </Viewer>

        <Aside data-lenis-prevent>
          <Summary>
            <Meta>
              <span>WORK {work.index}</span>
              <span>{work.artist}</span>
            </Meta>
            <Title>{work.title}</Title>
            <TitleEn>{work.titleEn}</TitleEn>

            {work.officialTitle !== work.title && (
              <OfficialName>작품명 — {work.officialTitle}</OfficialName>
            )}

            <Label>주제 / Theme</Label>
            <Concept>{work.theme}</Concept>

            <ModalActions>
              {work.liveReady ? (
                <LiveBtn onClick={() => onLaunch(work)} data-cursor="LAUNCH">
                  웹 아트 실행 <span className="ic">▶</span>
                </LiveBtn>
              ) : (
                <LiveBtn onClick={() => onLaunch(work)} data-cursor="OPEN">
                  작품 정보 보기 <span className="ic">→</span>
                </LiveBtn>
              )}
              <LinkRow>
                {work.pdf && (
                  <Open href={work.pdf} target="_blank" rel="noreferrer" data-cursor="PDF">
                    기획안 PDF <span className="a">↗</span>
                  </Open>
                )}
              </LinkRow>
            </ModalActions>
          </Summary>

          <Details>
            <Label>콘셉트 / Concept</Label>
            <Concept>{work.concept}</Concept>

            <Label>중점 / Highlights</Label>
            <List>
              {work.highlights.map((h, i) => (
                <ListItem key={i}>{h}</ListItem>
              ))}
            </List>

            <Label>기술 / Stack</Label>
            <TechRow>
              {work.tech.map((t) => (
                <TechChip key={t}>{t}</TechChip>
              ))}
            </TechRow>
          </Details>
        </Aside>
      </Panel>
    </Backdrop>
  );
}
