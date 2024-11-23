import React from "react";
import { motion } from "motion/react";
import Marquee from "./Marquee";




function Fourth() {
    const upperTopics = [
        "Prompt Engineering",
        "ChatGPT",
        "Natural Language Processing (NLP)",
        "Artificial Intelligence (AI)",
        "Software Development",
        "Project Management",
        "Sphinx",
        "Swagger API",
        "Kubernetes",
        "Docker",
        "REST APIs",
        "Proof of Concept",
        
      ];

      const lowerTopics = [
        "Jenkins",
        "Azure DevOps",
        "MongoDB",
        "Linux",
        "Data Structures",
        "Python (Programming Language)",
        "C (Programming Language)",
        "C++",
        "Object-Oriented Programming (OOP)",
        "Data Analysis",
        "Data Visualization",
        "Data Science",
        "Machine Learning",
        "SQL"
      ]
      
      const containerVariants = {
        animate: {
          x: [0, -1000], // Adjust `-1000` based on content width
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10, // Adjust speed
              ease: "linear",
            },
          },
        },
      };
      const containerVariants1 = {
        animate: {
          x: [-1000, 0], // Adjust `-1000` based on content width
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10, // Adjust speed
              ease: "linear",
            },
          },
        },
      };
  return (
    <div className="h-[100vh] flex items-center justify-center bg-[#9ABF80]">
       
      <div className="overflow-hidden w-full ">
      <h1 className="text-6xl font-extrabold text-center text-[#1F4529]">SKILLS</h1>
        <motion.div
          className="flex space-x-5 whitespace-nowrap pt-10"
          variants={containerVariants}
          animate="animate"
        >
          {upperTopics.map((topic, index) => (
            <h1
              key={index}
              className="text-6xl font-extrabold text- whitespace-nowrap text-[#2f4518]"
            >
              {topic} |
            </h1>
          ))}

          {/* Duplicate topics for seamless scrolling */}
          {upperTopics.map((topic, index) => (
            <h1
              key={`duplicate-${index}`}
              className="text-6xl font-extrabold text- whitespace-nowrap text-[#2f4518]"
            >
              {topic} |
            </h1>
          ))}
        </motion.div>
        <motion.div
          className="flex space-x-5 whitespace-nowrap"
          variants={containerVariants1}
          animate="animate"
        >
          {lowerTopics.map((topic, index) => (
            <h1
              key={index}
              className="text-6xl font-extrabold text- whitespace-nowrap text-[#2f4518]"
            >
              {topic} |
            </h1>
          ))}

          {/* Duplicate topics for seamless scrolling */}
          {lowerTopics.map((topic, index) => (
            <h1
              key={`duplicate-${index}`}
              className="text-6xl font-extrabold text- whitespace-nowrap text-[#2f4518]"
            >
              {topic} |
            </h1>
          ))}
        </motion.div>
      </div>
    </div>
   
  );
}

export default Fourth;
