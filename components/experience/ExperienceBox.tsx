import React from 'react';
import { motion } from 'framer-motion';
import { EducationData } from '../../data/educationData';

type Props = {
  education: EducationData;
  index: number;
  style?: React.CSSProperties;
  isFirst: boolean;
};
const ExperienceBox = ({ education, index, isFirst }: Props) => (
  <div className="flex flex-col items-center justify-center w-2/screen h-fit gap-2 pb-10 mt-10 border-b-2 md:even:flex-row md:odd:flex-row-reverse">
    <motion.div
      initial={{ opacity: 0, x: '-100' }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 + (0.05 * index) }}
      className="w-full p-4 text-center h-fit" style={{ marginTop: isFirst ? '130px' : '0' }}
    >
      {education.retroUrl ? (
        <a href={education.retroUrl} target="_blank" rel="noreferrer" className="text-sm font-bold md:text-lg">
          {education.clname}
        </a>
      ) : (
        <h2 className="text-sm font-bold md:text-lg">{education.clname}</h2>
      )}
      <h3 className="text-xs md:text-sm">{education.period}</h3>

      <p className="text-xs font-bold md:text-sm">{education.institute}</p>
    </motion.div>
  </div>
);

export default ExperienceBox;
