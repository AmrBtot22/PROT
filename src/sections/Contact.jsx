/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import EarthCanvas from "../components/Canvas/Earth";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

// أحدث نسخة من Particles
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // State للتحقق من حجم الشاشة (desktop أم لا)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1280);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  // Particles initialization
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // استخدم loadFull(engine) لو عايز كل الإمكانيات
  }, []);

  return (
    <div className="relative xl:mt-10 flex xl:flex-row flex-col-reverse gap-8 overflow-hidden">
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#000000" },
          fpsLimit: 60,
          interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
          particles: {
            color: { value: ["#0ff", "#f0f", "#ff0", "#0f0"] },
            links: { enable: true, color: "#ffffff", distance: 150 },
            move: { enable: true, speed: 1.5, direction: "none", outModes: "bounce" },
            number: { value: 50 },
            opacity: { value: 0.7 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="relative flex-[0.7] p-6 rounded-2xl backdrop-blur-md bg-black/40 border border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,0.2)] z-10"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-black/40 py-2.5 px-4 placeholder:text-secondary text-white rounded-lg outline-none border border-cyan-500/30 font-medium w-full shadow-[0_0_15px_rgba(0,255,255,0.1)]"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-black/40 py-2.5 px-4 placeholder:text-secondary text-white rounded-lg outline-none border border-cyan-500/30 font-medium w-full shadow-[0_0_15px_rgba(0,255,255,0.1)]"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-black/40 py-2.5 px-4 placeholder:text-secondary text-white rounded-lg outline-none border border-cyan-500/30 font-medium w-full shadow-[0_0_15px_rgba(0,255,255,0.1)]"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-cyan-500/30 py-2.5 px-6 rounded-xl outline-none w-fit text-white font-bold shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:bg-cyan-500/50 transition-all"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Earth Canvas - يظهر فقط على desktop */}
      {isDesktop && (
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-125 md:h-100 h-75 relative z-10"
        >
          <EarthCanvas />
        </motion.div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
