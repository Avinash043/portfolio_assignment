import React from "react";
import { motion } from "motion/react";
import { useRef, useInView } from "react";

function Second() {
  // const ref = useRef(null)
  // const isInView = useInView(ref)
  return (
    <>
      <motion.div className="relative flex bg-[#345555] h-[100vh] flex-col justify-center items-center gap-2 overflow-hidden">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.7 }}
            className="text-left text-[#B6A28E] text-8xl font-extrabold  "
          >
            Chief
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-left text-[#B6A28E] text-8xl font-extrabold  "
          >
            Technology
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-left text-[#B6A28E] text-8xl font-extrabold  "
          >
            Officer
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-left text-5xl font-extrabold  "
          >
            @Persist Ventures
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Second;
