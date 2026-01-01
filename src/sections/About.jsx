/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useTransform, useSpring } from "framer-motion";
import { 
  Code2, Cpu, ArrowUpRight, Github, Twitter, Linkedin, 
  Terminal, Sparkles, Brackets, ScanFace 
} from "lucide-react";
import { useInView } from "framer-motion";

const About = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="About" className="min-h-screen bg-black text-white relative overflow-hidden font-sans selection:bg-cyan-500/30">
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-cyan-500 font-mono text-sm tracking-[0.3em] uppercase"
          >
            <span className="h-px w-12 bg-cyan-500/50"></span>
            <HyperText text="System.Identity_V2.0" />
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic overflow-hidden">
            <span className="block text-white">DIGITAL</span>
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-white to-purple-500">
              <ScrambleText text="ARCHITECT" />
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 h-auto perspective-1000">
          <TiltCard className="md:col-span-2 lg:col-span-2 row-span-2 p-0 group overflow-hidden border-none shadow-2xl shadow-cyan-500/10">
            <div className="absolute inset-0 z-30 bg-linear-to-b from-transparent via-cyan-500/10 to-transparent h-2.5 w-full animate-scanline pointer-events-none" />
            <div className="absolute inset-0 rounded-4xl border-2 border-transparent [mask-clip:padding-box,border-box] mask-intersect mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,transparent_0_340deg,cyan_360deg)] before:animate-[spin_4s_linear_infinite]" />
            
            <img 
              src="/images/480033922_1153539239620235_2106047658022399689_n.jpg"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" 
              alt="Me"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
            
            <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                <ScanFace className="text-cyan-400 animate-pulse" />
            </div>

            <div className="absolute bottom-8 left-8 z-30">
              <h2 className="text-3xl font-bold italic tracking-tighter">THE VISIONARY</h2>
              <div className="flex items-center gap-2 mt-2">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                 <p className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Online</p>
              </div>
            </div>
          </TiltCard>

          <TiltCard className="md:col-span-2 lg:col-span-3 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-cyan-400 border border-white/10 group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Terminal size={24} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Crafting Scalable Experiences</h3>
              <p className="text-slate-400 leading-relaxed text-sm lg:text-base">
                I transform lines of code into visual art. I pay attention to performance, aesthetics, and detail.
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <TechBadge icon={<Brackets size={14}/>} text="Clean Code" />
              <TechBadge icon={<Sparkles size={14}/>} text="UI Magic" />
            </div>
          </TiltCard>

          <MagneticCard 
            className="md:col-span-1 lg:col-span-1 bg-cyan-500 group cursor-pointer border-none shadow-[0_0_30px_-5px_rgba(6,182,212,0.6)]"
            onClick={scrollToContact}
          >
             <motion.div 
               whileHover={{ rotate: 45 }}
               whileTap={{ scale: 0.95 }}
               transition={{ type: "spring" }}
               className="text-black mb-2"
             >
               <ArrowUpRight size={52} />
             </motion.div>
             <p className="text-black font-black uppercase text-sm tracking-tighter">Let's Talk</p>
          </MagneticCard>

          <TiltCard className="md:col-span-2 lg:col-span-1 flex flex-col justify-between items-center py-8">
             <SocialIcon icon={<Github />} href="#" color="hover:text-white" />
             <SocialIcon icon={<Linkedin />} href="https://www.linkedin.com/in/amr-wafy-0062a5260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" color="hover:text-blue-500" />
             <SocialIcon icon={<Twitter />} href="https://x.com/amr_fox51394" color="hover:text-cyan-400" />
          </TiltCard>

          <TiltCard className="md:col-span-2 lg:col-span-3 overflow-hidden">
             <div className="flex items-center gap-4 mb-6">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-purple-400 animate-pulse">
                  <Cpu size={20} />
                </div>
                <span className="font-mono text-sm uppercase tracking-widest text-slate-500">System Core</span>
             </div>
             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <SkillItem name="React.js" percent="90%" />
                <SkillItem name="JS Script" percent="80%" />
                <SkillItem name="Tailwind" percent="90%" />
                <SkillItem name="Type Script" percent="80%" />
             </div>
          </TiltCard>

        </div>
      </div>
    </div>
  );
};

// TiltCard & MagneticCard تم تحسينها بتقليل الـ re-renders عن طريق requestAnimationFrame

const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const bounds = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  function handleMouseEnter() {
    bounds.current = ref.current.getBoundingClientRect();
  }

  function handleMouseMove({ clientX, clientY }) {
    if (!bounds.current) return;
    const { left, top, width, height } = bounds.current;
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;

    requestAnimationFrame(() => {
      x.set(xPct);
      y.set(yPct);
    });
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(y, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-7, 7]);

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-4xl border border-white/10 bg-[#050505] p-8 group overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-4xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      <div style={{ transform: "translateZ(20px)" }} className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};

const MagneticCard = ({ children, className, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove({ clientX, clientY }) {
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    requestAnimationFrame(() => {
      x.set(clientX - center.x);
      y.set(clientY - center.y);
    });
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: mouseX, y: mouseY }}
      className={`flex flex-col items-center justify-center rounded-4xl relative z-20 cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
};

const ScrambleText = ({ text }) => {
  const [display, setDisplay] = useState(text);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

  useEffect(() => {
    if (!inView) return;
    let iteration = 0;
    let animationFrame;
    const scramble = () => {
      setDisplay(
        text.split("").map((_, index) => 
          index < iteration ? text[index] : chars[Math.floor(Math.random() * chars.length)]
        ).join("")
      );
      iteration += 1 / 3;
      if (iteration < text.length) {
        animationFrame = requestAnimationFrame(scramble);
      }
    };
    animationFrame = requestAnimationFrame(scramble);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, text]);

  return <span ref={ref}>{display}</span>;
};

const HyperText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let i = 0;
    let animationFrame;
    const typeWriter = () => {
      setDisplayText((prev) => prev + text.charAt(i));
      i++;
      if (i < text.length) {
        animationFrame = requestAnimationFrame(typeWriter);
      }
    };
    animationFrame = requestAnimationFrame(typeWriter);
    return () => cancelAnimationFrame(animationFrame);
  }, [text]);
  return <span>{displayText}</span>;
};

const TechBadge = ({ icon, text }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-tighter text-slate-400 hover:text-white hover:border-cyan-500/50 transition-colors">
    {icon} {text}
  </div>
);

const SkillItem = ({ name, percent }) => (
  <div className="space-y-2 group/skill">
    <div className="flex justify-between text-[10px] font-mono text-slate-500">
      <span>{name}</span>
      <span className="text-cyan-500 opacity-0 group-hover/skill:opacity-100 transition-opacity">{percent}</span>
    </div>
    <div className="h-0.5 w-full bg-white/5 overflow-hidden">
      <motion.div 
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"
      />
    </div>
  </div>
);

const SocialIcon = ({ icon, href, color }) => (
  <a 
    href={href} 
    className={`p-3 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] ${color}`}
  >
    {React.cloneElement(icon, { size: 24 })}
  </a>
);

export default About;
