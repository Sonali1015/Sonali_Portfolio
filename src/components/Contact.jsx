import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import emailjs from "emailjs-com";
import Footer from "./Footer";

const Contact = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.2,
    triggerOnce: true, // Animation triggers only once
  });

  const formRef = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k8mqhkp",
        "template_kz3gbyb",
        formRef.current,
        "mGwfrKleoBdFN121L",
      )
      .then(
        () => {
          setSuccessMessage("Message sent successfully! ✅");
          e.target.reset();
        },
        () => {
          setSuccessMessage("Failed to send message. ❌");
        },
      );
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Main Contact Content */}
      <section className="px-6 sm:px-12 lg:px-24 py-16 sm:py-20 max-w-7xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: -20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Let's Connect
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
          {/* Left Info - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={headingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Get in Touch
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-2">
                Let’s collaborate to build engaging, responsive, and
                user-friendly digital experiences.
              </p>
            </div>

            <div className="space-y-5 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 border border-orange-100 hover:border-orange-200 transition-colors duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <FaEnvelope className="text-white text-base" />
                </div>
                <div>
                  <p className="text-orange-500 text-xs font-semibold mb-1 uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-gray-900 font-medium text-sm">
                    sonalijayakodi2002@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 border border-orange-100 hover:border-orange-200 transition-colors duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <FaPhone className="text-white text-base" />
                </div>
                <div>
                  <p className="text-orange-500 text-xs font-semibold mb-1 uppercase tracking-wide">
                    Phone
                  </p>
                  <p className="text-gray-900 font-medium text-sm">
                    +94 76 885 7959
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 border border-orange-100 hover:border-orange-200 transition-colors duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <HiOutlineLocationMarker className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-orange-500 text-xs font-semibold mb-1 uppercase tracking-wide">
                    Location
                  </p>
                  <p className="text-gray-900 font-medium text-sm">
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form - Takes 3 columns */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            animate={headingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 space-y-5 bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-orange-500 text-xs font-semibold mb-2 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-white border border-gray-300 text-gray-900 px-4 py-2.5 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 placeholder-gray-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-orange-500 text-xs font-semibold mb-2 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-white border border-gray-300 text-gray-900 px-4 py-2.5 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 placeholder-gray-400 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-orange-500 text-xs font-semibold mb-2 uppercase tracking-wide">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Project Inquiry"
                required
                className="w-full bg-white border border-gray-300 text-gray-900 px-4 py-2.5 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 placeholder-gray-400 text-sm"
              />
            </div>

            <div>
              <label className="block text-orange-500 text-xs font-semibold mb-2 uppercase tracking-wide">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
                className="w-full bg-white border border-gray-300 text-gray-900 px-4 py-2.5 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 placeholder-gray-400 resize-none text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
            >
              Send Message
            </button>

            {successMessage && (
              <p className="text-center text-orange-500 mt-3 text-sm font-medium bg-orange-50 py-2.5 px-4 rounded-lg border border-orange-200">
                {successMessage}
              </p>
            )}
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
