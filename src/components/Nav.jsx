/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Code,
  Sparkles,
  Zap,
  Hexagon,
  Rocket,
  MessageCircle,
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { id: "home", name: "Home", icon: Home, link: "#hero" },
  { id: "about", name: "About", icon: User, link: "#About" },
  { id: "projects", name: "Projects", icon: Briefcase, link: "#work" },
  { id: "tech", name: "Tech", icon: Rocket, link: "#tech" },
  { id: "skills", name: "Skills", icon: Code, link: "#skills" },
];

const NeonLogo = () => (
  <motion.div
    className="flex items-center gap-2 cursor-pointer"
    whileHover={{ scale: 1.05 }}
    onClick={() =>
      document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" })
    }
  >
    <div className="relative">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-3 rounded-full bg-linear-to-tr from-cyan-500 via-purple-500 to-pink-500 blur-lg opacity-60"
      />
      <div className="relative bg-black/80 p-2 rounded-full border border-white/20 backdrop-blur-md">
        <Zap className="text-cyan-400" size={22} />
      </div>
    </div>

    <span className="hidden md:block font-black tracking-widest text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
      {`<DEV/>`}
    </span>
  </motion.div>
);

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [isHovering, setIsHovering] = useState(false);
  const scrollStopTimeout = useRef(null);
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    lastScrollY.current = latest;

    setScrolled(latest > 50);

    const scrollPosition = window.scrollY + window.innerHeight / 2;
    for (const item of navItems) {
      const section = document.querySelector(item.link);
      if (!section) continue;
      const { offsetTop, offsetHeight } = section;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        setActiveTab(item.name);
        break;
      }
    }

    if (latest <= 80) {
      setHidden(false);
      return;
    }

    if (!isHovering) setHidden(true);

    if (scrollStopTimeout.current) clearTimeout(scrollStopTimeout.current);
    scrollStopTimeout.current = setTimeout(() => {
      if (!isHovering) setHidden(false);
      scrollStopTimeout.current = setTimeout(() => {
        if (!isHovering) setHidden(true);
      }, 3000);
    }, 0);
  });

  const handleNavigate = (item) => {
    setActiveTab(item.name);
    document.querySelector(item.link)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.nav
      initial={{ y: -120, opacity: 0 }}
      animate={
        hidden && !isHovering && scrollY.get() > 80
          ? { y: -120, opacity: 0 }
          : { y: 0, opacity: 1 }
      }
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 z-100 flex justify-center py-5"
      onMouseEnter={() => {
        setIsHovering(true);
        setHidden(false);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        if (scrollY.get() > 80) setHidden(true);
      }}
    >
      <div
        className={cn(
          "flex items-center justify-between w-[92%] max-w-6xl px-4 py-2 rounded-full border transition-all duration-500",
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-white/10 shadow-[0_0_40px_-10px_rgba(139,92,246,0.4)]"
            : "bg-transparent border-transparent"
        )}
      >
        <NeonLogo />

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center gap-1 bg-black/30 p-1.5 rounded-full border border-white/5">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavigate(item)}
                initial="initial"
                whileHover="hover"
                className="relative px-5 py-2 rounded-full group"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-linear-to-r from-cyan-600 to-purple-600 rounded-full"
                  />
                )}

                <span className="relative z-10 flex items-center gap-2 text-sm font-semibold">
                  <motion.span
                    variants={{
                      hover: {
                        y: -2,
                        rotate: [0, -8, 8, 0],
                        transition: { duration: 0.5 },
                      },
                      initial: { rotate: 0, y: 0 },
                    }}
                  >
                    <item.icon
                      size={18}
                      className="text-gray-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.8)] transition-all"
                    />
                  </motion.span>

                  <span className="text-gray-400 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.8)] transition-all">
                    {item.name}
                  </span>
                </span>

                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1"
                    >
                      <Sparkles size={14} className="text-yellow-300" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className={cn(
            "hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm",
            scrolled
              ? "bg-white text-black"
              : "bg-black/50 text-white border border-cyan-500/40"
          )}
        >
          Let’s Talk{" "}
          <Hexagon
            size={14}
            className="group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.8)] transition-all"
          />
        </motion.button>

        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center gap-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavigate(item)}
                whileHover={{ scale: 1.1 }}
                className="relative p-3 rounded-full"
              >
                <item.icon
                  size={20}
                  className={cn(
                    "transition-all",
                    isActive
                      ? "text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]"
                      : "text-gray-400"
                  )}
                />

                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1"
                    >
                      <Sparkles size={14} className="text-yellow-300" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className={cn(
              "px-4 py-2 rounded-full text-sm font-bold",
              scrolled
                ? "bg-white text-black"
                : "bg-black/50 text-white border border-cyan-500/40"
            )}
          >
            Talk
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
