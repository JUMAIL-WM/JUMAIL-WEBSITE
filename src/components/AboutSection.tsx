import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code, Layout, Layers } from "lucide-react";

const skillCategories = [
  {
    icon: Palette,
    title: "Technical Learning & Community Engagement",
    description:
      "Actively participating in the Microsoft Student Ambassador Program, organizing learning sessions and helping students explore new technologies.",
    color: "primary",
  },
  {
    icon: Code,
    title: "Front-End Development",
    description:
      "Building responsive, performant web applications with modern technologies and best practices.",
    color: "secondary",
  },
  {
    icon: Layout,
    title: "Web Design",
    description:
      "Designing beautiful websites that perfectly balance aesthetics with functionality.",
    color: "accent",
  },
  {
    icon: Layers,
    title: "Data Entry & Record Management",
    description:
      "Accurately entering, updating, and maintaining data in digital systems while ensuring data integrity and confidentiality.",
    color: "neon-cyan",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span>About </span>
            <span className="text-purple-500">Me</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-sm mx-auto">

              <div className="absolute inset-0 rounded-full border border-purple-400/30 animate-pulse" />

              <div className="absolute inset-10 rounded-full overflow-hidden border-4 border-purple-500">
                <img
                  src="/D.jpg"
                  alt="Jumail"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating icons */}
              <motion.div
                className="absolute top-0 right-0 bg-purple-500/20 p-3 rounded-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code className="text-purple-400 w-6 h-6" />
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-0 bg-blue-500/20 p-3 rounded-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Palette className="text-blue-400 w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Passionate about creating digital experiences that matter
            </h3>

            <div className="space-y-4 text-gray-400 max-w-xl mx-auto lg:mx-0">
              <p>
                As a Settlement Officer at Port City BPO, I ensure accurate and
                efficient financial transaction processing with strong
                attention to detail and operational excellence.
              </p>

              <p>
                Alongside my professional career, I serve as a Beta Microsoft
                Student Ambassador, where I actively explore Artificial
                Intelligence and Large Language Models while empowering
                students through tech learning initiatives.
              </p>

              <p>
                Currently pursuing a BSc (Hons) Software Engineering at Cardiff
                Metropolitan University (ICBT Colombo), I focus on combining
                academic knowledge with real-world industry experience to build
                innovative and scalable technology solutions.
              </p>
            </div>

            {/* Quick Info */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
              
              <div className="glass-card rounded-lg p-4 text-center lg:text-left">
                <div className="text-sm text-gray-400">Location</div>
                <div className="font-semibold">Ninthavur, Sri Lanka</div>
              </div>

              <div className="glass-card rounded-lg p-4 text-center lg:text-left">
                <div className="text-sm text-gray-400">Contact Number</div>
                <div className="font-semibold">0760527243</div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl hover:scale-105 transition"
            >
              <div className="mb-4">
                <category.icon className="w-8 h-8 text-purple-400" />
              </div>

              <h4 className="text-lg font-semibold mb-2">
                {category.title}
              </h4>

              <p className="text-sm text-gray-400">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};