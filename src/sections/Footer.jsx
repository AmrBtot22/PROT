/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Heart,
  ArrowUp,
  Code2,
  Sparkles,
  Facebook,
  Zap,
} from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub", color: "#7c3aed", hoverAnimation: { rotate: 360 } },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/amr-wafy-0062a5260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    label: "LinkedIn",
    color: "#0077b5",
    hoverAnimation: { y: [-2, -8, -2] },
  },
  {
    icon: Twitter,
    href: "https://x.com/amr_fox51394",
    label: "Twitter",
    color: "#1da1f2",
    hoverAnimation: { rotate: [0, -15, 15, -15, 0] },
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/amr_fox22?igsh=b3d0Z3drcjc5NDhz",
    label: "Instagram",
    color: "#e4405f",
    hoverAnimation: { scale: [1, 1.2, 1] },
  },
  {
  icon: Facebook,
  href: "https://www.facebook.com/share/1CA8iTHBQu/",
  label: "Facebook",
  color: "#1877f2",
  hoverAnimation: {
    scale: [1, 1.15, 1],
    rotate: [0, -10, 10, 0],
  },
},
];

const footerLinks = [
  { label: "Home", link: "#hero" },
  { label: "About", link: "#About" },
  { label: "Projects", link: "#work" },
  { label:"Tech" , link: "#tech" },
  { label: "Skills", link: "#skills" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (link) => {
    document.querySelector(link)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="relative pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-8 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-linear-to-t from-muted/30 to-transparent" />

      <motion.div
        className="absolute top-0 left-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-0 right-1/4 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #ec4899 0%, transparent 70%)" }}
        animate={{ scale: [1.2, 1, 1.2], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 pb-8 sm:pb-10 lg:pb-12 border-b border-border/50">
          <motion.div
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => handleNavigate("#home")}
              className="inline-block group text-left"
            >
              <motion.span
                className="text-2xl sm:text-3xl font-bold text-gradient flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </motion.span>
                {"<Dev />"}
              </motion.span>
            </button>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Frontend Developer crafting beautiful digital experiences with modern technologies.
            </p>

            <div className="flex gap-2 sm:gap-3 pt-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-2.5 rounded-full glass hover:bg-primary/20 transition-colors group relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3, boxShadow: `0 0 25px ${social.color}40` }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: `radial-gradient(circle, ${social.color}30 0%, transparent 70%)` }}
                    />
                    <motion.span
                      className="relative z-10 block"
                      whileHover={social.hoverAnimation}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </motion.span>
              Quick Links
            </h4>

            <ul className="space-y-2 sm:space-y-3 grid grid-cols-2 sm:grid-cols-1">
              {footerLinks.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => handleNavigate(item.link)}
                    className="text-muted-foreground hover:text-foreground transition-colors group inline-flex items-center gap-2 text-sm sm:text-base"
                  >
                    <motion.span className="w-0 h-0.5 bg-linear-to-r from-primary to-accent group-hover:w-3 transition-all duration-300" />
                    <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      {item.label}
                    </motion.span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </motion.span>
              Stay Connected
            </h4>

            <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
              Let&apos;s work together on your next project
            </p>

            <motion.button
              onClick={() => handleNavigate("#contact")}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-linear-to-r from-primary to-accent text-white font-medium relative overflow-hidden group text-sm sm:text-base"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(124,58,237,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Get In Touch</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 gap-4">
          <motion.p
            className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Made with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-red-500" />
            </motion.span>
            by Amr Wafy
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass hover:bg-primary/20 transition-colors group text-xs sm:text-sm"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.span animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.span>
            <span>Back to Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
