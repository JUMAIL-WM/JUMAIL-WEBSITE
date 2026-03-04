import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
  id: 1,
  content: "Mohammed Jumail is an inspiring individual with a strong passion for both his career and personal growth. He balances his work and learning journey with dedication and discipline. His positive attitude, hard work, and commitment motivate everyone around him. Jumail always strives to improve and leads by example.",
  author: "Kamali Sridhar",
  role: "Security Analyst | Cybersecurity Student",
  company: "Professional Connection",
  avatar: "KS",
},
 {
  id: 2,
  content: "I highly recommend Mohammed Jumail for his expertise in software development. He consistently delivers efficient and scalable solutions while staying updated with modern technologies. His professionalism, innovation, and passion make him a valuable asset to any team.",
  author: "Fathima Rakshana",
  role: "Undergraduate Software Engineer",
  company: "Professional Connection",
  avatar: "FR",
},
 {
  id: 3,
  content: "Jumail is a highly motivated and disciplined individual who consistently demonstrates a strong commitment to learning and professional growth. His ability to collaborate with others and his positive attitude make him a valuable member of any team.",
  author: "Professional Colleague",
  role: "Team Member",
  company: "Professional Network",
  avatar: "PC",
},
{
  id: 4,
  content: "Working with Mohammed Jumail has been a great experience. He is reliable, detail-oriented, and always willing to take initiative to complete tasks effectively. His dedication and work ethic truly stand out.",
  author: "Project Collaborator",
  role: "Technical Team Member",
  company: "Professional Network",
  avatar: "TC",
},
{
  id: 5,
  content: "Jumail has a strong passion for technology and continuous improvement. He approaches challenges with a problem-solving mindset and is always eager to learn new tools and technologies.",
  author: "Technology Community Member",
  role: "Developer",
  company: "Tech Community",
  avatar: "TC",
},
{
  id: 6,
  content: "Mohammed Jumail is a hardworking and enthusiastic professional. His ability to balance technical skills with effective communication makes him a dependable and inspiring team player.",
  author: "Professional Mentor",
  role: "Senior Professional",
  company: "Industry Mentor",
  avatar: "PM",
},
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length;
      result.push({ ...testimonials[index], position: i });
    }
    return result;
  };

  return (
    <section id="testimonials" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Client </span>
            <span className="text-glow-gradient">Testimonials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What my clients and colleagues have to say about working with me.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Cards Container */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 py-8">
              {getVisibleTestimonials().map((testimonial) => (
                <motion.div
                  key={`${testimonial.id}-${testimonial.position}`}
                  initial={false}
                  animate={{
                    scale: testimonial.position === 0 ? 1 : 0.85,
                    opacity: testimonial.position === 0 ? 1 : 0.4,
                    x: testimonial.position * 20,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`glass-card rounded-2xl p-6 sm:p-8 max-w-2xl transition-all ${
                    testimonial.position === 0 
                      ? "neon-border z-10" 
                      : "hidden sm:block absolute"
                  } ${
                    testimonial.position === -1 ? "left-0" : ""
                  } ${
                    testimonial.position === 1 ? "right-0" : ""
                  }`}
                  style={{
                    width: testimonial.position === 0 ? "100%" : "300px",
                  }}
                >
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  
                  {/* Content */}
                  <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-6 bg-gradient-to-r from-primary to-secondary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
