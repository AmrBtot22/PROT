/* eslint-disable no-unused-vars */
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote, Star, MessageCircle } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "/images/client1.png",
    content:
      "Working with Ahmed was an absolute pleasure. His attention to detail and creative problem-solving skills resulted in a website that exceeded our expectations.",
    rating: 5,
    color: "#7c3aed",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    image: "/images/client2.png",
    content:
      "Ahmed delivered our project on time and with exceptional quality. His understanding of modern web technologies and design principles is impressive.",
    rating: 5,
    color: "#06b6d4",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Founder, DesignHub",
    image: "/images/client3.png",
    content:
      "The attention to animation details and user experience in our project was outstanding. Ahmed brought our vision to life in ways we couldn't have imagined.",
    rating: 5,
    color: "#ec4899",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CTO, CodeCraft",
    image: "/images/client4.png",
    content:
      "Exceptional technical skills combined with great communication. Ahmed understood our requirements perfectly and delivered a robust, scalable solution.",
    rating: 5,
    color: "#f59e0b",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Marketing Director, GrowthLab",
    image: "/images/client5.png",
    content:
      "The website Ahmed built for us has significantly improved our conversion rates. His understanding of user experience is remarkable.",
    rating: 5,
    color: "#10b981",
  },
  {
    id: 6,
    name: "James Parker",
    role: "Startup Founder, InnoTech",
    image: "/images/client6.png",
    content:
      "Ahmed's ability to turn complex requirements into elegant solutions is impressive. He delivered beyond our expectations.",
    rating: 5,
    color: "#f97316",
  },
  
]

function TestimonialCard({ testimonial }) {
  return (
    <div className="relative group cursor-pointer w-70 sm:w-[320px] lg:w-95 shrink-0">
      <motion.div
        className="absolute -inset-1 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-400"
        style={{ background: `${testimonial.color}30` }}
      />

      <div className="relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 group-hover:border-primary/50 transition-all duration-300 overflow-hidden h-full">
        <div
          className="absolute inset-0 opacity-8 group-hover:opacity-15 transition-opacity duration-400"
          style={{
            background: `linear-gradient(135deg, ${testimonial.color}, transparent)`,
          }}
        />

        <motion.div className="absolute top-3 sm:top-4 right-3 sm:right-4">
          <Quote
            className="w-6 h-6 sm:w-8 sm:h-8 opacity-15"
            style={{ color: testimonial.color }}
          />
        </motion.div>

        <div className="relative z-10">
          {/* ⭐ STARS */}
          <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ rotate: [-5, 5, -5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
              >
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-500 text-yellow-500" />
              </motion.div>
            ))}
          </div>

          <p className="text-foreground/90 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
            &ldquo;{testimonial.content}&rdquo;
          </p>

          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2"
              style={{ ringColor: `${testimonial.color}40` }}
            >
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm">
                {testimonial.name}
              </h4>
              <p className="text-muted-foreground text-[10px] sm:text-xs">
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const firstRow = testimonials.slice(0, 3)
  const secondRow = testimonials.slice(3, 6)

  return (
    <section
      id="test"
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      <motion.div
        className="container mx-auto px-4 sm:px-6 relative z-10"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary mb-3 sm:mb-4"
          >
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-mono text-xs sm:text-sm tracking-wider uppercase">
              Testimonials
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
            What <span className="text-gradient">Clients Say</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Don&apos;t just take my word for it - hear from some of my satisfied
            clients
          </p>
        </motion.div>

        <div className="space-y-4 sm:space-y-6 lg:space-y-8 py-2 sm:py-4">
          {/* Row 1 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex gap-4 sm:gap-5 lg:gap-6 overflow-hidden py-2 marquee-container">
              <motion.div
                className="flex gap-4 sm:gap-5 lg:gap-6 shrink-0"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 35,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                {[...firstRow, ...firstRow, ...firstRow, ...firstRow].map(
                  (testimonial, index) => (
                    <TestimonialCard
                      key={`row1-${testimonial.id}-${index}`}
                      testimonial={testimonial}
                    />
                  )
                )}
              </motion.div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex gap-4 sm:gap-5 lg:gap-6 overflow-hidden py-2 marquee-container">
              <motion.div
                className="flex gap-4 sm:gap-5 lg:gap-6 shrink-0"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  duration: 35,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                {[...secondRow, ...secondRow, ...secondRow, ...secondRow].map(
                  (testimonial, index) => (
                    <TestimonialCard
                      key={`row2-${testimonial.id}-${index}`}
                      testimonial={testimonial}
                    />
                  )
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
