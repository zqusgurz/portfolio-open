import { StaticImageData } from 'next/image';
import Project_44 from 'public/images/Project_44.png';
import url1 from 'public/images/gvg-ai/pdf1.png';
import url2 from 'public/images/gvg-ai/pdf2.png';
import url3 from 'public/images/gvg-ai/pdf3.png';
import url4 from 'public/images/gvg-ai/pdf4.png';
import review_1 from 'public/images/review_1.png'


type Description = {
  tag: string;
  content: string;
};

type Url = {
  pageUrl?: string;
  githubUrl: string;
  notionUrl?: string;
  figmaUrl?: string;
  retroUrl?: string;
  paperUrl?: string;
};

export interface Papers {
  title: string;
  descriptions: Description[];
  retrospective: string;
  keyword: string[];
  stack: string[];
  period: string;
  type: string;
  imgUrl: StaticImageData[];
  url: Url;
}

const papers: Papers[] = [
  {
    title: 'UI 상호작용 요소를 이용한 시스템 테스트 자동화',
    keyword: ['System Test', 'Test Automation', 'DFS', 'RTP', 'UI Interaction Element', 'State Diagram'],
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Notion API'],
    period: '2021 . 11 ~ 2022 . 07',
    type: '졸업 논문',
    imgUrl: [Project_44],
    url: {
      pageUrl: 'https://minilog.vercel.app/',
      paperUrl: 'http://www.riss.or.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=d32c1e92592166a2ffe0bdc3ef48d419&keyword=UI+%EC%83%81%ED%98%B8%EC%9E%91%EC%9A%A9+%EC%9A%94%EC%86%8C%EB%A5%BC+%EC%9D%B4%EC%9A%A9%ED%95%9C+%EC%8B%9C%EC%8A%A4%ED%85%9C+%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%9D%98+%EC%9E%90%EB%8F%99%ED%99%94',
      githubUrl: 'https://github.com/zqusgurz',
      retroUrl: 'http://www.riss.or.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=d32c1e92592166a2ffe0bdc3ef48d419&keyword=UI+%EC%83%81%ED%98%B8%EC%9E%91%EC%9A%A9+%EC%9A%94%EC%86%8C%EB%A5%BC+%EC%9D%B4%EC%9A%A9%ED%95%9C+%EC%8B%9C%EC%8A%A4%ED%85%9C+%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%9D%98+%EC%9E%90%EB%8F%99%ED%99%94'

    },
    descriptions: [
      {
        tag: 'feature',
        content: '테스트 케이스, 스크립트 생성 알고리즘을 통해 테스트를 진행하므로, 휴먼 오류가 없는 테스트를 할 수 있습니다.',
      },
      {
        tag: 'feature',
        content:
          '설계 문서 기반 테스트 스크립트 작성 방법인 <a href="https://www.computer.org/csdl/proceedings-article/compsac/2015/6564c672/12OmNvkYxct"><strong>[15]</strong></a>와 비교, 테스트 스크립트 작성에 필요한 시간과 테스트 자동화 과정의 각 단계에서 발생하는 시간을 비교하였습니다.',
      },
      {
        tag: 'feature',
        content:
          'UI 상호작용 요소를 이용한 시스템 테스트가 기존 모델 기반 테스트보다 테스트 효율성이 높았으며, 다른 설계 모델과 비교하였을 때 테스트에 더욱 효과적이라는 것을 증명하였습니다.',
      },

    ] as Description[],
    retrospective:
      '소프트웨어 개발 단계에서 시스템 테스팅은 최종 요구 명세와 비교하여 검증하는 작업으로 중요하며, 많은 시간과 비용이 드는 과정입니다. 검증 효과를 높이면서 비용을 줄이기 위해서는 자동화가 필요합니다. 시스템 단위의 테스트는 구현된 UI 상호작용 요소를 파악하여 어떤 부분을 자극해야 하는지 알 수 있지만, 상호작용의 순서는 파악하기 어렵습니다. 본 논문에서는 웹 소프트웨어에서 UI 상호작용 요소를 추출하고, 상호작용 과정을 상태 다이어그램에 작성하여 시스템 테스트 케이스를 찾아냅니다. 즉, 파악한 테스트 경로를 통해 상호작용 요소에 순서를 부여하고 테스트 케이스를 작성하여 시스템 테스트를 자동화하는 방법을 제시합니다.',

  },
  {
    title: 'System Test Automation by Using UI Interaction Elements',
    keyword: [],
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    period: '2022.04.08 - 2022.05.27',
    type: '투고 논문',
    imgUrl: [review_1],
    url: {
      pageUrl: 'https://hyuk-portfolio.vercel.app/',
      paperUrl: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11113294&nodeId=NODE11113294&medaTypeCode=185005&language=ko_KR&hasTopBanner=true',
      githubUrl: 'https://github.com/zqusgurz',
      retroUrl: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11113294&nodeId=NODE11113294&medaTypeCode=185005&language=ko_KR&hasTopBanner=true',
    },
    descriptions: [
      {
        tag: 'feature',
        content:
          '심사위원님께서 지적하신 UI 설계 명세를 상태 다이어그램으로 표현하는 부분의 수작업을 최대한 줄일 수 있도록 연구를 진행하였습니다.',
      },
      {
        tag: 'feature',
        content: 'One Time Effort, UI 설계 명세를 상태 다이어그램으로 표현하는 작업 외에 모든 부분을 자동화 하였습니다.',
      },
      {
        tag: 'feature',
        content:
          '학위 논문을 요약하여 논문의 방향이 올바른지 심사위원님께 피드백 받을 수 있는 좋은 경험이었습니다.',
      },
    ] as Description[],
    retrospective:
      '본 논문에서는 UI 설계 명세를 상태 다이어그램으로 표현하고, 깊이 우선 탐색(Depth-First Search: DFS)을 통해 나오는 신장 트리를 이용하여 상태 차트 중간 그래프를 추출하였습니다. 그리고 상태 차트 중간 그래프를 왕복 경로(Round Trip Path: RTP) 알고리즘을 이용하여 테스트 경로를 추출하였으며, 이를 바탕으로 상호작용 요소를 부여하여 테스트 케이스를 작성하였습니다. 이 논문에서는 Espresso라는 테스트 드라이버의 테스트 스크립트 구조를 파악하여 상호작용 요소와 테스트 케이스를 이용하여 테스트 스크립트를 자동으로 생성하도록 프로그래밍, 해당 코드를 테스트 프레임워크에서 실행시켜 자동화된 테스트를 수행하였습니다.',
  },
  {
    title: 'Game Testing Using Agents based on GVG-AI Framework',
    keyword: [],
    stack: ['JavaScript', 'React', 'Context API'],
    period: '2020.06.04 - 2020.10.26',
    type: '투고 논문',
    imgUrl: [url1, url2, url3, url4],
    url: {
      githubUrl: 'https://github.com/zqusgurz',
      paperUrl: 'https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE10529591',
      retroUrl: 'https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE10529591'
    },
    descriptions: [
      {
        tag: 'feature',
        content:
          '모델 없이 학습하는 Q-Learning 알고리즘을 사용하는 Sarsa(State Action Reward State Action)가 적용된 에이전트를 이용하여 버그를 탐지할 수 있는지 연구하며, 직접 알고리즘을 적용할 수 있는 좋은 경험이었습니다.',
      },
      {
        tag: 'feature',
        content:
          '본 연구에서는 강화학습을 적용한 버그 탐지 에이전트의 학습을 통해, 게임 플레이 테스트의 효과적인 수행이 가능하다는 것을 실험으로 확인하였습니다.',
      },
      
    ] as Description[],
    retrospective:
      '비디오 게임 산업에서 성공의 중요한 요소 중 하나인 게임 플레이 테스트는 비용이 많이 드는 작업입니다. 비용을 줄이고 효과적으로 테스트하기 위하여 여러 가지 방법 중 AI를 사용하여 인간처럼 테스트하는 에이전트 기반의 프레임워크를 사용합니다. 본 논문은 일반적인 에이전트 프레임워크인 GVG-AI을 통해 에이전트를 구성하여 VGDL(Video Game Description Language)로 작성된 게임 파일을 테스팅하는 방법을 제안하였습니다. 에이전트는 Sarsa 알고리즘을 사용하여 학습하고 VGDL로 Map 파일을 작성한 후 게임 파일에 의도적으로 버그인 부서지지 않는 벽을 생성한 뒤 탐지할 수 있는지 에이전트 기반의 테스트를 실험하였습니다.',

  },

];

export default papers;
