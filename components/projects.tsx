"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Code2, Zap, ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  index: number;
  featured?: boolean;
}

function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
  index,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-3 left-3 z-20">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-primary to-purple-500 text-white rounded-full text-xs font-medium shadow-lg backdrop-blur-sm">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </div>
        </div>
      )}

      {/* Image Container */}
      <div className="relative overflow-hidden h-48 sm:h-52 md:h-56 lg:h-60">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Action Buttons - Desktop */}
        <div className="absolute top-3 right-3 hidden sm:flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-200 shadow-lg border border-white/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4 text-white" />
          </motion.a>
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-primary/90 backdrop-blur-md rounded-full hover:bg-primary transition-all duration-200 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-4 h-4 text-white" />
          </motion.a>
        </div>

        {/* Project Title Overlay - Mobile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:hidden">
          <h3 className="font-bold text-white text-lg mb-1">{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
        {/* Title - Desktop */}
        <motion.h3 
          className="hidden sm:block font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 text-lg md:text-xl lg:text-2xl"
          whileHover={{ x: 3 }}
        >
          {title}
        </motion.h3>
        
        {/* Description */}
        <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {tags.slice(0, 4).map((tag, tagIndex) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md border border-primary/20 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md">
              +{tags.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons - Mobile */}
        <div className="flex gap-3 sm:hidden">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-muted hover:bg-muted/80 rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            <ArrowUpRight className="w-4 h-4" />
            Live
          </a>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}

const projects = [
  {
    title: "EV Charger Locator & Booking System",
    description:
      "Built a comprehensive full-stack web application to locate and book EV charging stations. Features include map-based search with real-time availability tracking, seamless booking system, and powerful admin dashboard.",
    tags: ["Vue.js", "Node.js", "Express", "MongoDB", "Leaflet.js", "TailwindCSS"],
    imageUrl: "/ev-charger.png", 
    githubUrl: "https://github.com/RaviGauta1121/EV-Charger", 
    liveUrl: "https://ev-charger-ybd8.vercel.app/",
    featured: true,
  },
  {
    title: "Study Buddy",
    description:
      "A comprehensive student platform featuring resume maker, meeting scheduler, Pomodoro timer, and collaborative study tools built with modern web technologies.",
    tags: ["Next.js", "MongoDB", "Auth0", "TinyMCE", "TailwindCSS"],
    imageUrl: "/study-buddy.png",
    githubUrl: "https://github.com/RaviGauta1121",
    liveUrl: "https://studybuddy-woad.vercel.app/",
    featured: true,
  },
  {
    title: "Bad Talk Website",
    description:
      "Developed an interactive and responsive React website for BAD Talks. Integrated Firebase for efficient data storage and real-time updates.",
    tags: ["React.js", "Firebase", "CSS", "JavaScript"],
    imageUrl: "/bad-talk.png",
    githubUrl: "https://github.com/RaviGauta1121",
    liveUrl: "https://bad-talks.iesipsacademystudentclubs.org/",
  },
  {
    title: "Wanderlust",
    description:
      "An Airbnb-inspired platform enabling users to list and book accommodations. Implemented user authentication, map integration, and dynamic listings.",
    tags: ["Node.js", "MongoDB", "EJS", "TailwindCSS", "Express"],
    imageUrl: "/wanderlust.png",
    githubUrl: "https://github.com/RaviGauta1121",
    liveUrl: "https://stayfinder-05xq.onrender.com/listings",
  },
  {
    title: "Fit-Assistant",
    description:
      "Built a responsive fitness and health tracker with modules for fitness tracking, nutrition monitoring, and personalized health insights.",
    tags: ["React.js", "API Integration", "TailwindCSS", "Chart.js"],
    imageUrl: "/fit-assistant.png",
    githubUrl: "https://github.com/RaviGauta1121",
    liveUrl: "https://starlit-seahorse-399d1d.netlify.app/",
  },
  {
    title: "Biofuel Website",
    description:
      "Developed a professional website for Ganesh Biofuel showcasing their services with modern design and cloud-based image management.",
    tags: ["Node.js", "MongoDB", "EJS", "TailwindCSS", "Cloudinary"],
    imageUrl: "/biofuel.png",
    githubUrl: "https://github.com/RaviGauta1121",
    liveUrl: "https://biofuel.vercel.app/qualitybio.in/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background" />
      
      {/* Animated Background Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-secondary/5 rounded-full blur-3xl opacity-60" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="inline-block mb-4 sm:mb-6"
            variants={fadeIn}
            custom={0}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
              <Code2 className="w-4 h-4" />
              Portfolio Showcase
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6"
            variants={fadeIn}
            custom={1}
          >
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Featured
            </span>{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          
          <motion.p 
            className="max-w-3xl mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed px-4 sm:px-0"
            variants={fadeIn}
            custom={2}
          >
            A curated collection of my recent work showcasing modern web development, 
            innovative solutions, and creative problem-solving across various domains.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Mobile: Single Column, Tablet: 2 Columns, Desktop: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                custom={index}
                className={`${
                  project.featured 
                    ? "md:col-span-2 lg:col-span-2" 
                    : ""
                }`}
              >
                <ProjectCard 
                  {...project} 
                  index={index}
                  featured={project.featured}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/RaviGauta1121"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-purple-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            View More on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}