export interface EducationData {
  institute: string;
  period: string;
  clname: string[];
  retroUrl?: string;
}

export const educationData: EducationData[] = [
  {
    institute: 'Dart, Flutter, Firebase, Django',
    clname: ['앱 프로그래밍 Using Flutter & Django'],
    period: '2023 ~',
  },
  {
    institute: 'TypeScript, Next.js, Firebase, React',
    clname: ['동아리 벌점 조회 웹페이지'],
    period: '2023.04 ~ 2023.05',
  },
  {
    institute: 'UI 테스트 자동화, Appium',
    clname: ['Appium을 이용한 UI 테스트 자동화'],
    period: '2022.04 ~ 2022.05',
  },
  {
    institute: 'Python, OpenCV',
    clname: ['Python OpenCV를 이용한 이미지, 영상처리'],
    period: '2021.08 ~ 2021.09',
  },
  {
    institute: 'Unity 머신러닝 에이전트, ML-Agents, 강화학습',
    clname: ['머신러닝 에이전트 설계 경험'],
    period: '2020.06 ~ 2020.10',
  },
  {
    institute: '조교(C++, Java, Python, S/W설계)',
    clname: ['소프트웨어 공학 개론'],
    period: '2021-2학기',
  },
  {
    institute: '조교(Java, 디자인 패턴)',
    clname: ['객체지향설계와 패턴'],
    period: '2021-1학기',
  },
  {
    institute: '조교(C++, Python, S/W설계, Junit, Selenium)',
    clname: ['소프트웨어 공학 개론, ', '소프트웨어 테스팅(대학원)'],
    period: '2020-2학기',
  },
  {
    institute: '조교(Java, 디자인 패턴)',
    clname: ['객체지향 설계와 패턴'],
    period: '2020-1학기',
  },
  {
    institute: '조교(Java, C++)',
    clname: ['소프트웨어 공학 개론, ', '자료구조와 실습, ', '객체지향 소프트웨어 공학론(대학원)'],
    period: '2019-2학기',
  },
];
