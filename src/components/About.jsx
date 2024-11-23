import React from "react";
import { motion } from "motion/react";

function About() {
  return (
    <div className="bg-[#745637] h-screen flex flex-col justify-center items-center">
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-30%" },
        }}
        initial="initial"
        whileHover="hovered"
        className="font-extrabold text-[2.9rem] w-1/3 "
      >
        What's drive me ?
      </motion.div>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.03 }}
        className=" font-bold text-[#332211] overflow-hidden poppins-extrabold h-1/3  w-1/3"
      >
        I lead innovation by aligning cutting-edge technology with business
        goals. With expertise in AI, cloud computing, and scalable
        architectures, I drive transformative solutions, foster team excellence,
        and ensure seamless delivery. My passion lies in leveraging technology
        to solve complex challenges and create sustainable growth opportunities.
      </motion.div>
    </div>
  );
}

export default About;
