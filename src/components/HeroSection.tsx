import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-primary/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-secondary/20 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-accent/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-muted-foreground">Welcome to my portfolio!</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 sm:mb-6"
        >
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-glow-gradient">Jumail</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-foreground/90 mb-4 sm:mb-6"
        >
          IT & Admin Support | Data Entry & BPO Executive | Microsoft Student Ambassador - Gold
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-4"
        >
         I am a Settlement Officer at Port City BPO, 
         ensuring accurate and efficient financial transaction processing. 
         Alongside this, I serve as a Gold Microsoft Student Ambassador, expanding my expertise in AI and 
         Large Language Models. Currently pursuing a BSc (Hons) Software Engineering 
         at Cardiff Metropolitan University (ICBT Colombo), I am passionate about combining academic knowledge with industry experience to build 
         innovative tech solutions.

        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg pulse-glow"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            View Projects & Events
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-primary/50 hover:bg-primary/10 hover:border-primary text-foreground font-semibold px-8 py-6 text-lg neon-border"
            asChild
          >
            <a href="/Mohammed Jumail - CV.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "2+", label: "Years Experience" },
            { value: "10+", label: "Projects Completed" },
            { value: "12+", label: "Happy Clients" },
            { value: "25+", label: "Awards Won" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="glass-card rounded-xl p-4 sm:p-6 hover-glow"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-glow-gradient">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {/* <span className="text-sm text-muted-foreground">Scroll Down</span> */}
          <ArrowDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
