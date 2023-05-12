import React from 'react';
import PapersBox from '../../components/Papers/PapersBox';
import papers from '../../data/paperData';

const Papers = () => {
  return (
    <section
      id="papers"
      className="container relative flex flex-col items-center h-full max-w-full gap-20 py-20 mx-auto overflow-hidden justify-evenly md:flex-row"
    >
      <h3 className="absolute text-2xl tracking-widest uppercase top-10 md:top-14">Papers</h3>
      <p className="absolute text-xs text-gray-500 top-20 md:top-24">
        논문 이미지와 버튼을 클릭하면 <span className="text-sky-500">논문 링크</span>로
        연결됩니다.
      </p>
      <div className="flex flex-col gap-0">
        {papers.map(paper => (
          <PapersBox key={paper.title} paper={paper} />
        ))}
      </div>
    </section>
  );
};

export default Papers;
