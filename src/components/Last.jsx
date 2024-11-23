import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

function Last() {
  return (
    <motion.div className="flex bg-[#659234] flex-row justify-start pl-32 items-center gap-2 h-[100vh]">
      <motion.div className="flex flex-col justify-center  w-1/3">
        <div className=" text-5xl font-extrabold pb-10 joti-one-regular">Hello@BhavyaBansal</div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="mt-4 text-xs font-bold"
          >
            I am committed to driving innovation, fostering collaboration, and
            delivering transformative technology solutions that propel our
            organization toward a smarter, more connected future.
          </motion.p>
          <motion.h6
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="mt-5  font-semibold"
          >
            You can find me on <strong className="">LinkedIn</strong> or{" "}
            <strong className="">Instagram</strong>
          </motion.h6>
          
      </motion.div>
      <div>
            <motion.img
             initial={{ scale: 1 }}
             whileHover={{ scale: 1.05 }}
            src="/st.png" alt="" className="pl-40 h-[500px] w-[700px]" />
          </div>
    </motion.div>
  );
}

export default Last;
