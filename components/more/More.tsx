import { motion } from 'framer-motion';
import React from 'react';

const More = () => {
  return (
    <section
      id="more"
      className="container relative flex flex-col items-center h-full max-w-full gap-20 py-20 mx-auto overflow-hidden justify-evenly border-b-2"
      style={{marginTop: 0}}
    >
      <h2 className="text-xl font-bold" style={{fontSize:24}}>풀스택 개발자가 되기로 한 이유</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        어릴 적부터 컴퓨터에 관심이 많았고, 컴퓨터를 접한 지 얼마 되지 않아 코딩을 시작했습니다. 
        인터넷을 찾아보며 코딩을 따라하다 보면 결과물이 나오게 되는데, 그때마다 결과물과 코드의 
        구성을 분석하고 수정해 보며 즐거움을 느꼈습니다. 특히 프론트엔드 개발에서 코드 한 줄만 
        수정해도 결과물이 바로바로 반영되는 것이 매력적이었고, 이를 계기로 <span className="font-bold text-red-500">프론트엔드</span> 공부를 시작했습니다.
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        그러나 본격적으로 개발을 시작하면서, 실제로 배포 가능한 서비스를 구현하기 위해서는 <span className="font-bold text-red-500">백엔드</span>의 
        도움이 필요하다는 것을 깨달았습니다. 백엔드 공부를 하면서 제가 생각한 서비스를 실제로 
        구현해 보는 과정에서, 프론트엔드와 백엔드 모두의 역할과 중요성을 깨닫게 되었습니다. 
        그래서, 프론트엔드와 백엔드를 모두 이해하고 능숙하게 다룰 수 있는 풀스택 개발자가 되면,
        개발 프로세스에서 더 전반적인 이해와 효율적인 협업이 가능할 것으로 생각하여 제 성향과 적성에 맞는 
        <span className="font-bold text-red-500"> 풀스택 개발자</span>를 목표로 하게 되었습니다.
      </motion.div>
    </section>
  );
};

export default More;
