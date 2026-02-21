import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Icon animation variant
  const iconVariants = {
    hover: {
      scale: 1.3,
      rotate: 10,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
        {/* Animated Social Media Icons */}
        <div className="flex justify-center space-x-6 my-4 text-2xl">
          <motion.a
            href="mailto:sonalijayakodi2002@gmail.com"
            variants={iconVariants}
            whileHover="hover"
            className="text-orange-600 hover:text-white transition-colors duration-300"
          >
            <FaEnvelope />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sonali-jayakodi-0118b4313"
            variants={iconVariants}
            whileHover="hover"
            className="text-orange-600 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://github.com/Sonali1015"
            variants={iconVariants}
            whileHover="hover"
            className="text-orange-600 hover:text-white transition-colors duration-300"
          >
            <FaGithub />
          </motion.a>
        </div>

        {/* Fixed Copyright Section */}
        <div className="border-t border-gray-700 pt-2 mt-2">
          <p className="text-gray-400 text-sm tracking-wide">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-orange-600 font-semibold">
              Sonali Jayakodi
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
