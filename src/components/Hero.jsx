import React from "react";
import heroImage from "../assets/heroImage.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  const { ref: imageRef, inView: imageInView } = useInView({ threshold: 0.2 });
  const { ref: cvRef, inView: cvInView } = useInView({ threshold: 0.2 });

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 },
    },
    tap: {
      scale: 0.9,
      rotate: -3,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 scroll-mt-20 bg-black"
    >
      {/* soft background grid feel */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
        {/* LEFT CONTENT */}
        <div className="text-left">
          {/* small hello bubble */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-white bg-gray-800/50 backdrop-blur-sm mb-4">
            <span className="h-2 w-2 rounded-full bg-orange-600" />
            Hello!
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl font-semibold leading-[1.05] text-white">
            I’m Sonali Jayakodi ,<br></br> a{" "}
            <span className="text-orange-600">
              Full-Stack Developer & UI/UX Designer
            </span>
            <br />
          </h1>

          <p className="mt-4 max-w-xl text-gray-300 leading-relaxed">
            Passionate about creating simple, user-centered designs, I
            specialize in building responsive web applications that are both
            functional and visually appealing.
          </p>

          {/* Buttons row */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <motion.a
              ref={cvRef}
              href="/Sonali_cv.pdf"
              download="Sonali_cv.pdf"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={cvInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-white font-semibold shadow-md hover:shadow-orange-500/30 transition-all"
            >
              Download CV →
            </motion.a>
          </div>

          {/* Social icons */}
          <div className="mt-7 flex items-center gap-5 text-2xl">
            <motion.a
              href="https://www.linkedin.com/in/sonali-jayakodi-0118b4313"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="text-gray-300 hover:text-orange-600 transition-colors"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://github.com/Sonali1015"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="text-gray-300 hover:text-orange-600 transition-colors"
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>

        <div className="relative z-0 flex justify-center md:justify-end">
          {/* GRADIENT BLOB */}
          <div className="absolute -z-10 -right-16 top-10 w-[420px] h-[300px] bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 blur-2xl opacity-40 rounded-[40%_60%_60%_40%]" />

          {/* IMAGE */}
          <motion.img
            ref={imageRef}
            src={heroImage}
            alt="Profile"
            className="relative z-10 w-[380px] sm:w-[340px] md:w-[420px] h-auto object-contain drop-shadow-xl"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={imageInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
