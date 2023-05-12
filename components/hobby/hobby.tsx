import { motion } from 'framer-motion';
import React from 'react';

// 미구현
const Hobby = () => {
  return (
    <section
      id="hobby"
      className="container relative flex flex-col items-center h-full max-w-full gap-10 py-20 mx-auto overflow-hidden justify-evenly border-b-2"
      style={{ marginTop: 0 }}>
      <h3 className="absolute text-2xl tracking-widest uppercase top-5 md:top-10">Hobbies</h3>
      <p className="absolute text-xs text-gray-500 top-14 md:top-20">
        개인적인 <span className="font-bold text-sky-500">취미와 </span><span className="font-bold text-sky-500">관심사</span>
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{ marginTop: 50 }}
      >
        동아리 활동 <span className="font-bold text-red-500">..</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        맛집 탐방 <span className="font-bold text-red-500">..</span>
        링크 태그 및 취미 추가, 설명
      </motion.div>
    </section>
  );
};

export default Hobby;
