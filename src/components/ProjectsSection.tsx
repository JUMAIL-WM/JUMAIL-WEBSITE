import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectModal } from "./ProjectModal";

//Ui Images
import Eventjumail1 from "@/assets/projects/09.jpg";
import Eventjumail2 from "@/assets/projects/10.jpg";
import Eventjumail3 from "@/assets/projects/11.jpg";
import Eventjumail4 from "@/assets/projects/12.jpg";
import Eventjumail5 from "@/assets/projects/13.jpg";
import Eventjumail6 from "@/assets/projects/14.jpg";
import AsaanDrive from "@/assets/projects/01.jpeg";
import SweetBakary from "@/assets/projects/02.jpeg";
import MovieApp from "@/assets/projects/03.jpeg";
import WorkSmarter from "@/assets/projects/04.png";
import Ecommerce from "@/assets/projects/06.png";
import TaskManager from "@/assets/projects/07.png";
import { i } from "node_modules/vite/dist/node/types.d-aGj9QkWt";


//Front-End Images


type ProjectType = "all" | "uiux" | "frontend";

interface Project {
  id: number;
  title: string;
  description: string;
  type: "uiux" | "frontend";
  image: string;
  bgGradient?: string;
  tools: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: {
    problem: string;
    research: string;
    wireframes: string;
    finalUI: string;
    outcome: string;
  };
}

const projects: Project[] = [
  // UI/UX Projects
  // UI/UX Projects
{
  id: 7,
  title: "Unlock the Potential of Master Version Control with Git and GitHub",
  description:
    "Join us for an exclusive session on Master Version Control with Git and GitHub led by Microsoft Learn Student Ambassador, Mr. Mohammed Jumail!",
  type: "uiux",
  image: Eventjumail1,
  bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  tools: ["git", "github", "version control", "collaboration"],
},

{
  id: 7,
  title: "Learn How to Become a Microsoft Learn Student Ambassador (MLSA) ",
  description:
    "Are you ready to unlock incredible opportunities, grow your technical and leadership skills, and become a part of a global tech community? ",
  type: "uiux",
  image: Eventjumail2,
  bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  tools: ["Microsoft Learn", "Student Ambassador Program", "Tech Community", "Leadership Development"],
},

{
  id: 7,
  title: " Introduction To Python – A Learning Opportunity!",
  description:
    "Join us for an engaging session on learning Python, a powerful and versatile programming language that is widely used in various domains such as web development, data science, and automation.",
  type: "uiux",
  image: Eventjumail3,
  bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  tools: ["Python", "Programming Fundamentals", "Data Structures", "Algorithms"],
},

{
  id: 7,
  title: "Grateful for the opportunity to host the MLSA Workshop program at SLIATE – Sammanthurai!",
  description:
    "I am grateful for the opportunity to host the Microsoft Learn Student Ambassador (MLSA) Workshop program at SLIATE – Sammanthurai.",
  type: "uiux",
  image: Eventjumail4,
  bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  tools: ["Microsoft Learn", "Student Ambassador Program", "Workshop", "Leadership Development"],
},

{
  id: 7,
  title: "How to Become a Microsoft Student Ambassador (MSA) - Unlock Incredible Opportunities!",
  description:
    "Learn how to become a Microsoft Student Ambassador (MSA) and unlock incredible opportunities to grow your technical and leadership skills.",
  type: "uiux",
  image: Eventjumail5,
  bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  tools: ["Microsoft Learn", "Student Ambassador Program", "Leadership Development", "Community Engagement"],
},

{
  id: 7,
  title: "Microsoft 365 Copilot & AI Agent Automation Workshop",
  description:
    "A workshop focused on Microsoft 365 Copilot and AI Agent Automation, designed to help students and professionals leverage AI tools for enhanced productivity.",
  type: "uiux",
  image: Eventjumail6,
  bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  tools: ["Microsoft 365", "Copilot", "AI Agent Automation", "Productivity Tools"],
},

  
  // Frontend Projects

   {
    id: 1,
    title: "Acadamy Registration Website System",
    description:
      "Full-featured online store with cart functionality, Stripe payments, and admin dashboard.",
    type: "frontend",
    image: AsaanDrive,
    tools: ["html", "css", "javascript", "php", "mysql"],
    liveUrl: "https://www.linkedin.com/in/jumail/details/projects/",
    githubUrl: "#",
  },

   {
    id: 2,
    title: "Ayaan Book Shop System",
    description:
      " This project is my first programming project, which I created during my first semester of HNDIT. It involves a simple book shop system. I utilized the C# programming language for its development.",

    type: "frontend",
    image: SweetBakary,
    tools: ["C#", "Mysql", ".NET"],
    liveUrl: "https://www.linkedin.com/in/jumail/details/projects/",
    githubUrl: "https://github.com/JUMAIL-WM/BOOK-STORE-JUMAIL.git",
  },

   {
    id: 3,
    title: "Pebbels Acadamy Website",
    description:
      "This project is my 2nd semester group project, which we created during my f2nd semester of HNDIT. It involves a pebbels acadamy website. I utilized the HTML,CSS,JS,PHP language for its development.",
    type: "frontend",
    image: MovieApp,
    tools: ["HTML", "CSS", "JavaScript", "PHP" ,"MySQL"],
    liveUrl: "https://www.linkedin.com/in/jumail/details/projects/",
    githubUrl: "https://github.com/JUMAIL-WM/Pebbels-Acadamy-Website.git",
  },

   {
    id: 4,
    title: "Ninthavur Zakath Board System",
    description:
      "Full-featured online store with cart functionality, Stripe payments, and admin dashboard.",
    type: "frontend",
    image: WorkSmarter,
    tools: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery", "Git", "GitHub", "REST APIs"],
    liveUrl: "https://www.linkedin.com/in/jumail/details/projects/",
    githubUrl: "https://github.com/JUMAIL-WM/Zakath-Ninthavur-Project.git",
  },
  
  {
    id: 5,
    title: "SLIATE Library Managment System",
    description:
      "This project is my 3rd semester php programming project, which I created during my 2nd semester of HNDIT. It involves a simple PHP Library managment website. I utilized the HTML,CSS,JS,PHP language for its development.",
    type: "frontend",
    image: Ecommerce,
    tools: ["HTML", "CSS", "JavaScript", "PHP" ,"MySQL"],
    liveUrl: "https://www.linkedin.com/in/jumail/details/projects/",
    githubUrl: "https://github.com/JUMAIL-WM/Library_Managment_Project.git",
  },
  {
    id: 6,
    title: "ANJ Mobile Shop Website",
    description:
      "The project centered around creating an ANJ Mobile Shop website to serve local customers. Our responsibilities encompassed the development of essential functionalities, such as user registration and login. Additionally, we implemented a product listing feature that allowed users to browse through the available mobile phones.The website also included a shopping cart system, enabling users to add products they wished to purchase. To facilitate the checkout process, we integrated a payment gateway, allowing customers to complete their transactions securely.",
    type: "frontend",
    image: TaskManager,
    tools: ["HTML", "CSS", "JavaScript", "PHP" ,"MySQL"],
    liveUrl: "https://www.linkedin.com/in/jumail/details/projects/",
    githubUrl: "https://github.com/JUMAIL-WM/ANJ-Mobile-Shop-Website.git",
  },

 
];

