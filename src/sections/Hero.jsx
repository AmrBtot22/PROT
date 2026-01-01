/* eslint-disable no-unused-vars */
import { words } from "../constants/index";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import HeroEx from "@/components/HeroMoudels/HeroEx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useInView } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);

  const isInView = useInView(heroRef, {
    once: true,
    margin: "-100px",
  });

  useGSAP(
    () => {
      gsap.fromTo(
        ".hero-text h1",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power2.inOut",
        }
      );
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 z-0">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shapping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.id}   
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-b-full bg-white-50"
                          alt={word.text}
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Project</h1>
              <h1>the Delvier Result</h1>
            </div>

            <div className="flex flex-col gap-2">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2 text-2xl sm:text-4xl font-bold"
              >
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  👋
                </motion.span>
                <span>Hello, I'm</span>
                <span className="ml-2">Amr Ahmed</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl text-muted-foreground"
              >
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block text-xl"
                >
                  💻
                </motion.span>

                <motion.span
                  className="ml-2"
                  whileHover={{ scale: 1.03, color: "#7c3aed" }}
                  transition={{ duration: 0.3 }}
                >
                  Frontend Developer
                </motion.span>
              </motion.p>
            </div>

            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="watch my projects"
            />
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout">
            {isInView && <HeroEx />}
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
