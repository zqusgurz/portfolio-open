export interface AboutData {
  title: string;
  content: string;
}

type AboutDetail = AboutData[];

export const aboutDetailData: AboutDetail = [
  {
    title: '몰입을 좋아합니다.',
    content:
      '새로운 언어 학습, 연구나 프로그래밍을 수행할 때, 몰두하며 학습하는 것을 좋아합니다.',
  },
  {
     title: '실험하고 탐구하는 것을 즐깁니다.',
     content:
       '실험과 연구를 통해 문제를 해결하고 새로운 아이디어를 발견하는 것에 도전적인 자세로 임하며, 지속적인 성장을 위해 노력합니다.',
  },
  {
    title: '개발 도구, 기술에 관심이 많습니다.',
    content:
      '새로운 개발 도구와 기술에 대해 항상 관심을 가지고, 새로운 기술 및 개발 도구를 익히고 적용하는 것을 즐기며, 이를 통해 개발 능력을 향상시키는 것을 즐기고 있습니다.',
  },
  {
    title: '개발자로써의 미래에 대한 꿈과 열정을 가지고 있습니다.',
    content:
      '함께 성장하고 발전하는 개발자로써, 컴퓨터 공학 분야에서 꾸준히 기여하고 선도할 수 있는 인재가 되어 나가겠습니다.',
  },
];
