interface Routes {
  [x: string]: string | URL;
  HOME: string;
  ABOUT: string;
  PAPERS: string;
  EXPERIENCE: string;
  MORE: string;
  CONTACT: string;
  GITHUB: string;
  EMAIL: string;
  HOBBY: string;
  INSTAGRAM: string;
}

export const ROUTES: Routes = {
  HOME: '#home',
  ABOUT: '#about',
  PAPERS: '#papers',
  EXPERIENCE: '#experience',
  INSTAGRAM: 'https://instagram.com/re__volution?igshid=ZDdkNTZiNTM=',
  EMAIL: 'rexs333@naver.com',
  MORE: '#more',
  CONTACT: '/contact',
  GITHUB: 'https://github.com/zqusgurz',
  HOBBY: '#hobby',
};

export default ROUTES;
