import { motion, AnimatePresence } from "framer-motion";
import { X, Target, Search, Layers, Palette, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  type: "uiux" | "frontend";
  image: string;
  tools: string[];
  caseStudy?: {
    problem: string;
    research: string;
    wireframes: string;
    finalUI: string;
    outcome: string;
  };
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project?.caseStudy) return null;

  const sections = [
    {
      icon: Target,
      title: "Problem Statement",
      content: project.caseStudy.problem,
      color: "primary",
    },
    {
      icon: Search,
      title: "Research & Discovery",
      content: project.caseStudy.research,
      color: "secondary",
    },
    {
      icon: Layers,
      title: "Wireframes & Prototyping",
      content: project.caseStudy.wireframes,
      color: "accent",
    },
    {
      icon: Palette,
      title: "Final UI Design",
      content: project.caseStudy.finalUI,
      color: "neon-cyan",
    },
    {
      icon: TrendingUp,
      title: "Outcomes & Impact",
      content: project.caseStudy.outcome,
      color: "neon-pink",
    },
  ];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card border border-border rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div 
              className="relative h-48 sm:h-64"
              style={{ background: project.image }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-4 right-4 bg-background/50 hover:bg-background/80 rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground inline-block mb-2">
                  UI/UX Case Study
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
              <p className="text-muted-foreground mb-8">{project.description}</p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-sm rounded-full bg-muted text-foreground border border-border"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Case Study Sections */}
              <div className="space-y-6">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-xl p-5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-${section.color}/20 flex items-center justify-center`}>
                        <section.icon className={`w-5 h-5 text-${section.color}`} />
                      </div>
                      <h3 className="text-lg font-display font-semibold text-foreground">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground pl-13">
                      {section.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
