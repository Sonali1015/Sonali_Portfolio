import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const menuItems = ["Home", "About Me", "Projects", "Skills"];
  const contactItem = "Contact";

  const generateHref = (item) => `#${item.toLowerCase().replace(/\s+/g, "-")}`;

  const handleNavClick = (item) => {
    setIsOpen(false);

    if (item === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (item === "Contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      const target = document.querySelector(generateHref(item));
      if (target) {
        const navbar = document.querySelector("nav");
        const navbarHeight = navbar ? navbar.offsetHeight : 70;
        const extraOffset = 10;
        const topPos = target.offsetTop - navbarHeight + extraOffset;
        window.scrollTo({ top: topPos, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.offsetHeight : 70;
      const extraOffset = 10;

      [...menuItems, contactItem].forEach((item) => {
        const id = item.toLowerCase().replace(/\s+/g, "-");
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= navbarHeight + extraOffset &&
            rect.bottom >= navbarHeight + extraOffset
          ) {
            setActiveSection(item);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-black sticky top-0 z-50 backdrop-blur-sm px-4 md:px-16 lg:px-24">
      {/* NAVBAR CONTAINER */}
      <div className="flex justify-between items-center py-4">
        {/* LEFT: Brand */}
        <div className="text-xl text-orange-600 font-medium whitespace-nowrap flex-shrink-0 ml-3 md:ml-22">
          SM
        </div>

        {/* RIGHT: Menu + Contact + Mobile Icon */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* DESKTOP MENU LINKS */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, idx) => {
              const isActive = activeSection === item;
              return (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item)}
                  className="relative group cursor-pointer text-m text-white font-light"
                >
                  <span>{item}</span>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-orange-600 transition-all ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* DESKTOP CONTACT BUTTON */}
          <motion.button
            onClick={() => handleNavClick(contactItem)}
            className="hidden md:inline-flex px-5 py-2 rounded-full bg-orange-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {contactItem}
          </motion.button>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="text-white"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 1.1 : 1 }}
              >
                {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden flex flex-col items-center space-y-4 pb-6 mt-2 bg-black/90 backdrop-blur-md  "
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {[...menuItems, contactItem].map((item, idx) => (
              <motion.button
                key={idx}
                onClick={() => handleNavClick(item)}
                className={`text-lg ${
                  activeSection === item
                    ? "text-orange-600 font-bold"
                    : "text-white font-light"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
