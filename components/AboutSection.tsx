"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Code, Trophy, GraduationCap, Sparkles, Zap, Brain, Target, Heart, Coffee } from "lucide-react";
import { useRef } from "react";

// Simplified animation variants for better mobile performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Simplified floating animation for mobile performance
const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  },
};

const skillsData = [
  {
    category: "Languages",
    icon: Code,
    gradient: "from-purple-500 to-purple-600",
    skills: [
      { name: "JavaScript", color: "from-yellow-400 to-amber-500", level: 90 },
      { name: "TypeScript", color: "from-blue-500 to-indigo-600", level: 85 },
      { name: "Java", color: "from-red-500 to-rose-600", level: 80 },
      { name: "C", color: "from-gray-500 to-gray-700", level: 75 },
    ],
  },
  {
    category: "Frontend",
    icon: Sparkles,
    gradient: "from-cyan-500 to-indigo-600",
    skills: [
      { name: "React.js", color: "from-blue-400 to-cyan-500", level: 95 },
      { name: "Next.js", color: "from-gray-700 to-black", level: 90 },
      { name: "Tailwind", color: "from-cyan-400 to-cyan-600", level: 95 },
      { name: "Framer Motion", color: "from-pink-500 to-indigo-500", level: 85 },
      { name: "Three.js", color: "from-orange-500 to-pink-500", level: 70 },
      { name: "Redux", color: "from-violet-500 to-violet-700", level: 80 },
    ],
  },
  {
    category: "Backend & Database",
    icon: Zap,
    gradient: "from-green-500 to-teal-600",
    skills: [
      { name: "Node.js", color: "from-green-400 to-emerald-600", level: 85 },
      { name: "Express.js", color: "from-gray-600 to-slate-800", level: 80 },
      { name: "MongoDB", color: "from-green-500 to-emerald-700", level: 85 },
      { name: "PostgreSQL", color: "from-blue-600 to-blue-700", level: 75 },
      { name: "Firebase", color: "from-yellow-400 to-orange-500", level: 85 },
    ],
  },
  {
    category: "Tools & Design",
    icon: Brain,
    gradient: "from-pink-500 to-red-500",
    skills: [
      { name: "Figma", color: "from-purple-500 to-red-500", level: 90 },
      { name: "Git", color: "from-orange-500 to-red-600", level: 90 },
      { name: "Docker", color: "from-blue-500 to-indigo-600", level: 70 },
      { name: "AWS", color: "from-orange-400 to-orange-600", level: 65 },
    ],
  },
];

const statsData = [
  {
    number: "15+",
    label: "Projects Built",
    icon: Code,
    color: "from-blue-500 to-pink-500",
    description: "Full-stack applications",
    highlight: "Including AI-powered solutions",
  },
  {
    number: "2",
    label: "Hackathons Won",
    icon: Trophy,
    color: "from-yellow-500 to-red-500",
    description: "National competitions",
    highlight: "Hack Sangam & HTM 5.0",
  },
  {
    number: "8.5",
    label: "Academic GPA",
    icon: GraduationCap,
    color: "from-green-500 to-teal-500",
    description: "IES IPS Academy",
    highlight: "Computer Science",
  },
];

const personalityTraits = [
  { icon: Target, text: "Problem Solver", color: "from-blue-500 to-cyan-500" },
  { icon: Heart, text: "User-Focused", color: "from-pink-500 to-rose-500" },
  { icon: Coffee, text: "Always Learning", color: "from-amber-500 to-orange-500" },
];

// Button component fallback with proper TypeScript types
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
}

