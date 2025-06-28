"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Code, Trophy, GraduationCap, Sparkles, Zap, Brain, Target, Heart, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

// Fixed floatingVariants to use proper animation object instead of variants
const floatingAnimation = {
  y: [-20, 20, -20],
  rotate: [0, 5, -5, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  },
};

const skillsData = [
  {
    category: "Languages",
    icon: Code,
    gradient: "from-purple-500 via-violet-500 to-purple-600",
    skills: [
      { name: "JavaScript", color: "from-yellow-400 via-yellow-500 to-amber-500", level: 90 },
      { name: "TypeScript", color: "from-blue-500 via-blue-600 to-indigo-600", level: 85 },
      { name: "Java", color: "from-red-500 via-red-600 to-rose-600", level: 80 },
      { name: "C", color: "from-gray-500 via-slate-600 to-gray-700", level: 75 },
    ],
  },
  {
    category: "Frontend",
    icon: Sparkles,
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    skills: [
      { name: "React.js", color: "from-blue-400 via-blue-500 to-cyan-500", level: 95 },
      { name: "Next.js", color: "from-gray-700 via-gray-800 to-black", level: 90 },
      { name: "Tailwind", color: "from-cyan-400 via-teal-500 to-cyan-600", level: 95 },
      { name: "Framer Motion", color: "from-pink-500 via-purple-500 to-indigo-500", level: 85 },
      { name: "Three.js", color: "from-orange-500 via-red-500 to-pink-500", level: 70 },
      { name: "Redux", color: "from-violet-500 via-purple-600 to-violet-700", level: 80 },
    ],
  },
  {
    category: "Backend & Database",
    icon: Zap,
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    skills: [
      { name: "Node.js", color: "from-green-400 via-green-500 to-emerald-600", level: 85 },
      { name: "Express.js", color: "from-gray-600 via-gray-700 to-slate-800", level: 80 },
      { name: "MongoDB", color: "from-green-500 via-green-600 to-emerald-700", level: 85 },
      { name: "PostgreSQL", color: "from-blue-600 via-indigo-600 to-blue-700", level: 75 },
    ],
  },
  {
    category: "Tools & Design",
    icon: Brain,
    gradient: "from-pink-500 via-rose-500 to-red-500",
    skills: [
      { name: "Figma", color: "from-purple-500 via-pink-500 to-red-500", level: 90 },
      { name: "Git", color: "from-orange-500 via-red-500 to-red-600", level: 90 },
      { name: "Docker", color: "from-blue-500 via-blue-600 to-indigo-600", level: 70 },
      { name: "AWS", color: "from-orange-400 via-yellow-500 to-orange-600", level: 65 },
    ],
  },
];

const statsData = [
  {
    number: "15+",
    label: "Projects Built",
    icon: Code,
    color: "from-blue-500 via-purple-500 to-pink-500",
    description: "Full-stack applications",
    highlight: "Including AI-powered solutions",
  },
  {
    number: "2",
    label: "Hackathons Won",
    icon: Trophy,
    color: "from-yellow-500 via-orange-500 to-red-500",
    description: "National competitions",
    highlight: "Hack Sangam & HTM 5.0",
  },
  {
    number: "8.5",
    label: "Academic GPA",
    icon: GraduationCap,
    color: "from-green-500 via-emerald-500 to-teal-500",
    description: "IES IPS Academy",
    highlight: "Computer Science",
  },
];

const personalityTraits = [
  { icon: Target, text: "Problem Solver", color: "from-blue-500 to-cyan-500" },
  { icon: Heart, text: "User-Focused", color: "from-pink-500 to-rose-500" },
  { icon: Coffee, text: "Always Learning", color: "from-amber-500 to-orange-500" },
];

