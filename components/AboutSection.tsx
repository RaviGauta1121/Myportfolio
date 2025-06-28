"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Trophy, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

// Animation variants matching Hero section
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
      { name: "TypeScript", color: "from-blue-500 to-blue-700" },
      { name: "Java", color: "from-red-400 to-red-600" },
      { name: "C", color: "from-gray-400 to-gray-600" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", color: "from-blue-400 to-blue-600" },
      {
        name: "Next.js",
        color: "from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-100",
      },
      { name: "HTML", color: "from-orange-400 to-orange-600" },
      { name: "CSS", color: "from-blue-500 to-blue-700" },
      { name: "Tailwind CSS", color: "from-cyan-400 to-cyan-600" },
      { name: "Bootstrap", color: "from-purple-400 to-purple-600" },
      { name: "Shadcn/UI", color: "from-slate-400 to-slate-600" },
      { name: "Redux", color: "from-violet-400 to-violet-600" },
      { name: "Chart.js", color: "from-yellow-400 to-yellow-600" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", color: "from-green-400 to-green-600" },
      { name: "Express.js", color: "from-gray-500 to-gray-700" },
      { name: "MongoDB", color: "from-green-500 to-green-700" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", color: "from-orange-500 to-red-500" },
      { name: "GitHub", color: "from-gray-600 to-gray-800" },
      { name: "Netlify", color: "from-teal-400 to-teal-600" },
      { name: "UI/UX Design", color: "from-pink-400 to-pink-600" },
    ],
  },
  {
    category: "Hardware & IoT",
    skills: [
      { name: "Arduino", color: "from-cyan-500 to-blue-500" },
    ],
  },
];

const statsData = [
  {
    number: "15+",
    label: "Projects Built",
    icon: Code,
    color: "from-primary to-purple-500",
  },
  {
    number: "2",
    label: "Hackathons Won",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
  },
  {
    number: "8.5",
    label: "Academic GPA",
    icon: GraduationCap,
    color: "from-green-500 to-emerald-500",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-20 md:py-32 lg:py-24 overflow-hidden"
    >
      {/* Decorative background elements - matching Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-block mb-6"
              variants={fadeIn}
              custom={0}
            >
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full shadow-sm">
                About Me
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none mb-6"
              variants={fadeIn}
              custom={1}
            >
              My{" "}
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Journey
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground font-light max-w-3xl mx-auto"
              variants={fadeIn}
              custom={2}
            >
              Passionate about creating digital experiences that make a
              difference
            </motion.p>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            className="grid gap-8 lg:grid-cols-2 lg:gap-16 mb-20"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content */}
            <div className="space-y-6">
              <motion.p
                className="text-muted-foreground md:text-lg leading-relaxed"
                variants={fadeIn}
                custom={3}
              >
                I'm a{" "}
                <span className="font-semibold text-foreground">
                  passionate full-stack developer
                </span>{" "}
                currently pursuing my Bachelor of Technology at{" "}
                <span className="font-semibold text-primary">
                  IES IPS Academy
                </span>{" "}
                with a stellar GPA of{" "}
                <span className="font-semibold text-green-600 dark:text-green-400">
                  8.5/10.0
                </span>
                .
              </motion.p>

              <motion.p
                className="text-muted-foreground md:text-lg leading-relaxed"
                variants={fadeIn}
                custom={4}
              >
                I specialize in crafting responsive, accessible, and
                high-performance web applications using modern technologies like{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  React
                </span>
                ,<span className="font-semibold text-foreground"> Next.js</span>
                ,
                <span className="font-semibold text-green-600 dark:text-green-400">
                  {" "}
                  Node.js
                </span>
                , and
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                  {" "}
                  Tailwind CSS
                </span>
                .
              </motion.p>

              <motion.p
                className="text-muted-foreground md:text-lg leading-relaxed"
                variants={fadeIn}
                custom={5}
              >
                My competitive spirit shines through hackathons like{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  Hack Sangam
                </span>{" "}
                and
                <span className="font-semibold text-primary">
                  {" "}
                  Hack The Mountain 5.0
                </span>
                , where I've won awards for innovative solutions.
              </motion.p>
            </div>

            {/* Right Content - Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
              variants={fadeIn}
              custom={6}
            >
              {statsData.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="text-center p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:scale-105"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mb-4">
                      <IconComponent className="w-8 h-8 mx-auto text-primary" />
                    </div>
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <motion.div
              className="text-center mb-12"
              variants={fadeIn}
              custom={7}
            >
              <h3 className="text-3xl font-bold mb-4">
                Technical{" "}
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Skills
                </span>
              </h3>
              <p className="text-muted-foreground">
                Technologies I work with to bring ideas to life
              </p>
            </motion.div>

            <div className="space-y-12">
              {skillsData.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  variants={fadeIn}
                  custom={8 + categoryIndex}
                >
                  <h4 className="text-xl font-semibold mb-6 text-center">
                    <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                      {category.category}
                    </span>
                  </h4>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="relative p-4 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 group overflow-hidden"
                        whileHover={{ y: -3, scale: 1.02 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                      >
                        {/* Gradient background on hover */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        />
                        
                        <div className="relative z-10 text-center">
                          <span className="font-medium text-foreground text-sm">
                            {skill.name}
                          </span>
                        </div>
                        
                        {/* Subtle accent line */}
                        <motion.div
                          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: 0.8,
                            delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut",
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            variants={fadeIn}
            custom={15}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-flex flex-col sm:flex-row gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Button className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 shadow-md transition-all duration-300 hover:shadow-lg text-white px-8 py-3">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="/RaviResume22.pdf" download>
                <Button
                  variant="outline"
                  className="border-2 hover:bg-primary/5 transition-all duration-300 px-8 py-3"
                >
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}