import styled, { keyframes } from 'styled-components';
import type { Work } from '../data/works';

const Wrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: ${({ theme }) => theme.color.ink};
  color: ${({ theme }) => theme.color.paper};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(16px, 2.4vw, 30px);
`;

const dash = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: -1200px 0; }
`;

const Lines = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.5;
  background-image: repeating-linear-gradient(
    90deg,
    transparent 0 28px,
    rgba(255, 255, 255, 0.16) 28px 30px
  );
  background-size: 1200px 100%;
  animation: ${dash} 1.1s linear infinite;
  mask-image: linear-gradient(90deg, transparent, #000 30%, #000 70%, transparent);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Top = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.7;
`;

const Big = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(2.2rem, 7vw, 5rem);
  line-height: 0.9;
  letter-spacing: -0.03em;
`;

const Bottom = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.7;
`;

export function PlaceholderVisual({ work }: { work: Work }) {
  return (
    <Wrap aria-hidden>
      <Lines />
      <Top>
        <span>NO PROCESS DOC</span>
        <span>LOCAL EXPORT</span>
      </Top>
      <Big>{work.titleEn}</Big>
      <Bottom>
        <span>WORK {work.index}</span>
        <span>{work.artist}</span>
      </Bottom>
    </Wrap>
  );
}