export default function AboutSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full py-20 md:py-32 lg:py-24 overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 -right-10 w-96 h-96 bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20 rounded-full blur-3xl"
          style={{ y, opacity }}
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-indigo-500/20 rounded-full blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-cyan-500/20 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <motion.div 
        className="container px-4 md:px-6 relative z-10"
        style={{ scale, opacity }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="inline-block mb-6"
              variants={itemVariants}
            >
              <span className="inline-flex items-center gap-2 px-6 py-2 text-sm font-medium bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-primary/20 text-primary rounded-full shadow-lg">
                <Sparkles className="w-4 h-4" />
                About Me
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl/none mb-8"
              variants={itemVariants}
            >
              My Creative{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Journey
              </span>
            </motion.h2>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-6"
              variants={itemVariants}
            >
              {personalityTraits.map((trait, index) => {
                const IconComponent = trait.icon;
                return (
                  <motion.div
                    key={trait.text}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <IconComponent className={`w-4 h-4 bg-gradient-to-r ${trait.color} bg-clip-text text-transparent`} />
                    <span className="text-sm font-medium">{trait.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.p
              className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Crafting digital experiences with passion, precision, and a touch of magic ✨
            </motion.p>
          </motion.div>

          {/* Enhanced Stats Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {statsData.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="relative p-8 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 overflow-hidden">
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      animate={{
                        background: [
                          `linear-gradient(45deg, ${stat.color.split(' ')[0]}, ${stat.color.split(' ')[2]})`,
                          `linear-gradient(225deg, ${stat.color.split(' ')[2]}, ${stat.color.split(' ')[0]})`,
                          `linear-gradient(45deg, ${stat.color.split(' ')[0]}, ${stat.color.split(' ')[2]})`
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    {/* Floating icon */}
                    <motion.div
                      className="mb-6 relative z-10"
                      animate={{ 
                        y: [-5, 5, -5],
                        rotate: [0, 5, -5, 0] 
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        delay: index * 0.5 
                      }}
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} p-0.5`}>
                        <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                    </motion.div>
                    
                    <div className="relative z-10">
                      <motion.div
                        className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-lg font-semibold mb-2">{stat.label}</div>
                      <div className="text-sm text-muted-foreground mb-1">{stat.description}</div>
                      <div className="text-xs text-primary font-medium">{stat.highlight}</div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-full blur-2xl" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 rounded-full blur-xl" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bio Section with Bento Layout */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Main bio card */}
            <motion.div
              className="lg:col-span-8 p-8 rounded-3xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border border-border/50 relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="relative z-10 space-y-6">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full"
                  animate={{ x: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Brain className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Developer Story</span>
                </motion.div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    I'm a <span className="font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">passionate full-stack developer</span> currently pursuing my Bachelor of Technology at <span className="font-semibold text-primary">IES IPS Academy</span> with a stellar GPA of <span className="font-semibold text-green-500">8.5/10.0</span>.
                  </p>
                  
                  <p>
                    I specialize in crafting <span className="font-semibold text-foreground">responsive, accessible, and high-performance</span> web applications using cutting-edge technologies. My expertise spans from <span className="text-blue-500 font-medium">React & Next.js</span> to <span className="text-green-500 font-medium">Node.js</span> and modern <span className="text-cyan-500 font-medium">design systems</span>.
                  </p>
                  
                  <p>
                    My competitive spirit shines through hackathons like <span className="font-semibold text-purple-500">Hack Sangam</span> and <span className="font-semibold text-primary">Hack The Mountain 5.0</span>, where I've won awards for innovative solutions that push the boundaries of what's possible.
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-xl" />
            </motion.div>

            {/* Side cards */}
            <motion.div
              className="lg:col-span-4 space-y-6"
              variants={itemVariants}
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 border border-primary/20">
                <div className="text-center">
                  <motion.div
                    className="text-3xl mb-2"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🚀
                  </motion.div>
                  <h4 className="font-semibold mb-2">Innovation Mindset</h4>
                  <p className="text-sm text-muted-foreground">Always exploring new technologies and creative solutions</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5 border border-green-500/20">
                <div className="text-center">
                  <motion.div
                    className="text-3xl mb-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    💡
                  </motion.div>
                  <h4 className="font-semibold mb-2">Problem Solver</h4>
                  <p className="text-sm text-muted-foreground">Turning complex challenges into elegant solutions</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Skills Section with Masonry Layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-20"
          >
            <motion.div
              className="text-center mb-16"
              variants={itemVariants}
            >
              <h3 className="text-4xl font-bold mb-6">
                Technical{" "}
                <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Mastery
                </span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A curated collection of technologies I use to craft exceptional digital experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {skillsData.map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={category.category}
                    className="group"
                    variants={itemVariants}
                    custom={categoryIndex}
                  >
                    <div className="p-6 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 h-full relative overflow-hidden">
                      {/* Category header */}
                      <div className="flex items-center gap-3 mb-6">
                        <motion.div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                        </motion.div>
                        <h4 className={`text-lg font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                          {category.category}
                        </h4>
                      </div>

                      {/* Skills grid */}
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            className="group/skill"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                            whileHover={{ x: 4 }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-xs text-muted-foreground">{skill.level}%</span>
                            </div>
                            
                            {/* Animated progress bar */}
                            <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ 
                                  duration: 1.5, 
                                  delay: categoryIndex * 0.2 + skillIndex * 0.1,
                                  ease: "easeOut"
                                }}
                              />
                              <motion.div
                                className="absolute inset-y-0 left-0 bg-white/20 rounded-full"
                                animate={{ 
                                  x: ['-100%', `${skill.level - 10}%`, `${skill.level}%`],
                                  opacity: [0, 1, 0]
                                }}
                                transition={{ 
                                  duration: 2, 
                                  delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1,
                                  ease: "easeInOut"
                                }}
                                style={{ width: '20%' }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Decorative background */}
                      <motion.div
                        className={`absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-tl ${category.gradient} opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity duration-500`}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div
            className="text-center"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="inline-flex flex-col sm:flex-row gap-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:opacity-90 shadow-xl transition-all duration-300 hover:shadow-2xl text-white px-10 py-4 text-lg rounded-2xl relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
              
              <motion.a 
                href="/RaviResume22.pdf" 
                download
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="border-2 hover:bg-primary/5 transition-all duration-300 px-10 py-4 text-lg rounded-2xl backdrop-blur-sm"
                >
                  Download Resume
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}