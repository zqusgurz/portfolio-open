import React, {useRef, useEffect} from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Papers } from '../../data/paperData';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


type Props = {
  paper: Papers;
};

const PapersBox = ({ paper }: Props) => {
  const { title, keyword, descriptions, retrospective, period, type, imgUrl, url } = paper;
  const { paperUrl, retroUrl } = url;


  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-2 pb-2 mt-10 border-b-2 md:even:flex-row md:odd:flex-row-reverse">

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative overflow-hidden w-60 md:w-1/2 md:h-1/2 overflow-y-scroll"
      >
        {imgUrl.map((iurl, index) => (
          <a key={index} href={paperUrl} target="_blank" rel="noreferrer">
            <Image src={iurl} alt="" layout="responsive" />
          </a>
        ))}     

      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="px-0 text-center md:w-1/2 md:px-10"
      >
        <h4 className="text-xl md:text-2xl font-semibold text-center hover:before:content-['🔗']">
          <a href={paperUrl} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h4>
        <p className="text-base">{type}</p>
        <p className="text-xs text-gray-400">{period}</p>
        {keyword.map(k => (
          <span key={k} className="mr-1 text-sm md:font-semibold md:text-base text-sky-500">
            {k == "State Diagram" ? k : k + ','}
          </span>
        ))}
        <div className="my-3 text-sm font-bold text-left text-gray-600 md:text-base dark:text-gray-400">
          {retrospective}
        </div>
        <div className="my-4 text-left">
          {descriptions.map((description, index) => (
            <p
              key={description.tag + index}
              className="my-1 text-xs before:content-['⭐'] text-gray-600 dark:text-gray-400 md:text-sm"
              dangerouslySetInnerHTML={{ __html: description.content }}
            ></p>
          ))}
        </div>
        {retroUrl && (
          <a
            className="px-2 py-1 text-sm font-bold rounded bg-sky-500 text-sky-100 hover:text-sky-500 hover:bg-sky-100 hover:before:content-['🔗']"
            href={retroUrl}
            target="_blank" rel="noreferrer"
          >
            {title} 보러가기
          </a>
        )}
      </motion.div>
    </div>
  );
};

export default PapersBox;
