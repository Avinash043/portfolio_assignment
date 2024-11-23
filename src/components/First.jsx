import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useInView } from "react";

function First() {
 
  return (
    <>
      <motion.div
        

        className="flex bg-[#659287] h-[100vh] flex-row justify-center items-center  gap-2 overflow-hidden sticky top-0"
      >
        <motion.div
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#493628] "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Bhavya
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#F4CE14] lavishly-yours-regular"
        >
          bansal
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="pl-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#493628]"
        >
          is
        </motion.div>
        <motion.div
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#493628]"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          a
        </motion.div>
      </motion.div>
      {/* 2nd Page */}
      
    </>
    
  );
}

export default First;
