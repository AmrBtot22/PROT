/* eslint-disable react-hooks/refs */
import React, { useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
    const secRef = useRef(null);
    const proRefs = [useRef(null), useRef(null), useRef(null)];

    // State to handle touch on mobile
    const [touchIndex, setTouchIndex] = useState(null);

    useGSAP(() => {
        gsap.fromTo(
            secRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, ease: "power1.out" }
        );

        proRefs.forEach(ref => {
            gsap.fromTo(
                ref.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top bottom-=100",
                        once: true,
                    }
                }
            );
        });
    }, []);

    const handleTouch = (index) => {
        // toggle on touch
        setTouchIndex(prev => (prev === index ? null : index));
    }

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
                            />
                        </div>
                        <div className='text-content'>
                            <h2>Portfolio Project</h2>
                            <p className="text-white-50 md:text-xl">
                                "Showcasing my personal portfolio with interactive UI,
                                smooth animations, and modern design."
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
                                />
                            </div>
                            <h2>Weather App</h2>
                            <p className="text-white-50 mt-1">
                                "A sleek weather application providing real-time forecasts
                                and responsive layouts."
                            </p>
                        </div>

                        {/* Gaming Store – Coming Soon */}
                        <div
                            className='project relative group cursor-pointer'
                            ref={proRefs[2]}
                            onClick={() => handleTouch(2)}
                        >
                            {/* Coming Soon Badge – Red + Dark Red + Light Purple Gradient */}
                            <div className="
                                absolute top-4 left-4 z-20
                                rounded-full px-4 py-1.5
                                text-[11px] font-semibold tracking-[0.25em]
                                text-white uppercase
                                bg-linear-to-r from-[#FCA5A5] via-[#B91C1C] to-[#D8B4FE]
                                shadow-lg shadow-[#FCA5A5]/30
                                animate-[float_3s_ease-in-out_infinite]
                            ">
                                Coming Soon
                            </div>

                            {/* Image Wrapper */}
                            <div className='image-wrapper relative bg-[#FFE7EB] overflow-hidden'>
                                {/* Overlay: Gradient + Blur */}
                                <div className={`
                                    absolute inset-0 z-10
                                    bg-linear-to-t from-black/30 via-black/10 to-transparent
                                    backdrop-blur-[1px]
                                    transition-all duration-500
                                    ${touchIndex === 2 ? 'opacity-0' : 'opacity-100'}
                                    group-hover:opacity-0
                                `} />

                                <img
                                    src='/images/Screenshot 2026-01-07 122656.png'
                                    alt='Gaming Store Project'
                                    className={`
                                        w-full h-full object-contain
                                        opacity-80 grayscale
                                        transition-all duration-700
                                        ${touchIndex === 2 ? 'opacity-100 grayscale-0 scale-[1.02]' : ''}
                                        group-hover:opacity-100
                                        group-hover:grayscale-0
                                        group-hover:scale-[1.02]
                                    `}
                                    loading="lazy"
                                />
                            </div>

                            <h2 className="mt-3">Gaming Store Platform</h2>
                            <p className="text-white-50 mt-1">
                                "An upcoming gaming store platform focused on clean design,
                                smooth user experience, and modern frontend architecture.
                                Currently in development."
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Floating animation for badge */}
            <style >{`
                @keyframes float {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                    100% { transform: translateY(0); }
                }
            `}</style>
        </section>
    )
}

export default ShowCase;
