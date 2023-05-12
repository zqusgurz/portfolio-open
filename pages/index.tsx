import type { NextPage } from 'next';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Experience from '../components/experience/Experience';
import PAPERS from '../components/Papers/Papers';
import More from '../components/more/More';


const Main: NextPage = () => {
  return (
    <main className="relative w-11/12 mx-auto md:w-4/5">
      <Home />
      <About />
      <PAPERS/>
      <Experience />
      <More />
      {/* <Hobby/> */}
    </main>
  );
};

export default Main;
