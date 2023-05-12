import React from 'react';
import ExperienceBox from '../../components/experience/ExperienceBox';
import { educationData } from '../../data/educationData';

const Experience = () => (
  <section
    id="experience"
    className="container relative flex flex-col items-center justify-center min-h-screen gap-7"
  >
    <h3 className="absolute text-2xl tracking-widest uppercase top-5 md:top-10">Experience</h3>
    <p className="absolute text-xs text-gray-500 top-14 md:top-20">
      대학원에서의 <span className="font-bold text-sky-500">경험과 연구 활동</span>
    </p>
    {educationData.map((data, index) => (
      <ExperienceBox key={String(data.clname)} education={data} index={index} isFirst={index === 0} />
      ))}
  </section>
);

export default Experience;
