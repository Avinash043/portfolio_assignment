import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

function Last() {
  return (
    <motion.div className="flex flex-col lg:flex-row bg-[#659234] justify-center lg:justify-start items-center gap-6 lg:gap-10 px-6 lg:pl-32 h-[100vh]">
  {/* Left Content */}
  <motion.div className="flex flex-col items-center lg:items-start flex-wrap justify-center text-center lg:text-left ">
    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold pb-6 lg:pb-10 joti-one-regular">
      Hello@BhavyaBansal
    </div>

    <motion.p
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      className="mt-4 text-sm sm:text-base md:text-lg font-bold max-w-xs sm:max-w-sm lg:max-w-md"
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
      className="mt-5 text-sm sm:text-base font-semibold"
    >
      You can find me on <strong>LinkedIn</strong> or{" "}
      <strong>Instagram</strong>
    </motion.h6>
  </motion.div>

  {/* Right Image */}
  <div className="flex justify-center">
    <motion.img
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      src="/st.png"
      alt=""
      className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-auto"
    />
  </div>
</motion.div>

  );
}

export default Last;
