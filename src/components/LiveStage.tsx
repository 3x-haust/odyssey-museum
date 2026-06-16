import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import type { Work } from '../data/works';
import { useScrollLock } from '../hooks/useSmoothScroll';

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.z.modal + 5};
  background: ${({ theme }) => theme.color.ink};
  display: flex;
  flex-direction: column;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 12px clamp(14px, 2.4vw, 28px);
  background: ${({ theme }) => theme.color.ink};
  color: ${({ theme }) => theme.color.paper};
  border-bottom: 1px solid ${({ theme }) => theme.color.lineInv};
  flex: 0 0 auto;
`;

const Left = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;
  min-width: 0;

  .idx {
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 11px;
    opacity: 0.55;
  }
  .title {
    font-family: ${({ theme }) => theme.font.kr};
    font-weight: 700;
    font-size: clamp(0.95rem, 1.6vw, 1.2rem);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .artist {
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    opacity: 0.55;
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.25; }
`;

const LiveDot = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.2em;
  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.paper};
    animation: ${pulse} 1.4s ease-in-out infinite;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 0 0 auto;
`;

const Action = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 14px;
  border: 1px solid ${({ theme }) => theme.color.lineInv};
  border-radius: 100px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.paper};
  transition: background 0.25s, color 0.25s;
  &:hover {
    background: ${({ theme }) => theme.color.paper};
    color: ${({ theme }) => theme.color.ink};
  }
`;

const CloseBtn = styled.button`
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.color.lineInv};
  border-radius: 50%;
  color: ${({ theme }) => theme.color.paper};
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.25s, color 0.25s;
  &:hover {
    transform: rotate(90deg);
    background: ${({ theme }) => theme.color.paper};
    color: ${({ theme }) => theme.color.ink};
  }
`;

const Frame = styled.div`
  position: relative;
  flex: 1 1 auto;
  background: ${({ theme }) => theme.color.ink};
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }
`;

const scan = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(2200%); }
`;

const Loading = styled(motion.div)`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.color.ink};
  color: ${({ theme }) => theme.color.paper};
  overflow: hidden;

  .label {
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 11px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    opacity: 0.7;
  }
  .scanline {
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ theme }) => theme.color.paper};
    opacity: 0.5;
    animation: ${scan} 2.2s linear infinite;
  }
`;

interface Props {
  work: Work;
  onClose: () => void;
}

export function LiveStage({ work, onClose }: Props) {
  useScrollLock(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <Overlay
      initial={{ opacity: 0, clipPath: 'inset(45% 20% 45% 20%)' }}
      animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
      exit={{ opacity: 0, clipPath: 'inset(45% 20% 45% 20%)' }}
      transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
    >
      <Bar>
        <Left>
          <span className="idx">{work.index}</span>
          <span className="title">{work.title}</span>
          <span className="artist">{work.artist}</span>
        </Left>
        <LiveDot>LIVE</LiveDot>
        <Actions>
          <Action href={work.studioUrl} target="_blank" rel="noreferrer" data-cursor="STUDIO">
            AI STUDIO ↗
          </Action>
          <CloseBtn onClick={onClose} aria-label="닫기" data-cursor="CLOSE">
            ✕
          </CloseBtn>
        </Actions>
      </Bar>

      <Frame>
        <iframe
          src={`/apps/${work.appSlug}/index.html`}
          title={`${work.artist} — ${work.title}`}
          allow="autoplay; fullscreen; microphone; camera; xr-spatial-tracking; accelerometer; gyroscope"
          onLoad={() => setLoaded(true)}
        />
        {!loaded && (
          <Loading exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <div className="scanline" />
            <span className="label">LOADING EXPERIENCE — {work.titleEn}</span>
          </Loading>
        )}
      </Frame>
    </Overlay>
  );
}
