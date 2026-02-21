import React from "react";
import AboutImage from "../assets/heroImage.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPalette, FaCode, FaStar, FaAward } from "react-icons/fa";

const features = [
  {
    icon: <FaPalette />,
    title: "Creative Design",
    description: "Visually engaging interfaces that captivate users.",
  },
  {
    icon: <FaCode />,
    title: "Clean Code",
    description:
      "Maintainable, efficient, and high-quality frontend solutions.",
  },
  {
    icon: <FaStar />,
    title: "User Focus",
    description: "Intuitive designs centered around user satisfaction.",
  },
  {
    icon: <FaAward />,
    title: "Quality",
    description: "Polished, reliable, and consistent digital experiences.",
  },
];

const About = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.2,
  });

  return (
    <section
      id="about-me"
      className="bg-white  text-black min-h-[75dvh] flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 py-2 sm:py-16 "
    >
      <motion.h2
        ref={headingRef}
        initial={{ y: -20, opacity: 0 }}
        animate={headingInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className=" sm:text-3xl font-bold text-center mb-8  text-[28px] text-black"
      >
        About me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 mb-10">
        <motion.p
          className="text-xs sm:text-sm md:text-base max-w-[850px] text-center leading-loose "
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          I am a third-year Software Engineering undergraduate with a strong
          interest in full-stack development, UI/UX design, and frontend
          engineering. I enjoy crafting engaging user interfaces and seamless
          user experiences—from wireframes and prototypes to fully functional
          web applications. By balancing design thinking with solid backend and
          frontend skills, I focus on building scalable, responsive, and
          user-centric digital products.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group flex flex-col items-center text-center transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Icon */}
            <div className="text-orange-600  text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-sm sm:text-base font-semibold bg-black text-transparent bg-clip-text">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-xs sm:text-sm mt-1 max-w-[160px]">
              {feature.description}
            </p>

            {/* Underline animation */}
            <span className="mt-2 h-[2px] w-6 bg-orange-600  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
