import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    title: "UI/UX Design",
    description:
      "Crafting visually stunning, user-centered interfaces that feel intuitive and engaging.",
    skills: [
      "Figma",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
    ],
  },
  {
    title: "Web Development",
    description:
      "Building high-performance, responsive, and dynamic web experiences.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "API Integration",
    ],
  },
];

const Skills = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.2,
  });

  return (
    <section
      id="skills"
      className="bg-gray-50 text-white min-h-[80dvh] flex flex-col justify-center py-6"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Animated Heading */}
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 80 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-4 text-black"
        >
          My Skills
        </motion.h2>

        <p className="text-center text-gray-600 mb-6 text-xs md:text-sm">
          Core technical areas reflecting both creative and development
          expertise.
        </p>

        {/* Replace the flex container with a bento-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white border-gray-700/50 rounded-2xl p-8 backdrop-blur-md cursor-pointer transition-all duration-300 hover:border-orange-600 "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(255,140,0,0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Title with icon area */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-xl mb-3 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {skill.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.skills.map((item, idx) => (
                  <motion.span
                    key={idx}
                    initial={{
                      backgroundColor: "#000000",
                      borderColor: "rgba(55,65,81,0.5)",
                      color: "#ffffff",
                    }}
                    className="bg-black text-white px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-700/50"
                    whileHover={{
                      backgroundColor: "rgb(255,140,0)",
                      color: "#ffffff",
                      borderColor: "rgb(255,140,0)",
                      scale: 1.05,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
