import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function Philosophies() {
  const { ref } = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale4 = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  return (
    <div
      ref={ref}
      className=" w-[100%] pt-20 bg-[#345555] min-h-[100vh] gap-2 flex flex-col  items-center"
    >
      <motion.span
        initial={{ scale: 1 }}
        whileHover={{ scale: 0.95 }}
        className="sticky relative text-6xl text-[#7FA1C3] font-extrabold text-center "
      >
        My Philosophies
      </motion.span>
      <motion.div
        style={{ scale: scale4 }}
        className="flex flex-row p-10 gap-10"
      >
        <div className="w-1/2">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="mb-6"
          >
            <strong className="text-[#b7b8b2]">
              Innovation is a Constant Pursuit
            </strong>
            <p className="text-[0.8rem] font-bold">
              I believe in staying ahead of the curve, continuously exploring
              cutting-edge technologies like AI, NLP, and scalable systems to
              deliver transformative solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="mb-6"
          >
            <strong className="text-[#b7b8b2]">
              Lead by Empowering Others
            </strong>
            <p className="text-[0.8rem] font-bold">
              As a CTO, my role extends beyond technical expertise. I strive to
              inspire teams, nurture talent, and foster an environment where
              creativity and collaboration thrive.
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="mb-6"
          >
            <strong className="text-[#b7b8b2]">
              Technology Aligned with Purpose
            </strong>
            <p className="text-[0.8rem] font-bold">
              Technology should drive meaningful impact. Whether leading at
              Persist Ventures or revolutionizing AI solutions at FacesearchAI,
              I aim to align tech advancements with real-world needs, ensuring
              sustainable growth.
            </p>
          </motion.div>
        </div>
        <div className="w-1/2">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="mb-6"
          >
            <strong className="text-[#b7b8b2]">
              Learning is a Lifelong Journey
            </strong>
            <p className="text-[0.8rem] font-bold">
              Each experience, from internships at Telaverge and HeyDaw
              Technologies to full-time leadership roles, has honed my
              expertise.
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="mb-6"
          >
            <strong className="text-[#b7b8b2]">
              Impact Through Collaboration
            </strong>
            <p className="text-[0.8rem] font-bold">
              Success is a collective effort. I prioritize building strong,
              communicative teams and forging partnerships to amplify results.
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="mb-6"
          >
            <strong className="text-[#b7b8b2]">Adaptability is Key</strong>
            <p className="text-[0.8rem] font-bold">
              From hybrid roles to remote collaborations, I value adaptability.
              Embracing diverse working models enhances productivity and opens
              doors to global opportunities.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Philosophies;