const Button: React.FC<ButtonProps> = ({ children, className = "", variant = "default", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background px-4 py-2";
  const variantClasses = variant === "outline" 
    ? "border border-input hover:bg-accent hover:text-accent-foreground" 
    : "bg-primary text-primary-foreground hover:bg-primary/90";
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default function AboutSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1, margin: "-10%" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Simplified transforms for better mobile performance
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full py-12 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-black dark:to-gray-900"
    >
      {/* Simplified background effects for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 -right-10 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20 dark:from-blue-400/30 dark:via-purple-400/15 dark:to-pink-400/30 rounded-full blur-3xl"
          style={{ y, opacity }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-48 md:w-80 h-48 md:h-80 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-indigo-500/20 dark:from-cyan-400/30 dark:via-blue-400/15 dark:to-indigo-400/30 rounded-full blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-25, 25]) }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-cyan-500/20 dark:from-emerald-400/30 dark:via-teal-400/15 dark:to-cyan-400/30 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-block mb-4 md:mb-6"
            variants={itemVariants}
          >
            <span className="inline-flex items-center gap-2 px-4 md:px-6 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/40 backdrop-blur-sm border border-blue-200 dark:border-blue-700/50 text-blue-700 dark:text-blue-300 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4" />
              About Me
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            My Creative{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-6"
            variants={itemVariants}
          >
            {personalityTraits.map((trait, index) => {
              const IconComponent = trait.icon;
              return (
                <motion.div
                  key={trait.text}
                  className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-600/50 shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <IconComponent className={`w-4 h-4 text-blue-500 dark:text-blue-400`} />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{trait.text}</span>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light max-w-3xl mx-auto leading-relaxed px-4"
            variants={itemVariants}
          >
            Crafting digital experiences with passion, precision, and a touch of magic ✨
          </motion.p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-600/50 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300">
                  <div className="mb-4 md:mb-6">
                    <div className={`w-12 md:w-16 h-12 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.color} p-0.5`}>
                      <div className="w-full h-full bg-white dark:bg-slate-800 rounded-xl md:rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-6 md:w-8 h-6 md:h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className={`text-3xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-base md:text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">{stat.label}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">{stat.description}</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">{stat.highlight}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bio Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Main bio card */}
          <motion.div
            className="lg:col-span-8 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-600/50 shadow-lg"
            variants={itemVariants}
          >
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700/50 rounded-full">
                <Brain className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Developer Story</span>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                <p>
                  I'm a <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">passionate full-stack developer</span> currently pursuing my Bachelor of Technology at <span className="font-semibold text-blue-600 dark:text-blue-400">IES IPS Academy</span> with a stellar GPA of <span className="font-semibold text-green-500 dark:text-green-400">8.5/10.0</span>.
                </p>
                
                <p>
                  I specialize in crafting <span className="font-semibold text-slate-800 dark:text-slate-100">responsive, accessible, and high-performance</span> web applications using cutting-edge technologies. My expertise spans from <span className="text-blue-500 dark:text-blue-400 font-medium">React & Next.js</span> to <span className="text-green-500 dark:text-green-400 font-medium">Node.js</span> and modern <span className="text-cyan-500 dark:text-cyan-400 font-medium">design systems</span>.
                </p>
                
                <p>
                  My competitive spirit shines through hackathons like <span className="font-semibold text-purple-500 dark:text-purple-400">Hack Sangam</span> and <span className="font-semibold text-blue-600 dark:text-blue-400">Hack The Mountain 5.0</span>, where I've won awards for innovative solutions that push the boundaries of what's possible.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Side cards */}
          <motion.div
            className="lg:col-span-4 space-y-4 md:space-y-6"
            variants={itemVariants}
          >
            <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50">
              <div className="text-center">
                <div className="text-2xl md:text-3xl mb-2">🚀</div>
                <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">Innovation Mindset</h4>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">Always exploring new technologies and creative solutions</p>
              </div>
            </div>

            <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700/50">
              <div className="text-center">
                <div className="text-2xl md:text-3xl mb-2">💡</div>
                <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">Problem Solver</h4>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">Turning complex challenges into elegant solutions</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 md:mb-20"
        >
          <motion.div
            className="text-center mb-12 md:mb-16"
            variants={itemVariants}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
              Technical{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Mastery
              </span>
            </h3>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
              A curated collection of technologies I use to craft exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {skillsData.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.category}
                  className="group"
                  variants={itemVariants}
                >
                  <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-600/50 shadow-lg h-full">
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                      <div className={`w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br ${category.gradient} p-0.5`}>
                        <div className="w-full h-full bg-white dark:bg-slate-800 rounded-xl md:rounded-2xl flex items-center justify-center">
                          <IconComponent className="w-5 md:w-6 h-5 md:h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <h4 className={`text-base md:text-lg font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                        {category.category}
                      </h4>
                    </div>

                    {/* Skills list */}
                    <div className="space-y-3 md:space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="group/skill">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">{skill.level}%</span>
                          </div>
                          
                          {/* Progress bar */}
                          <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <motion.div
                              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ 
                                duration: 1, 
                                delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                ease: "easeOut"
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <Button className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 hover:opacity-90 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 text-white px-6 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-xl md:rounded-2xl">
              <span className="flex items-center gap-2">
                View My Work 
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
            </Button>
            
            <Button
              variant="outline"
              className="border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700/50 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 px-6 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-xl md:rounded-2xl backdrop-blur-sm text-slate-700 dark:text-slate-200"
            >
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}