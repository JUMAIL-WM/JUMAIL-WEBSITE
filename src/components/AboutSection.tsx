import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code, Layout, Layers } from "lucide-react";

const skillCategories = [
  {
    icon: Palette,
    title: "Technical Learning & Community Engagement",
    description: "Actively participating in the Microsoft Student Ambassador Program, organizing learning sessions and helping students explore new technologies.",
    color: "primary",
  },
  {
    icon: Code,
    title: "Front-End Development",
    description: "Building responsive, performant web applications with modern technologies and best practices.",
    color: "secondary",
  },
  {
    icon: Layout,
    title: "Web Design",
    description: "Designing beautiful websites that perfectly balance aesthetics with functionality.",
    color: "accent",
  },
  {
    icon: Layers,
    title: "Data Entry & Record Management",
    description: "Accurately entering, updating, and maintaining data in digital systems while ensuring data integrity and confidentiality.",
    color: "neon-cyan",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">About </span>
            <span className="text-glow-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border-2 border-secondary/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute inset-8 rounded-full border-2 border-accent/20 animate-pulse" style={{ animationDelay: "1s" }} />
              
              {/* Profile Image Placeholder */}
              
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center overflow-hidden neon-border">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-6xl sm:text-8xl font-display font-bold text-glow-gradient">
                    <img className="Image" src="/D.jpg" alt="Amir Ali Chohan" /></span>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center neon-border"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-secondary/20 backdrop-blur-sm flex items-center justify-center neon-border-blue"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-4">
              Passionate about creating digital experiences that matter
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As a Settlement Officer at Port City BPO, I ensure accurate and efficient financial transaction processing with strong attention to detail and operational excellence.
              </p>
              <p>
               Alongside my professional career, I serve as a Beta Microsoft Student Ambassador, where I actively explore Artificial Intelligence and Large Language Models while empowering students through tech learning initiatives.
              </p>
              <p>
              Currently pursuing a BSc (Hons) Software Engineering at Cardiff Metropolitan University (ICBT Colombo), I am focused on combining academic knowledge with real-world industry experience to build innovative, scalable, and meaningful technology solutions.
              </p>
            </div>

            {/* Quick Info */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="glass-card rounded-lg p-4">
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-semibold text-foreground">Ninthavur, Sri Lanka</div>
              </div>
              <div className="glass-card rounded-lg p-4">
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-semibold text-foreground">jumailwm@gmail.com</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="glass-card rounded-xl p-6 hover-glow group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-lg bg-${category.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className={`w-6 h-6 text-${category.color}`} />
              </div>
              <h4 className="text-lg font-display font-semibold text-foreground mb-2">
                {category.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
