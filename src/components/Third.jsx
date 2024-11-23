import React from "react";
import { useRef, useInView } from "react";
import { motion, useScroll } from "framer-motion";

function Third() {
  // const ref = useRef(null)
  // const isInView = useInView(ref)
  const exp = "EXPERIENCE";
  return (
    <motion.div
    initial={{ y: 25, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.75,
    }}
    className="flex bg-[#697565] flex-row justify-center items-center gap-2 h-screen">
      <div className="h-[60%] w-1/3 flex flex-row  ">
        <motion.div className="w-1/6 flex flex-col items-start">
          {exp.split("").map((e, i) => (
            <span
              key={i}
              className="text-[2.60rem] font-extrabold leading-[0.8] text-white outline-4"
            >
              {e}
            </span>
          ))}
        </motion.div>
        <div className="text flex flex-col gap-5 w-2/3 snap-y overflow-auto no-scrollbar text-sm">
          <div className="flex flex-col ">
            <h2 className="font-bold  slabo-27px-regular text-[#000]">
              Chief Technology Officer
            </h2>
            <h3 className="text-xs font-bold text-[#000]">Persist Ventures - Oct 2023 to Present</h3>
            <p className="font-[600] text-[0.75rem] text-[#000] pt-2">
              As CTO at Persist Ventures, I lead technological innovation,
              oversee product development, and align tech strategies with
              business goals. I drive scalable solutions, mentor teams, and
              ensure seamless tech execution.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold  slabo-27px-regular">AI Software Developer - Internship</h2>
            <h3 className="text-xs font-bold">HeyDaw Technologies - Aug 2023 to Oct 2023</h3>
            <p className="font-[600] text-[0.75rem]  pt-2">
              As an AI Software Developer intern, I contributed to developing
              intelligent systems, enhancing NLP pipelines, and optimizing
              machine learning models. Collaborated with cross-functional teams
              to deliver scalable, data-driven solutions for real-world
              challenges.
            </p>
          </div>
          <div className="flex flex-col ">
            <h2 className="font-bold slabo-27px-regular">Software Engineer - Internship</h2>
            <h3 className="text-xs font-bold">Televerge Communications - May 2022 to Apr 2023</h3>
            <p className="font-[600] text-[0.75rem] pt-2">
              As a Software Engineer intern, I developed and optimized software
              solutions, contributed to system design, debugged applications,
              and collaborated with teams to deliver high-quality, scalable, and
              efficient software products.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Third;
