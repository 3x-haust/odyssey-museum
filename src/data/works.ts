export interface Work {
  id: string;
  index: string;
  artist: string;
  artistRoman: string;
  title: string;
  titleEn: string;
  officialTitle: string;
  subtitle: string;
  theme: string;
  concept: string;
  highlights: string[];
  tags: string[];
  tech: string[];
  appSlug: string;
  appScript: string;
  appStyle: string;
  liveReady: boolean;
  pdf?: string;
}

export const exhibition = {
  title: 'ODYSSEY',
  subtitle: '인터랙션 웹 아트 6선',
  tagline: '2001: 스페이스 오디세이를 여섯 개의 시선으로 재해석하다',
  taglineEn: 'Six interactive readings of 2001: A Space Odyssey',
  year: '2026',
} as const;

const workEntries: Work[] = [
  {
    id: 'kim-taehwan',
    index: '01',
    artist: '김태환',
    artistRoman: 'KIM TAEHWAN',
    title: '시간의 너머',
    titleEn: 'Beyond Time',
    officialTitle: '시간의 너머',
    subtitle: '인간의 시간에서 우주의 시간으로',
    theme: '영화 속 초현실적인 시간의 흐름을 스크롤 기반 인터랙티브 웹으로 재해석',
    concept:
      '사용자는 단순히 화면을 보는 것이 아니라, 스크롤과 인터랙션을 통해 인간의 시간에서 우주의 시간으로 이동한다. 시간의 압축, 시스템 붕괴, 초월과 재탄생의 과정을 직접 체험하며 영화 속 공간 그 자체로 걸어 들어간다.',
    highlights: [
      'HAL 9000의 메모리를 직접 제거하며 인공지능의 붕괴를 체험',
      '웹사이트가 아닌 "영화 속 공간"을 체험하는 감각을 목표',
      '스크롤 자체가 시간을 이동하는 행위처럼 느껴지도록 설계',
      '스타게이트의 강한 색 변화·왜곡으로 시공간 붕괴를 표현',
    ],
    tags: ['Scroll Narrative', 'HAL 9000', 'Stargate', 'Rebirth'],
    tech: ['Exported Web App', 'Scroll-driven Sequence'],
    appSlug: 'kim-taehwan',
    appScript: 'index-Cqz-iTit.js',
    appStyle: 'index-BqZSfo3Y.css',
    liveReady: true,
    pdf: '/works/kim-taehwan.pdf',
  },
  {
    id: 'park-miju',
    index: '02',
    artist: '박미주',
    artistRoman: 'PARK MIJU',
    title: '경계를 여는 빛',
    titleEn: 'Light Beyond the Boundary',
    officialTitle: '경계를 여는 빛',
    subtitle: '틀을 깨는 기하학적 붕괴와 성장',
    theme: '모노리스와 기하학적인 붕괴를 통해 틀을 깨는 성장을 표현한 웹 아트',
    concept:
      '진화의 순간마다 등장하는 비석, 모노리스를 중심 요소로 삼아 규칙적이던 기하학적 우주가 붕괴하는 과정을 그렸다. 진정한 성장을 이루려면 우리가 의존하던 도구와 틀을 스스로 깨고 나와야 한다는 메시지를 담았다.',
    highlights: [
      'WebGL(Three.js) 기반 몰입형 3D 웹 아트',
      '1:4:9 비례의 대리석 조각을 드래그해 조립하는 인터랙션',
      '끝없는 웜홀 스크롤로 Z축 심연 속으로 빨려 들어감',
      '심연의 블랙 + 절제된 시안 네온 블룸의 고급스러운 질감',
    ],
    tags: ['WebGL', 'Three.js', '1:4:9', 'Bloom'],
    tech: ['Exported Web App', 'Three.js', 'EffectComposer'],
    appSlug: 'park-miju',
    appScript: 'index-C4vNWHf6.js',
    appStyle: 'index-DI4m5nj_.css',
    liveReady: true,
    pdf: '/works/park-miju.pdf',
  },
  {
    id: 'park-chaeyoon',
    index: '03',
    artist: '박채윤',
    artistRoman: 'PARK CHAEYOON',
    title: '인공지능의 이면',
    titleEn: 'The Lens',
    officialTitle: '인공지능의 이면과 렌즈를 시각적으로 표현한 웹 아트',
    subtitle: '렌즈로 시각화한 AI의 시선',
    theme: '인공지능의 이면을 시각적으로 표현한 "렌즈(눈)"에 대한 탐구',
    concept:
      'HAL 9000의 렌즈를 단순한 카메라가 아닌, 인간처럼 세상을 바라보고 판단하는 하나의 "눈"으로 해석했다. 정돈된 시스템처럼 보이던 화면은 점점 과밀해지고, 사용자는 인공지능의 내부 공간 속으로 들어가는 듯한 감각을 느낀다.',
    highlights: [
      '인간의 눈이 점점 렌즈처럼 보이도록 연출',
      '반복되는 사각형 구조·데이터 패널·시스템 로그로 감시 분위기 강화',
      'HAL의 시선이 사용자를 관찰하고 침식하는 긴장감',
      '사용자가 직접 HAL의 내부 시스템을 해체하는 경험',
    ],
    tags: ['Surveillance', 'Data Panel', 'System Log', 'Eye'],
    tech: ['Exported Web App', 'Generative UI'],
    appSlug: 'park-chaeyoon',
    appScript: 'index-CO25g-Ii.js',
    appStyle: 'index-BsyirMfF.css',
    liveReady: true,
    pdf: '/works/park-chaeyoon.pdf',
  },
  {
    id: 'jung-jiyoung',
    index: '04',
    artist: '정지영',
    artistRoman: 'JUNG JIYOUNG',
    title: '디지털 천공 피아노',
    titleEn: 'Digital Celestial Piano',
    officialTitle: '디지털천공피아노',
    subtitle: 'SF와 클래식 BGM의 조화',
    theme: '천공을 네온빛 디지털 데이터 블록으로 치환한, SF와 Classic BGM의 조화',
    concept:
      '<2001 스페이스 오디세이>가 시대를 앞선 영상미 위에 고전 클래식을 더한 데서 출발했다. 사용자는 마우스 스크롤로 디지털 건반을 누르듯 직접 동력을 공급하며, 음악의 재생과 속도를 실시간으로 제어한다.',
    highlights: [
      '휠 스크롤 속도(deltaY)를 재생 속도(0.5~2.0x)와 실시간 연동',
      '차라투스트라(Gold)·아트모스페르(Vivid)·도나우강(Neon Blue) 테마',
      '레이저 충돌·입자 폭발·글로우 등 강렬한 충돌 시각 효과',
      'SF 게임 타이틀 인트로 + 커스텀 타겟팅 커서',
    ],
    tags: ['Audio Reactive', 'Wheel Tempo', 'Themes', 'HUD'],
    tech: ['Exported Web App', 'Web Audio', 'Canvas'],
    appSlug: 'jung-jiyoung',
    appScript: 'index-CrGy56K8.js',
    appStyle: 'index-Bn52Merl.css',
    liveReady: true,
    pdf: '/works/jung-jiyoung.pdf',
  },
  {
    id: 'jo-yechan',
    index: '05',
    artist: '조예찬',
    artistRoman: 'JO YECHAN',
    title: '기록된 시선',
    titleEn: 'A Surveillance Odyssey',
    officialTitle: '기록된 시선',
    subtitle: '당신을 지켜보는 HAL',
    theme: 'HAL의 이면을 시각적으로 표현한 감시의 오디세이',
    concept:
      'HAL 9000이 인간을 감시하는 모습에서 영감을 받아, 사용자가 사이트를 이용하는 과정에서 AI에게 관찰당하는 듯한 긴장감과 불편함을 느끼도록 구성했다. 스크롤·클릭·타이핑 등 모든 행동이 감시의 대상이 된다.',
    highlights: [
      '격자로 숨겨진 빨간 눈들이 마우스를 집요하게 추적',
      '경고를 무시하고 10회 연타 시 HAL 9000 동공 등장 + 글리치 마비',
      '타이핑을 뒤늦게 복사하는 청각적 스토킹',
      '[이스터에그] "HAL 9000" 입력 시 시스템 강제 제어',
    ],
    tags: ['Mouse Tracking', 'Glitch', 'Easter Egg', 'HAL 9000'],
    tech: ['Exported Web App', 'Web Audio'],
    appSlug: 'jo-yechan',
    appScript: 'index-DuCDJtnc.js',
    appStyle: 'index-BjfYi25P.css',
    liveReady: true,
    pdf: '/works/jo-yechan.pdf',
  },
  {
    id: 'lee-seohyun',
    index: '06',
    artist: '이서현',
    artistRoman: 'LEE SEOHYUN',
    title: '0 → 정점',
    titleEn: 'Zero to Apex',
    officialTitle: "최소 단위인 점'이 영화적 '메카닉'으로 진화하는가",
    subtitle: "최소 단위 '점'이 영화적 메카닉으로 진화하다",
    theme: '기하학적 최소 단위인 "점"이 정밀한 메카닉으로 진화해 나가는 서사적 과정',
    concept:
      '칠흑 같은 화면 중앙의 빛나는 점 하나가 분열하며 선을 이루고, 폴리곤과 와이어프레임 골격을 거쳐 기어·실린더·볼트가 박히는 거대한 메카닉으로 완성된다. 정밀함의 진화를 실시간 상호작용과 시네마틱 연출로 담아냈다.',
    highlights: [
      'React Three Fiber(R3F) 기반 절차적 부품 배치',
      'Phase 1~4: 점 → 골격 → 부품 밀도 → 완성된 메카닉',
      '스크롤 깊이에 따른 매크로 줌 ↔ 와이드 샷 카메라 전환',
      'Bloom·Vignette 포스트 프로세싱과 기계음 SFX',
    ],
    tags: ['R3F', 'InstancedMesh', 'Macro Zoom', 'Post FX'],
    tech: ['Exported Web App', 'React Three Fiber'],
    appSlug: 'lee-seohyun',
    appScript: 'index-D7PL2rD8.js',
    appStyle: 'index-wnElibMu.css',
    liveReady: true,
    pdf: '/works/lee-seohyun.pdf',
  },
];

export const works: Work[] = [
  workEntries[1],
  workEntries[2],
  workEntries[3],
  workEntries[4],
  workEntries[5],
  workEntries[0],
].map((work, index) => ({
  ...work,
  index: String(index + 1).padStart(2, '0'),
}));

export const workCount = String(works.length).padStart(2, '0');