const filterTabs: { label: string; value: ProjectType }[] = [
  { label: "All Projects & Events", value: "all" },
  { label: "Events", value: "uiux" },
  { label: "Projects", value: "frontend" },
];

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.type === activeFilter,
  );

  return (
    <section id="projects" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
        ref={ref}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Events & </span>
            <span className="text-glow-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest events and projects, demonstrating my skills and creativity in action.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 sm:mb-12"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === tab.value
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative glass-card rounded-2xl overflow-hidden hover-glow"
              >
                {/* Project Image */}
                <div
                  className="aspect-video w-full relative overflow-hidden"
                  style={{ background: project.bgGradient }}
                >
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-100"
                  />

                  {/* Dark overlay for consistency */}
                  <div className="absolute inset-0 bg-background/40" />

                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.caseStudy && (
                      <Button
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                        className="bg-primary/90 hover:bg-primary text-primary-foreground"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Case Study
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-foreground/20 bg-background/50 hover:bg-background"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-foreground/20 bg-background/50 hover:bg-background"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Type Badge */}
                  <span
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
                      project.type === "uiux"
                        ? "bg-primary/90 text-primary-foreground"
                        : "bg-secondary/90 text-secondary-foreground"
                    }`}
                  >
                    {project.type === "uiux" ? "Events" : "Projects"}
                  </span>
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground border border-border/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
