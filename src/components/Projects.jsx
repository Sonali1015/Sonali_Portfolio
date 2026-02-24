import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { SiFigma } from "react-icons/si";

import QRImage from "../assets/qr.PNG";
import LMSImage from "../assets/lib.PNG";
import foodly from "../assets/Food_ordering_app.png";
import techfeed from "../assets/techfeed.PNG";
import todo from "../assets/todo.PNG";
import eatzy from "../assets/eatzy.PNG";
import resturant from "../assets/resturant.png";
import Travenzo from "../assets/Travenzo.png";
import Hci from "../assets/hci.png";
import clothing from "../assets/clothing.png";
const projects = [
  {
    id: 1,
    name: "Foodly – Food Ordering Mobile App",
    tech: "Figma",
    image: foodly,
    link: "https://www.figma.com/design/dPoVTDq8WZ8ND1yj0kpGCi/food-order-app?node-id=57796-18082&t=E3zCQID0086ckC2M-1",
  },
  {
    id: 2,
    name: "Travenzo -Travel managment system",
    tech: "Figma",
    image: Travenzo,
    link: "https://www.figma.com/design/uyopfeZqVmjcF9Nb39jBNh/travel-managment?node-id=0-1&t=lI51qvf4T0yhjdzn-1",
  },
  {
    id: 3,
    name: "Online Student Services Portal",
    tech: "Figma",
    image: Hci,
    link: "https://www.figma.com/design/aoVRH6YWBCC5AnngQ3sD12/HCI-assignment?node-id=0-1&t=AGKXqVx2LLouKAaX-1",
  },
  {
    id: 4,
    name: "Resturant Website Design",
    tech: "Figma",
    image: resturant,
    link: "https://www.figma.com/design/H5QudOtPusLsatzRYAeHlH/hotel-view?node-id=8-4&t=haggxS05tnIyhP4t-1",
  },
  {
    id: 5,
    name: "Clothing Store Website",
    tech: "HTML / CSS / JS ",
    image: clothing,
    link: "https://github.com/Sonali1015/Simple-Homepage-Website-.git",
  },
  // {
  //   id: 6,
  //   name: "QR Based Attendance Marking System",
  //   tech: "HTML / CSS / JS / PHP / MySQL",
  //   image: QRImage,
  //   link: "https://github.com/Chamaracperera/Attendance-Marking-System.git",
  // },
  // {
  //   id: 7,
  //   name: "Tech Feed – Faculty News App",
  //   tech: "Figma / Android Studio",
  //   image: techfeed,
  //   figma: "https://www.figma.com/design/JDLHVG93mfrZSKtALFYF8q/Tech-Feed",
  //   github: "https://github.com/Imansa2002/Newsapp.git",
  // },
  // {
  //   id: 8,
  //   name: "To-Do App",
  //   tech: "React.JS / CSS",
  //   image: todo,
  //   link: "https://github.com/Imansa2002/todo-app.git",
  // },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const cardRef = useRef(null);
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.2,
  });

  const totalCards = projects.length;

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Update card width dynamically
  useEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        const width = cardRef.current.offsetWidth;
        const gap = 24;
        setCardWidth(width + gap);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const maxIndex = Math.max(totalCards - cardsPerView, 0);

  return (
    <section
      id="projects"
      className="bg-black text-white  h-[90dvh] flex flex-col justify-center py-6 relative"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Heading */}
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 80 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-4 text-orange-600 "
        >
          My Projects
        </motion.h2>

        <p className="text-center text-gray-200 mb-10 text-xs md:text-sm ">
          Practical projects showcasing development & design experience.
        </p>

        {/* Carousel Section */}
        <div className="scale-[0.9] lg:scale-100 origin-top">
          <div className="overflow-hidden pr-10 sm:pr-16 lg:pr-24">
            <motion.div
              className="flex gap-6"
              animate={{ x: -currentIndex * cardWidth }}
              transition={{ type: "spring", stiffness: 80, damping: 22 }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  ref={index === 0 ? cardRef : null}
                  className="bg-black border border-orange-600  hover:border-orange-400/60 
                             rounded-xl p-4 w-64 sm:w-72 md:w-80 flex-shrink-0 backdrop-blur-md 
                             cursor-default hover:shadow-[0_0_18px_rgba(34,197,94,0.5)] transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {/* Image → Figma link if available */}
                  <a
                    href={project.figma || project.link}
                    target="_blank"
                    className="block mb-3"
                  >
                    <motion.img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-40 object-contain rounded-lg  p-2"
                      whileHover={{ scale: 1.07 }}
                    />
                  </a>

                  <h3 className="text-sm font-semibold text-transparent bg-clip-text bg-white">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-xs mb-2">{project.tech}</p>

                  <div className="flex gap-4">
                    {/* Figma Icon */}
                    {project.figma && (
                      <a
                        href={project.figma}
                        target="_blank"
                        className="inline-flex items-center text-orange-600 hover:text-orange-800 text-lg transition-all duration-300"
                      >
                        <SiFigma />
                        <FiArrowUpRight className="ml-1 text-xl" />
                      </a>
                    )}

                    {/* GitHub Icon */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="inline-flex items-center text-orange-600 hover:text-orange-800 text-lg transition-all duration-300"
                      >
                        <FaGithub />
                        <FiArrowUpRight className="ml-1 text-xl" />
                      </a>
                    )}

                    {/* Fallback for single-link projects */}
                    {!project.figma && !project.github && (
                      <a
                        href={project.link}
                        target="_blank"
                        className="inline-flex items-center text-orange-600 hover:text-orange-800 text-lg transition-all duration-300"
                      >
                        {project.tech.includes("Figma") ? (
                          <SiFigma />
                        ) : (
                          <FaGithub />
                        )}
                        <FiArrowUpRight className="ml-1 text-xl" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          className={`absolute left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center 
            rounded-full bg-orange-600 border border-orange-800 shadow-[0_0_12px_rgba(0,255,170,0.5)]
            hover:shadow-[0_0_18px_rgba(0,255,170,0.8)] transition-all duration-300
            ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:scale-110 hover:border-orange-400"}`}
        >
          <FaChevronLeft className="text-white text-lg drop-shadow-[0_0_6px_rgba(0,255,170,0.8)]" />
        </button>

        <button
          onClick={() =>
            setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
          }
          className={`absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center 
            rounded-full bg-orange-600 border border-orange-800 shadow-[0_0_12px_rgba(0,255,170,0.5)]
            hover:shadow-[0_0_18px_rgba(0,255,170,0.8)] transition-all duration-300
            ${currentIndex >= maxIndex ? "opacity-30 cursor-not-allowed" : "hover:scale-110 hover:border-orange-400"}`}
        >
          <FaChevronRight className="text-white text-lg drop-shadow-[0_0_6px_rgba(0,255,170,0.8)]" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
