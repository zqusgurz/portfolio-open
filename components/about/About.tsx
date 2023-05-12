import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AboutDetail from '../../components/about/AboutDetail';
import { aboutDetailData } from '../../data/aboutData';
// import { useMediaQuery } from 'react-responsive';

const About = () => {
  // const isMobile = useMediaQuery({ query: "(max-width : 767px)"});

  return (
    <section
      id="about"
      className="container relative flex flex-col-reverse items-center justify-center h-screen gap-10 md:flex-row"
    >
      <h3 className="absolute text-2xl tracking-widest uppercase top-5 md:top-10">About</h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col w-full md:w-2/3"
      >
        <h2 className="mb-5 text-base md:text-3xl">안녕하세요👋 Full-Stack 개발자 변혁입니다.</h2>
        <div className="flex flex-col gap-2 lg">
          {aboutDetailData.map((data, index) => (
            <AboutDetail key={index} data={data} />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ x: '50%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative w-40 h-40 overflow-hidden md:w-96 md:h-96"
      >
        <Image className="w-full h-full object-cover rounded-full" src="/icons/profile_long.svg" layout="fill" alt={''} />

      </motion.div>
    </section>
  );
};

export default About;
