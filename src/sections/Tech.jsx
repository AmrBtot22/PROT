/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/purity */
import React, { useRef, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Icons = {
  HTML: (props) => <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#E34F26" fillOpacity="0.1"/><path d="M4 3L5.5 19L12 21L18.5 19L20 3H4Z" fill="#E34F26"/><path d="M16.5 6H7.5L8 11.5H15.5L15 15.5L12 16.5L9 15.5L8.8 13.5H6.5L6.8 17L12 18.5L17.2 17L17.8 8.5H16.5Z" fill="white"/></svg>,
  CSS: (props) => <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#1572B6" fillOpacity="0.1"/><path d="M4 3L5.5 19L12 21L18.5 19L20 3H4Z" fill="#1572B6"/><path d="M16.5 6H7.5L8 11.5H15.5L15 15.5L12 16.5L9 15.5L8.8 13.5H6.5L6.8 17L12 18.5L17.2 17L17.8 8.5H16.5Z" fill="white"/></svg>,
  Tailwind: (props) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>,
  JS: (props) => <svg viewBox="0 0 24 24" fill="none" {...props}><rect width="24" height="24" rx="2" fill="#F7DF1E"/><path d="M11.5 17C11.5 17.8 12.2 18.5 13 18.5C13.8 18.5 14.5 17.8 14.5 17V11H16V17C16 18.7 14.7 20 13 20C11.3 20 10 18.7 10 17H11.5Z" fill="black"/><path d="M19.5 20C18.2 20 17.5 19.2 17.2 18.5L18.5 17.8C18.7 18.2 19 18.5 19.5 18.5C20.1 18.5 20.5 18.2 20.5 17.7C20.5 17.2 20.2 17 19.2 16.6C18 16.1 17.2 15.5 17.2 14.4C17.2 13.1 18.2 12.2 19.5 12.2C20.5 12.2 21.2 12.7 21.6 13.2L20.4 14C20.2 13.7 19.9 13.5 19.5 13.5C19 13.5 18.7 13.8 18.7 14.2C18.7 14.6 19 14.8 19.8 15.1C21.2 15.6 22 16.3 22 17.6C22 19 20.8 20 19.5 20Z" fill="black"/></svg>,
  Node: (props) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2L4 6.5V17.5L12 22L20 17.5V6.5L12 2ZM12 4.5L17.5 7.5V16.5L12 19.5L6.5 16.5V7.5L12 4.5Z" fill="#339933"/><path d="M12 9.5C10.6 9.5 9.5 10.6 9.5 12C9.5 13.4 10.6 14.5 12 14.5C13.4 14.5 14.5 13.4 14.5 12C14.5 10.6 13.4 9.5 12 9.5Z" fill="white"/></svg>,
  TS: (props) => <svg viewBox="0 0 24 24" fill="none" {...props}><rect width="24" height="24" rx="2" fill="#3178C6"/><path d="M11 11H7V13H8V19H10V13H11V11Z" fill="white"/><path d="M17.5 19C16.5 19 15.5 18.5 15.2 17.5L16.8 16.8C17 17.2 17.5 17.5 17.5 17.5C18 17.5 18.2 17.3 18.2 17C18.2 16.6 17.8 16.5 17.2 16.2C16.2 15.8 15.2 15.2 15.2 14C15.2 12.8 16.2 12 17.5 12C18.5 12 19.2 12.5 19.5 13L18.2 13.8C18 13.5 17.8 13.4 17.5 13.4C17.2 13.4 16.8 13.6 16.8 13.9C16.8 14.3 17.2 14.4 17.8 14.6C19 15 20 15.6 20 17C20 18.2 19 19 17.5 19Z" fill="white"/></svg>,
  React: (props) => <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="2" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="1.5"><ellipse cx="12" cy="12" rx="10" ry="4.5"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/></g></svg>,
  ReactRouter: (props) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" fill="#CA4245"/><path d="M8 12C8 9 12 6 12 6C12 6 16 9 16 12" stroke="#CA4245" strokeWidth="2" strokeLinecap="round" fill="none"/><path d="M4 12C4 18 10 21 12 21" stroke="#CA4245" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" fill="none"/></svg>
};

const StarField = () => {
  const stars = useMemo(() => {
    return [...Array(80)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: 0.2,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: star.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const OrbitRing = ({ size, speed, reverse, children, dashed = false }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
      <div 
        className={`absolute rounded-full border ${dashed ? 'border-dashed border-white/5' : 'border-white/5'} pointer-events-none`} 
        style={{ width: size, height: size }}
      />
      
      <motion.div
        style={{ width: size, height: size }}
        animate={{ rotate: reverse ? [360, 0] : [0, 360] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        className="absolute"
      >
         {children}
      </motion.div>
    </div>
  );
};

const Planet = ({ icon: Icon, color, speed, reverse }) => {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
      
      <motion.div
        animate={{ rotate: reverse ? [0, 360] : [360, 0] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        className="relative flex items-center justify-center"
      >
        <div className="group relative p-4 flex items-center justify-center cursor-pointer">
            
            <div 
                className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                style={{ backgroundColor: color }}
            />

            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-black border border-white/10 flex items-center justify-center z-10 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-white/40">
                <Icon 
                    className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: color }} 
                />
            </div>

            <div className="absolute -inset-1 rounded-full border border-white/5 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
        </div>
      </motion.div>
    </div>
  );
};

const TechOrbit = () => {
  const containerRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 50, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 50, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
    id="tech"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center py-20"
    >
      <StarField />
      
      <div className="relative w-full flex items-center justify-center perspective-1000">
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative w-75 h-75 md:w-150 md:h-150 flex items-center justify-center"
        >
          <div className="absolute z-10 w-20 h-20 md:w-28 md:h-28 rounded-full bg-black border border-white/10 shadow-[0_0_60px_-10px_rgba(168,85,247,0.4)] flex items-center justify-center transform-style-3d">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-1 rounded-full border-t border-r border-purple-500/40" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-3 rounded-full border-b border-l border-cyan-500/40" />
              <span className="font-bold text-white tracking-widest text-lg md:text-xl">STACK</span>
          </div>

          
          <OrbitRing size="200px" speed={20} reverse={false}>
             <Planet icon={Icons.React} color="#61DAFB" speed={20} reverse={false} />
             <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2">
                 <Planet icon={Icons.ReactRouter} color="#CA4245" speed={20} reverse={false} />
             </div>
          </OrbitRing>
          
         
          <div className="hidden md:block">
            <OrbitRing size="380px" speed={35} reverse={true} dashed>
                <Planet icon={Icons.JS} color="#F7DF1E" speed={35} reverse={true} />
                <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Planet icon={Icons.TS} color="#3178C6" speed={35} reverse={true} />
                </div>
            </OrbitRing>
          </div>
          <div className="md:hidden">
            <OrbitRing size="290px" speed={35} reverse={true} dashed>
                <Planet icon={Icons.JS} color="#F7DF1E" speed={35} reverse={true} />
            </OrbitRing>
          </div>

          <div className="hidden md:block">
            <OrbitRing size="560px" speed={50} reverse={false}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"><Planet icon={Icons.Node} color="#339933" speed={50} reverse={false} /></div>
                <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2"><Planet icon={Icons.HTML} color="#E34F26" speed={50} reverse={false} /></div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2"><Planet icon={Icons.CSS} color="#1572B6" speed={50} reverse={false} /></div>
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"><Planet icon={Icons.Tailwind} color="#38BDF8" speed={50} reverse={false} /></div>
            </OrbitRing>
          </div>
           <div className="md:hidden">
            <OrbitRing size="380px" speed={50} reverse={false}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"><Planet icon={Icons.HTML} color="#E34F26" speed={50} reverse={false} /></div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2"><Planet icon={Icons.CSS} color="#1572B6" speed={50} reverse={false} /></div>
            </OrbitRing>
          </div>

        </motion.div>
      </div>

      <div className="relative z-20 mt-12 text-center pointer-events-none">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-b from-white to-white/40">
             Tech Universe
          </h2>
      </div>
    </section>
  );
};

export default TechOrbit;