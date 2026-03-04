import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Building2 } from "lucide-react";

const experiences = [
  {
   id: 1,
role: "Settlement Officer",
company: "Port City BPO",
type: "Full-time",
duration: "Jun 2025 - Present",
description: "Responsible for handling financial settlements, verifying transactions, and ensuring accurate data processing in a fast-paced BPO environment.",
responsibilities: [
  "Processed and verified financial settlement transactions",
  "Maintained accurate records and ensured data integrity",
  "Reviewed and validated transaction details before processing",
  "Collaborated with team members to ensure smooth operational workflow",
],
  },
{
  id: 2,
  role: "Gold Microsoft Student Ambassador",
  company: "Microsoft",
  type: "Community Leadership",
  duration: "July 2024 - Present",
  description: "Part of the Microsoft Learn Student Ambassadors program, helping students explore modern technologies and develop technical and career skills.",
  responsibilities: [
    "Organized and hosted technical workshops and learning sessions",
    "Promoted Microsoft Learn programs and resources",
    "Guided students in building technical and career skills",
    "Collaborated with global student ambassadors and tech communities"
  ],
},
 {
  id: 5,
  role: "Administrative Executive",
  company: "Marazin Academy",
  type: "Full-time",
  duration: "Feb 2025 - May 2025",
  description: "Provided technical and administrative support for staff and students while maintaining IT systems and ensuring smooth daily operations.",
  responsibilities: [
    "Maintained and monitored computer systems and networks",
    "Installed and configured hardware and software",
    "Managed user accounts, backups, and system updates",
    "Ensured data security and smooth IT operations",
    "Assisted with LMS platform troubleshooting and support"
  ],
},
 {
  id: 4,
  role: "Junior Full-Stack Developer (Intern)",
  company: "Marazin Academy",
  type: "Internship",
  duration: "Aug 2024 - Feb 2025",
  description: "Gained hands-on experience in web development while working with a team to build and maintain educational platforms and web applications.",
  responsibilities: [
    "Developed and maintained web pages using HTML, CSS, and PHP",
    "Worked with Laravel framework to build backend functionality",
    "Collaborated with the development team on real-world projects",
    "Improved platform features to enhance the student learning experience"
  ],
},
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-primary/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Work </span>
            <span className="text-glow-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional experience in data entry and BPO operations, ensuring accuracy, efficiency, and organized data management.          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30" />

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative mb-8 sm:mb-12 ${
                index % 2 === 0 
                  ? "sm:pr-[50%] sm:text-right" 
                  : "sm:pl-[50%] sm:ml-auto"
              }`}
            >
              {/* Timeline Dot */}
              <div 
                className={`absolute top-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary z-10 ${
                  index % 2 === 0 
                    ? "left-2 sm:left-auto sm:right-[-8px] sm:translate-x-1/2" 
                    : "left-2 sm:left-[-8px] sm:-translate-x-1/2"
                }`}
                style={{ 
                  boxShadow: "0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary) / 0.5)" 
                }}
              />

              {/* Content Card */}
              <div className={`ml-10 sm:ml-0 ${index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"}`}>
                <div className="glass-card rounded-xl p-5 sm:p-6 hover-glow">
                  {/* Header */}
                  <div className={`flex items-start gap-3 mb-3 ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`}>
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      {exp.type === "Freelance" ? (
                        <Briefcase className="w-5 h-5 text-primary" />
                      ) : (
                        <Building2 className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div className={index % 2 === 0 ? "sm:text-right" : ""}>
                      <h3 className="text-lg font-display font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-primary">{exp.company}</p>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className={`mb-3 ${index % 2 === 0 ? "sm:text-right" : ""}`}>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {exp.duration}
                      <span className="text-foreground/70">• {exp.type}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "sm:text-right" : ""}`}>
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <ul className={`space-y-1 ${index % 2 === 0 ? "sm:text-right" : ""}`}>
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li 
                        key={respIndex}
                        className={`text-sm text-foreground/80 flex items-center gap-2 ${
                          index % 2 === 0 ? "sm:flex-row-reverse" : ""
                        }`}
                      >
                        <span className="w-1 h-1 rounded-full bg-secondary shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
