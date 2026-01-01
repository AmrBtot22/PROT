/* eslint-disable react-hooks/refs */
import React, { useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
    const secRef = useRef(null);
    const proRefs = [useRef(null), useRef(null), useRef(null)];

    useGSAP(() => {
        // Fade in section
        gsap.fromTo(
            secRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, ease: "power1.out" }
        );

        // Animate each project individually for performance
        proRefs.forEach(ref => {
            gsap.fromTo(
                ref.current,
                { y: 50, opacity: 0, willChange: "transform, opacity" },
                { 
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top bottom-=100",
                        toggleActions: "play none none none",
                        once: true,
                    }
                }
            );
        });
    }, []);

    return (
        <section ref={secRef} id='work' className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>

                    {/* First Project */}
                    <div className='first-project-wrapper' ref={proRefs[0]}>
                        <div className='image-wrapper'>
                            <img
                                src='/images/Screenshot 2025-12-20 162101.png'
                                alt='Portfolio Project'
                                className='w-full h-full object-contain'
                                loading="lazy"
                                style={{ willChange: "transform, opacity" }}
                            />
                        </div>
                        <div className='text-content'>
                            <h2>Portfolio Project</h2>
                            <p className="text-white-50 md:text-xl">
                                "Showcasing my personal portfolio with interactive UI, smooth animations, and modern design. Built with React, TailwindCSS, and Framer Motion for a responsive, user-friendly experience."
                            </p>
                        </div>
                    </div>

                    {/* Other Projects */}
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={proRefs[1]}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img
                                    src="/images/Screenshot 2025-12-20 161627.png"
                                    alt="Weather App"
                                    className='w-full h-full object-contain'
                                    loading="lazy"
                                    style={{ willChange: "transform, opacity" }}
                                />
                            </div>
                            <h2>"Weather App"</h2>
                            <p className="text-white-50 mt-1">
                                "A sleek weather application providing real-time forecasts, dynamic backgrounds, and responsive charts. Built with React, TailwindCSS, and OpenWeather API for a smooth and interactive experience."
                            </p>
                        </div>

                        <div className="project" ref={proRefs[2]}>
                            <div className="image-wrapper bg-[#FFE7EB]">
                                <img
                                    src='/images/project3.png'
                                    alt='YC Directory App'
                                    className='w-full h-full object-contain'
                                    loading="lazy"
                                    style={{ willChange: "transform, opacity" }}
                                />
                            </div>
                            <h2>YC Directory - A Startup Showcase App</h2>
                            <p className="text-white-50 mt-1">
                                "An app to explore and track Y Combinator startups with advanced search, filters, and interactive UI. Built with React and TailwindCSS for a fast and responsive experience."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ShowCase;
