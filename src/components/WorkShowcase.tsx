import { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Work } from '../data/works';
import { PdfCanvas } from './PdfCanvas';
import { PlaceholderVisual } from './PlaceholderVisual';
import { LensReveal } from './LensReveal';

const Article = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: clamp(1.5rem, 4vw, 4rem);
  align-items: center;
  padding: clamp(70px, 12vh, 150px) var(--gutter);
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Media = styled(motion.button)<{ $flip: boolean }>`
  position: relative;
  grid-column: ${({ $flip }) => ($flip ? '7 / 13' : '1 / 7')};
  grid-row: 1;
  z-index: 2;
  display: block;
  width: 100%;
  text-align: left;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
  }
`;

const Card = styled.div`
  position: relative;
  background: ${({ theme }) => theme.color.ink};
  border: 1px solid ${({ theme }) => theme.color.line};
  overflow: hidden;
`;

const Badges = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 5;
  display: flex;
  gap: 6px;
`;

const Badge = styled.span<{ $live?: boolean }>`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  padding: 5px 9px;
  background: ${({ theme, $live }) => ($live ? theme.color.paper : 'rgba(0,0,0,0.62)')};
  color: ${({ theme, $live }) => ($live ? theme.color.ink : theme.color.paper)};
  backdrop-filter: blur(4px);
  display: inline-flex;
  align-items: center;
  gap: 6px;

  ${({ $live }) =>
    $live &&
    `&::before { content:''; width:6px; height:6px; border-radius:50%; background:#000; }`}
`;

const Info = styled.div<{ $flip: boolean }>`
  position: relative;
  z-index: 2;
  grid-column: ${({ $flip }) => ($flip ? '1 / 7' : '7 / 13')};
  grid-row: 1;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
  }
`;

const IndexMark = styled.div`
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(2.6rem, 5vw, 4.4rem);
  line-height: 0.8;
  letter-spacing: -0.04em;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: baseline;
  gap: 12px;

  small {
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 11px;
    letter-spacing: 0.16em;
    color: ${({ theme }) => theme.color.g500};
  }
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.g500};
  margin-bottom: 1.2rem;
  flex-wrap: wrap;
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.font.kr};
  font-weight: 900;
  font-size: clamp(2.1rem, 5vw, 4.6rem);
  line-height: 0.98;
  letter-spacing: -0.035em;
  margin-bottom: 0.5rem;
`;

const TitleEn = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: clamp(11px, 1vw, 13px);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.g500};
  margin-bottom: 1.6rem;
`;

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.font.kr};
  font-weight: 500;
  font-size: clamp(1.05rem, 1.6vw, 1.35rem);
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const Theme = styled.p`
  font-family: ${({ theme }) => theme.font.kr};
  font-weight: 300;
  font-size: clamp(0.92rem, 1.2vw, 1.05rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.color.g700};
  max-width: 46ch;
  margin-bottom: 1.8rem;
`;

const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 2.2rem;
`;

const Tag = styled.li`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 6px 11px;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 100px;
  color: ${({ theme }) => theme.color.g700};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

const Primary = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 48px;
  padding: 0 22px;
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

const GhostLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 48px;
  padding: 0 6px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
  &:hover {
    border-color: ${({ theme }) => theme.color.ink};
  }
`;

const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 48px;
  padding: 0 22px;
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

const Ghost = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 48px;
  padding: 0 6px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
  &:hover {
    border-color: ${({ theme }) => theme.color.ink};
  }
`;

interface Props {
  work: Work;
  i: number;
  total: string;
  onOpen: (work: Work) => void;
  onLaunch: (work: Work) => void;
}

export function WorkShowcase({ work, i, total, onOpen, onLaunch }: Props) {
  const flip = i % 2 === 1;
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);

  return (
    <Article ref={ref}>
      <Media
        $flip={flip}
        style={{ y: mediaY }}
        onClick={() => onOpen(work)}
        data-cursor="VIEW"
        aria-label={`${work.artist} — ${work.title} 자세히 보기`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card>
            <Badges>
              <Badge>AI STUDIO</Badge>
              {work.liveReady && <Badge $live>LIVE</Badge>}
            </Badges>
            <LensReveal>
              {work.pdf ? (
                <PdfCanvas url={work.pdf} label={`WORK ${work.index}`} />
              ) : (
                <PlaceholderVisual work={work} />
              )}
            </LensReveal>
          </Card>
        </motion.div>
      </Media>

      <Info $flip={flip}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -12% 0px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <IndexMark>
            {work.index}
            <small>/ {total}</small>
          </IndexMark>
          <MetaRow>
            <span>{work.artist}</span>
            <span>{work.tech[0]}</span>
          </MetaRow>
          <Title>{work.title}</Title>
          <TitleEn>{work.titleEn}</TitleEn>
          <Subtitle>{work.subtitle}</Subtitle>
          <Theme>{work.theme}</Theme>
          <Tags>
            {work.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </Tags>
          <Actions>
            {work.liveReady ? (
              <Primary onClick={() => onLaunch(work)} data-cursor="LAUNCH">
                작품 실행 <span className="ic">▶</span>
              </Primary>
            ) : work.pdf ? (
              <Primary onClick={() => onOpen(work)} data-cursor="OPEN">
                제작 과정 보기 <span className="ic">→</span>
              </Primary>
            ) : (
              <PrimaryLink href={work.studioUrl} target="_blank" rel="noreferrer" data-cursor="STUDIO">
                AI Studio에서 열기 <span className="ic">↗</span>
              </PrimaryLink>
            )}

            {work.liveReady && work.pdf && (
              <Ghost onClick={() => onOpen(work)} data-cursor="OPEN">
                제작 과정
              </Ghost>
            )}

            <GhostLink href={work.studioUrl} target="_blank" rel="noreferrer" data-cursor="STUDIO">
              AI Studio ↗
            </GhostLink>
          </Actions>
        </motion.div>
      </Info>
    </Article>
  );
}
