import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Dribbble, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
   { icon: Github, label: "GitHub", href: "https://github.com/JUMAIL-WM" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jumail/" },
  { icon: Dribbble, label: "Dribbble", href: "https://mvp.microsoft.com/en-US/studentambassadors/profile/87f84c24-7239-4057-b179-49add94b2b23" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 relative border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center">
          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="lg"
              className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 group"
            >
              <ArrowUp className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </motion.div>

          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold text-glow-gradient mb-6"
          >
            Mohammed Jumail
          </motion.a>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            © {new Date().getFullYear()}  . Made with
            <Heart className="w-4 h-4 text-primary fill-primary" />
            Mohammed Jumail.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
