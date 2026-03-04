import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const uiuxSkills = [
  { name: "Typing Speed", level: 95 },
  { name: "Data Accuracy", level: 92 },
  { name: "Data Verification", level: 90 },
  { name: "Record Management", level: 90 },
  { name: "Attention to Detail", level: 98 },
];

const frontendSkills = [
  { name: "MS Excel / Google Sheets", level: 98 },
  { name: "Data Processing", level: 92 },
  { name: "Customer Communication", level: 90 },
  { name: "Report Preparation", level: 85 },
  { name: "Office Administration", level: 88 },
];

const SkillBar = ({ 
  name, 
  level, 
  delay, 
  isInView, 
  type 
}: { 
  name: string; 
  level: number; 
  delay: number; 
  isInView: boolean; 
  type: "uiux" | "frontend";
}) => {
  const gradientClass = type === "uiux" 
    ? "from-primary to-accent" 
    : "from-secondary to-neon-cyan";

  return (
    <motion.div
      initial={{ opacity: 0, x: type === "uiux" ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${gradientClass} relative`}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" 
               style={{ backgroundSize: "200% 100%" }} />
          {/* End dot */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.3, delay: delay + 1.2 }}
            className={`absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${gradientClass} shadow-lg`}
            style={{ 
              boxShadow: type === "uiux" 
                ? "0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary) / 0.5)" 
                : "0 0 10px hsl(var(--secondary)), 0 0 20px hsl(var(--secondary) / 0.5)"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-primary/5 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/2 bg-secondary/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">My </span>
            <span className="text-glow-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
           Professional skills developed through hands-on experience in data entry, BPO operations, and office administration.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* UI/UX Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 sm:p-8 neon-border"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                Data Entry Skills
              </h3>
            </div>
            
            {uiuxSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={0.3 + index * 0.1}
                isInView={isInView}
                type="uiux"
              />
            ))}
          </motion.div>

          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-6 sm:p-8 neon-border-blue"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
               BPO & Office Skills
              </h3>
            </div>
            
            {frontendSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={0.4 + index * 0.1}
                isInView={isInView}
                type="frontend"
              />
            ))}
          </motion.div>
        </div>

        {/* Additional Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16"
        >
          <h3 className="text-xl font-display font-semibold text-foreground text-center mb-6">
            Tools & Technologies I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Microsoft Excel", "Microsoft Word",  "Figma", "Canva", "Photoshop", 
              "VS Code", "Git", "GitHub", "Google Sheets", "Google Docs",
              "Data Entry Systems", "CRM Software", "Email Communication", "Microsoft Teams",
              "Online Databases", "File Management", "Data Processing", "Reporting Tools",
              "Document Management", "Spreadsheet Analysis", "Office Administration"

             
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.03 }}
                className="px-4 py-2 rounded-full bg-muted/50 border border-border text-sm text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
