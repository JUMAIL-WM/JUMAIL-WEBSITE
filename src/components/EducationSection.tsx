import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen, BadgeCheck } from "lucide-react";

const education1 = {
  degree: "Bachelor of Software Engineering",
  university: "Cardiff Metropolitan University | ICBT Colombo",
  duration: "2026 - Present",
  description:
    "Pursuing a BSc (Hons) Software Engineering degree, I am focused on combining academic knowledge with real-world industry experience to build innovative, scalable, and meaningful technology solutions.",
  achievements: [
    "Maintained a strong academic record while actively engaging in extracurricular activities and tech communities.",
    "Completed relevant coursework in software development, data structures, algorithms, and web technologies.",
    "Participated in university hackathons and coding competitions to apply theoretical knowledge in practical scenarios.",
    "Collaborated on group projects that involved designing and developing software applications, enhancing teamwork and communication skills.",
  ],
};

const education2 = {
  degree: "Higher National Diploma in Computer Software Engineering (HND)",
  university: "SLIATE - Sammanthurai",
  duration: "2022 - 2025",
  description:
    "Focused on practical software development and core computing concepts, strengthening my skills through hands-on coursework and mini projects.",
  achievements: [
    "Studied programming fundamentals and database concepts.",
    "Built practical applications and academic mini-projects.",
    "Improved problem-solving and software development skills.",
  ],
};

type Cert = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  icon: any;
};

const certifications: Cert[] = [
  // Already had
 

  // From your LinkedIn screenshots (Add full list)
  { id: 5, title: "2026 Microsoft Student Ambassador", issuer: "Microsoft Student Ambassadors", date: "Jan 2026", icon: BadgeCheck },
  { id: 6, title: "Getting Started with AWS for Games – Part I", issuer: "Amazon Web Services (AWS)", date: "Dec 2025", icon: Award },
  { id: 8, title: "Gemini Certified Educator", issuer: "Google for Education", date: "Nov 2025", icon: Award },

  { id: 11, title: "Explore AI Level 1", issuer: "Microsoft Student Ambassadors – Imagine Cup", date: "May 2025", icon: BadgeCheck },
  { id: 13, title: "Skills Boost Arcade Base Camp (May 2025)", issuer: "Google Cloud Arcade Facilitator Program", date: "May 2025", icon: Award },

 
  { id: 19, title: "GenAI 101 with Pieces", issuer: "Pieces", date: "Nov 2024", icon: Award },
  { id: 20, title: "Postman API Fundamentals Student Expert", issuer: "LetsUpgrade", date: "Jan 2025", icon: Award },
  { id: 21, title: "Google Analytics Certification", issuer: "Google Cloud Skills Boost", date: "Nov 2024", icon: Award },

  { id: 22, title: "WSO2 Certified Ballerina Developer – Swan Lake", issuer: "WSO2", date: "Jun 2024", icon: Award },
];

export const EducationSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const EducationCard = ({
    data,
    Icon,
    accent = "primary",
    title = "Education",
  }: {
    data: typeof education1;
    Icon: any;
    accent?: "primary" | "secondary";
    title?: string;
  }) => {
    const accentText = accent === "primary" ? "text-primary" : "text-secondary";
    const accentBg =
      accent === "primary"
        ? "from-primary/20 to-secondary/20"
        : "from-secondary/20 to-primary/20";

    return (
      <div className="glass-card rounded-2xl p-6 sm:p-8 h-full neon-border relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${accentBg} flex items-center justify-center`}
            >
              <Icon className={`w-7 h-7 ${accentText}`} />
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{data.duration}</p>
            </div>
          </div>

          <h4 className="text-lg font-semibold text-foreground mb-2">{data.degree}</h4>
          <p className="text-primary font-medium mb-4">{data.university}</p>
          <p className="text-muted-foreground mb-6">{data.description}</p>

          <div className="space-y-2">
            <h5 className="text-sm font-semibold text-foreground">
              {data === education1 ? "Achievements" : "Highlights"}
            </h5>
            {data.achievements.map((a, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                <span className="text-sm text-muted-foreground">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="education" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary/5 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Education & </span>
            <span className="text-glow-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and professional certifications that fuel my expertise.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <EducationCard data={education1} Icon={GraduationCap} accent="primary" title="Education" />
              <EducationCard data={education2 as any} Icon={BookOpen} accent="secondary" title="Education" />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                Professional Certifications
              </h3>

              {/* ✅ IMPORTANT: NO max-height / NO overflow -> full list will show */}
              <div className="space-y-4">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon;
                  return (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.35, delay: 0.35 + index * 0.03 }}
                      className="glass-card rounded-xl p-4 sm:p-5 hover-glow group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                          <Icon className="w-6 h-6 text-secondary" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground truncate">{cert.title}</h4>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-muted-foreground">{cert.issuer}</span>
                            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                            <span className="text-primary">{cert.date}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};