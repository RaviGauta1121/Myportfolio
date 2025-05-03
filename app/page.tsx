"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { ContactForm } from "@/components/contact-form";
import { Navbar } from "@/components/navbar";

export default function Home() {
  // Enhanced animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1], // Custom cubic bezier for smoother animation
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const slideIn = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/95">
      <Navbar />

      {/* Hero Section - Enhanced with better animations and gradients */}
      <section className="relative w-full py-20 md:py-32 lg:py-24 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-70" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-60" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_600px]">
            <motion.div
              className="flex flex-col justify-center space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full shadow-sm">
                  Full Stack Developer
                </span>
              </motion.div>
              <motion.div
                className="space-y-3"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.h1
                  className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none"
                  variants={fadeIn}
                  custom={0}
                >
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    Ravi Gautam
                  </span>
                </motion.h1>
                <motion.p
                  className="text-xl text-muted-foreground font-light"
                  variants={fadeIn}
                  custom={1}
                >
                  Creating beautiful digital experiences
                </motion.p>
              </motion.div>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl font-light leading-relaxed"
                variants={fadeIn}
                custom={2}
                initial="hidden"
                animate="visible"
              >
                I’m a full-stack developer specializing in building responsive,
                accessible, and high-performance web applications using modern
                technologies like React, Next.js, Node.js, and Tailwind CSS.
                With a strong command of both front-end and back-end
                development, I focus on creating seamless user experiences and
                robust, scalable systems. Currently, I’m pursuing my Bachelor of
                Technology at IES IPS Academy, where I actively sharpen my
                skills through practical learning and collaboration.
              </motion.p>
              <motion.div
                className="flex flex-col gap-4 min-[400px]:flex-row"
                variants={fadeIn}
                custom={3}
                initial="hidden"
                animate="visible"
              >
                <Link href="#projects">
                  <Button className="w-full min-[400px]:w-auto bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 shadow-md transition-all duration-300 hover:shadow-lg text-white px-6 py-2">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button
                    variant="outline"
                    className="w-full min-[400px]:w-auto border-2 hover:bg-primary/5 transition-all duration-300"
                  >
                    Contact Me
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                className="flex gap-4"
                variants={fadeIn}
                custom={4}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="https://github.com/RaviGauta1121"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 transition-all duration-300"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ravigautam02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.instagram.com/ravi_gautamm_?igsh=MWIzcW9zN3Zza3Fjbg=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 transition-all duration-300"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <Link href="mailto:rvgautam59@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 transition-all duration-300"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Enhanced Hero Image with more sophisticated decorative elements */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Enhanced decorative elements with more refined animation */}
              <motion.div
                className="absolute w-64 h-64 bg-secondary/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute w-48 h-48 bg-primary/30 rounded-full blur-3xl -translate-x-20 translate-y-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute w-40 h-40 bg-accent/30 rounded-full blur-3xl translate-x-20 -translate-y-10"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 9,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              />

              {/* Enhanced image container with better animation */}
              <motion.div
                className="relative z-10"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 80,
                }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px]">
                  {/* Enhanced border decoration with smoother animation */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary/40"
                    animate={{
                      rotate: 360,
                      borderWidth: ["2px", "3px", "2px"],
                      boxShadow: [
                        "0 0 5px rgba(124, 58, 237, 0.1)",
                        "0 0 12px rgba(124, 58, 237, 0.3)",
                        "0 0 5px rgba(124, 58, 237, 0.1)",
                      ],
                    }}
                    transition={{
                      rotate: {
                        duration: 30,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                      borderWidth: {
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      },
                      boxShadow: {
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      },
                    }}
                  />

                  {/* Enhanced image with better border and shadow */}
                  <div className="absolute inset-3 overflow-hidden rounded-full border-4 border-white dark:border-gray-900 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 opacity-50" />
                    <Image
                      src="/Ravi-profile.jpg"
                      alt="Ravi Gautam speaking at an event"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Enhanced floating dots decoration with better positioning and effects */}
                  <motion.div
                    className="absolute w-5 h-5 bg-gradient-to-br from-primary to-purple-500 rounded-full shadow-md"
                    style={{ top: "8%", right: "5%" }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.7, 1, 0.7],
                      boxShadow: [
                        "0 0 0 rgba(124, 58, 237, 0.4)",
                        "0 0 10px rgba(124, 58, 237, 0.6)",
                        "0 0 0 rgba(124, 58, 237, 0.4)",
                      ],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute w-4 h-4 bg-gradient-to-br from-secondary to-cyan-400 rounded-full shadow-md"
                    style={{ bottom: "15%", right: "12%" }}
                    animate={{
                      y: [0, 12, 0],
                      opacity: [0.7, 1, 0.7],
                      boxShadow: [
                        "0 0 0 rgba(6, 182, 212, 0.4)",
                        "0 0 10px rgba(6, 182, 212, 0.6)",
                        "0 0 0 rgba(6, 182, 212, 0.4)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute w-6 h-6 bg-gradient-to-br from-accent to-amber-400 rounded-full shadow-md"
                    style={{ bottom: "8%", left: "10%" }}
                    animate={{
                      y: [0, -18, 0],
                      opacity: [0.7, 1, 0.7],
                      boxShadow: [
                        "0 0 0 rgba(245, 158, 11, 0.4)",
                        "0 0 10px rgba(245, 158, 11, 0.6)",
                        "0 0 0 rgba(245, 158, 11, 0.4)",
                      ],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 1,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced with better background and animations */}
      <section id="about" className="w-full py-16 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-muted/20 opacity-80" />
        <div className="container px-4 md:px-6 relative z-10">
          {/* <motion.div
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-5 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block mb-2">
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full shadow-sm">
                About Me
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              My Background
            </h2>
            <motion.p
              className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm a passionate full-stack web developer currently pursuing my
              Bachelor of Technology at IES IPS Academy with a GPA of 8.5/10.0.
              I have a strong focus on building intuitive user interfaces and
              robust back-end systems using modern technologies like React,
              Next.js, Node.js, and Tailwind CSS. I enjoy crafting seamless,
              accessible, and responsive web applications that deliver great
              user experiences and reliable performance.
            </motion.p>
            <motion.p
              className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              My journey in web development began during my academic years,
              where I developed strong time management and problem-solving
              skills. I've participated in hackathons like Hack Sangam in Indore
              and Hack The Mountain 5.0 at Marwadi University Rajkot, where my
              team won for building innovative solutions to real-world problems.
              These experiences have deepened my passion for creating impactful
              digital solutions
            </motion.p>
          </motion.div> */}
          {/* Enhanced Stylish About Me Section */}
<motion.div
  className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center relative py-16"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
  viewport={{ once: true, margin: "-100px" }}
>
  {/* Abstract Background Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div 
      className="absolute top-10 left-8 w-24 h-24 rounded-full bg-primary/10 blur-3xl"
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }}
      transition={{ 
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    />
    <motion.div 
      className="absolute bottom-10 right-8 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl"
      animate={{ 
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{ 
        duration: 7,
        repeat: Infinity,
        repeatType: "reverse",
        delay: 1
      }}
    />
    <motion.div 
      className="absolute top-1/2 left-1/3 w-40 h-20 rounded-full bg-purple-500/10 blur-3xl"
      animate={{ 
        scale: [1, 1.4, 1],
        opacity: [0.2, 0.3, 0.2]
      }}
      transition={{ 
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        delay: 2
      }}
    />
  </div>
  
  {/* Badge */}
  <motion.div 
    className="inline-block mb-2"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <span className="inline-block px-5 py-2 text-sm font-medium bg-gradient-to-r from-primary/90 to-primary/70 text-white rounded-full shadow-lg shadow-primary/20 border border-primary/20">
      About Me
    </span>
  </motion.div>
  
  {/* Heading with Decorative Elements */}
  <div className="relative">
    <motion.div
      className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 blur-xl opacity-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.5 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    />
    <motion.h2 
      className="relative text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
    >
      My Background
    </motion.h2>
  </div>
  
  {/* Custom Divider */}
  <motion.div 
    className="flex items-center gap-2 my-1"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    viewport={{ once: true }}
  >
    <div className="h-px w-6 bg-gradient-to-r from-transparent to-primary/50"></div>
    <div className="h-1 w-1 rounded-full bg-primary/70"></div>
    <div className="h-px w-16 bg-gradient-to-r from-primary/50 to-blue-500/50"></div>
    <div className="h-1 w-1 rounded-full bg-blue-500/70"></div>
    <div className="h-px w-6 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
  </motion.div>
  
  {/* First Paragraph */}
  <motion.p
    className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light leading-relaxed backdrop-blur-sm px-6 py-4 rounded-lg border border-white/5 bg-white/5"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
  >
    I'm a <span className="font-medium text-primary">passionate full-stack web developer</span> currently pursuing my
    Bachelor of Technology at <span className="font-medium">IES IPS Academy</span> with a GPA of <span className="font-medium">8.5/10.0</span>.
    I have a strong focus on building intuitive user interfaces and
    robust back-end systems using modern technologies like <span className="font-medium text-blue-400">React</span>,
    <span className="font-medium text-blue-400"> Next.js</span>, <span className="font-medium text-green-400">Node.js</span>, and <span className="font-medium text-blue-400">Tailwind CSS</span>. I enjoy crafting seamless,
    accessible, and responsive web applications that deliver great
    user experiences and reliable performance.
  </motion.p>
  
  {/* Second Paragraph */}
  <motion.p
    className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light leading-relaxed backdrop-blur-sm px-6 py-4 rounded-lg border border-white/5 bg-white/5"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    viewport={{ once: true }}
  >
    My journey in web development began during my academic years,
    where I developed strong <span className="font-medium">time management</span> and <span className="font-medium">problem-solving</span>
    skills. I've participated in hackathons like <span className="font-medium text-purple-400">Hack Sangam</span> in Indore
    and <span className="font-medium text-purple-400">Hack The Mountain 5.0</span> at Marwadi University Rajkot, where my
    team won for building innovative solutions to real-world problems.
    These experiences have deepened my passion for creating impactful
    digital solutions.
  </motion.p>
  
  {/* Call to Action Button */}
  <motion.div
    className="mt-2"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    viewport={{ once: true }}
  >
   
  </motion.div>
</motion.div>
          {/* <motion.div
            className="mx-auto mt-16 max-w-[62rem]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="mb-8 text-center text-2xl font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              My Skills
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Express.js",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "Node.js",
                "MongoDB",
                "SQL",
                "Firebase",
                
                "Bootstrap",
                "Chart.js",
                "Shadcn/UI",
                "UI/UX Design",
                "Java",
                "C",
              ].map((skill, index) => (
                <motion.div key={skill} variants={fadeIn} custom={index * 0.05}>
                  <SkillBadge name={skill} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div> */}
          {/* Enhanced Interactive Skills Section with Categories */}
<motion.div
  className="mx-auto mt-16 max-w-[62rem]"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  viewport={{ once: true, margin: "-100px" }}
>
  <h3 className="mb-10 text-center text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
    My Skills
  </h3>
  
  {/* Programming Languages */}
  <div className="mb-12 relative">
    <motion.div 
      className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-xl opacity-75"
      animate={{ 
        backgroundPosition: ['0% 0%', '100% 100%'],
        opacity: [0.5, 0.8, 0.5]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity,
        repeatType: "reverse" 
      }}
    />
    <motion.div
      className="relative bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h4 className="mb-5 text-xl font-semibold text-center bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
        Programming Languages
      </h4>
      <motion.div
        className="flex flex-wrap justify-center gap-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {["JavaScript", "TypeScript", "Java", "C"].map((skill, index) => (
          <motion.div 
            key={skill} 
            variants={fadeIn} 
            custom={index * 0.05}
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              transition: { type: "spring", stiffness: 400 }
            }}
          >
            <div className="px-4 py-2.5 rounded-lg font-medium bg-gradient-to-br from-blue-600/80 to-purple-600/80 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-purple-900/20 border border-white/10 text-white transition-all duration-300">
              {skill}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>
  
  {/* Frontend Development */}
  <div className="mb-12 relative">
    <motion.div 
      className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-600/20 to-emerald-600/20 blur-xl opacity-75"
      animate={{ 
        backgroundPosition: ['0% 0%', '100% 100%'],
        opacity: [0.5, 0.8, 0.5]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity,
        repeatType: "reverse",
        delay: 1
      }}
    />
    <motion.div
      className="relative bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h4 className="mb-5 text-xl font-semibold text-center bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
        Frontend Development
      </h4>
      <motion.div
        className="flex flex-wrap justify-center gap-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Shadcn/UI", "Redux", "Chart.js"].map((skill, index) => (
          <motion.div 
            key={skill} 
            variants={fadeIn} 
            custom={index * 0.05}
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              transition: { type: "spring", stiffness: 400 }
            }}
          >
            <div className="px-4 py-2.5 rounded-lg font-medium bg-gradient-to-br from-cyan-600/80 to-emerald-600/80 hover:from-cyan-500 hover:to-emerald-500 shadow-lg shadow-emerald-900/20 border border-white/10 text-white transition-all duration-300">
              {skill}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>
  
  {/* Backend Development */}
  <div className="mb-12 relative">
    <motion.div 
      className="absolute -inset-1 rounded-lg bg-gradient-to-r from-amber-600/20 to-red-600/20 blur-xl opacity-75"
      animate={{ 
        backgroundPosition: ['0% 0%', '100% 100%'],
        opacity: [0.5, 0.8, 0.5]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity,
        repeatType: "reverse",
        delay: 2
      }}
    />
    <motion.div
      className="relative bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h4 className="mb-5 text-xl font-semibold text-center bg-gradient-to-r from-amber-300 to-red-300 bg-clip-text text-transparent">
        Backend Development
      </h4>
      <motion.div
        className="flex flex-wrap justify-center gap-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {["Node.js", "Express.js"].map((skill, index) => (
          <motion.div 
            key={skill} 
            variants={fadeIn} 
            custom={index * 0.05}
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              transition: { type: "spring", stiffness: 400 }
            }}
          >
            <div className="px-4 py-2.5 rounded-lg font-medium bg-gradient-to-br from-amber-600/80 to-red-600/80 hover:from-amber-500 hover:to-red-500 shadow-lg shadow-red-900/20 border border-white/10 text-white transition-all duration-300">
              {skill}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>
  
  {/* Databases/Servers */}
  <div className="mb-12 relative">
    <motion.div 
      className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-600/20 to-teal-600/20 blur-xl opacity-75"
      animate={{ 
        backgroundPosition: ['0% 0%', '100% 100%'],
        opacity: [0.5, 0.8, 0.5]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity,
        repeatType: "reverse",
        delay: 3
      }}
    />
    <motion.div
      className="relative bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h4 className="mb-5 text-xl font-semibold text-center bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">
        Databases/Servers
      </h4>
      <motion.div
        className="flex flex-wrap justify-center gap-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {["MongoDB", "SQL", "MySQL", "Firebase"].map((skill, index) => (
          <motion.div 
            key={skill} 
            variants={fadeIn} 
            custom={index * 0.05}
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              transition: { type: "spring", stiffness: 400 }
            }}
          >
            <div className="px-4 py-2.5 rounded-lg font-medium bg-gradient-to-br from-green-600/80 to-teal-600/80 hover:from-green-500 hover:to-teal-500 shadow-lg shadow-teal-900/20 border border-white/10 text-white transition-all duration-300">
              {skill}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>
  
  {/* Platform/Tools */}
  <div className="mb-12 relative">
    <motion.div 
      className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-600/20 to-pink-600/20 blur-xl opacity-75"
      animate={{ 
        backgroundPosition: ['0% 0%', '100% 100%'],
        opacity: [0.5, 0.8, 0.5]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity,
        repeatType: "reverse",
        delay: 4
      }}
    />
    <motion.div
      className="relative bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h4 className="mb-5 text-xl font-semibold text-center bg-gradient-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent">
        Platform/Tools
      </h4>
      <motion.div
        className="flex flex-wrap justify-center gap-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {["Git", "GitHub", "Netlify", "UI/UX Design"].map((skill, index) => (
          <motion.div 
            key={skill} 
            variants={fadeIn} 
            custom={index * 0.05}
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              transition: { type: "spring", stiffness: 400 }
            }}
          >
            <div className="px-4 py-2.5 rounded-lg font-medium bg-gradient-to-br from-indigo-600/80 to-pink-600/80 hover:from-indigo-500 hover:to-pink-500 shadow-lg shadow-pink-900/20 border border-white/10 text-white transition-all duration-300">
              {skill}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>
  
  {/* Hardware/Embedded System */}
  <div className="mb-8 relative">
    <motion.div 
      className="absolute -inset-1 rounded-lg bg-gradient-to-r from-orange-600/20 to-yellow-600/20 blur-xl opacity-75"
      animate={{ 
        backgroundPosition: ['0% 0%', '100% 100%'],
        opacity: [0.5, 0.8, 0.5]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity,
        repeatType: "reverse",
        delay: 5
      }}
    />
    <motion.div
      className="relative bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/10"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h4 className="mb-5 text-xl font-semibold text-center bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
        Hardware/Embedded System
      </h4>
      <motion.div
        className="flex flex-wrap justify-center gap-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {["Arduino"].map((skill, index) => (
          <motion.div 
            key={skill} 
            variants={fadeIn} 
            custom={index * 0.05}
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              transition: { type: "spring", stiffness: 400 }
            }}
          >
            <div className="px-4 py-2.5 rounded-lg font-medium bg-gradient-to-br from-orange-600/80 to-yellow-600/80 hover:from-orange-500 hover:to-yellow-500 shadow-lg shadow-orange-900/20 border border-white/10 text-white transition-all duration-300">
              {skill}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>
</motion.div>
        </div>
      </section>

      {/* Projects Section - Enhanced with better spacing and animations */}
      {/* <section
        id="projects"
        className="w-full py-16 md:py-24 lg:py-32 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/95" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-60" />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-5 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block mb-2">
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full shadow-sm">
                Portfolio
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light leading-relaxed">
              A selection of my recent work. Each project represents a unique
              challenge and learning experience.
            </p>
          </motion.div>
          <motion.div
            className="mx-auto mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={slideIn}>
              <ProjectCard
                title="GDG on Campus"
                description="Official website for the GDG Club of IPS Academy, enhancing community engagement with a modern UI ensuring seamless navigation and responsiveness."
                tags={["React.js", "TailwindCSS", "Firebase", "JavaScript"]}
                imageUrl="/modern-website-purple-yellow.png"
                githubUrl="https://github.com/RaviGauta1121"
                liveUrl="#"
                index={0}
              />
            </motion.div>
            <motion.div variants={slideIn}>
              <ProjectCard
                title="Horizon - Financial SaaS"
                description="A financial SaaS platform for secure multi-bank connectivity, real-time transactions, and finance management with Plaid API integration and SSR authentication."
                tags={[
                  "Next.js",
                  "TypeScript",
                  "TailwindCSS",
                  "Chart.js",
                  "Node.js",
                ]}
                imageUrl="/financial-dashboard.png"
                githubUrl="https://github.com/RaviGauta1121"
                liveUrl="#"
                index={1}
              />
            </motion.div>
            <motion.div variants={slideIn}>
              <ProjectCard
                title="Healthcare Patient Management"
                description="A comprehensive patient management system using Next.js and Appwrite for seamless appointment booking with Twilio SMS notifications and secure file storage."
                tags={[
                  "Next.js",
                  "TypeScript",
                  "TailwindCSS",
                  "Appwrite",
                  "Twilio",
                ]}
                imageUrl="/healthcare-management-system.png"
                githubUrl="https://github.com/RaviGauta1121"
                liveUrl="#"
                index={2}
              />
            </motion.div>
          </motion.div>
        </div>
      </section> */}
      <section
  id="projects"
  className="w-full py-16 md:py-24 lg:py-32 relative"
>
  <div className="absolute inset-0 bg-gradient-to-t from-background to-background/95" />
  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-60" />
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-60" />
  <div className="container px-4 md:px-6 relative z-10">
    <motion.div
      className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-5 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="inline-block mb-2">
        <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full shadow-sm">
          Portfolio
        </span>
      </div>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light leading-relaxed">
        A selection of my recent work. Each project represents a unique
        challenge and learning experience.
      </p>
    </motion.div>

    <motion.div
      className="mx-auto mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div variants={slideIn}>
        <ProjectCard
          title="Bad Talk Website"
          description="Developed an interactive and responsive React website for BAD Talks. Integrated Firebase for efficient data storage and full stack implementation."
          tags={["React.js", "Firebase", "CSS", "JavaScript"]}
          imageUrl="/bad-talk.png"
          githubUrl="https://github.com/RaviGauta1121"
          liveUrl="https://bad-talks.iesipsacademystudentclubs.org/"
          index={0}
        />
      </motion.div>
      <motion.div variants={slideIn}>
        <ProjectCard
          title="Wanderlust"
          description="An Airbnb-inspired platform enabling users to list and book accommodations. Implemented user authentication, map integration, and dynamic listings."
          tags={["Node.js", "MongoDB", "TailwindCSS", "EJS"]}
          imageUrl="/wanderlust.png"
          githubUrl="https://github.com/RaviGauta1121"
          liveUrl="https://wanderlst.onrender.com/"
          index={1}
        />
      </motion.div>
      <motion.div variants={slideIn}>
        <ProjectCard
          title="Study Buddy"
          description="A full-featured student platform with tools like resume maker, meeting scheduler, Pomodoro timer, and more using Next.js and TinyMCE."
          tags={["Next.js", "MongoDB", "Auth0", "TinyMCE"]}
          imageUrl="/study-buddy.png"
          githubUrl="https://github.com/RaviGauta1121"
          liveUrl="https://studybuddy-woad.vercel.app/"
          index={2}
        />
      </motion.div>
      <motion.div variants={slideIn}>
        <ProjectCard
          title="Fit-Assistant"
          description="Built a responsive fitness and health tracker with modules for fitness, nutrition (API-based), and personalized health insights."
          tags={["React.js", "API", "TailwindCSS", "Chart.js"]}
          imageUrl="/fit-assistant.png"
          githubUrl="https://github.com/RaviGauta1121"
          liveUrl="https://starlit-seahorse-399d1d.netlify.app/"
          index={3}
        />
      </motion.div>
      <motion.div variants={slideIn}>
  <ProjectCard
    title="Biofuel Website"
    description="Developed a professional website for Ganesh Biofuel showcasing their services. Implemented using EJS, Node.js, MongoDB, and Cloudinary for image storage."
    tags={["Node.js", "MongoDB", "EJS", "TailwindCSS", "Cloudinary"]}
    imageUrl="/biofuel.png"
    githubUrl="https://github.com/RaviGauta1121"
    liveUrl="https://biofuel.vercel.app/qualitybio.in/"
    index={4}
  />
</motion.div>

    </motion.div>
  </div>
</section>


      {/* Experience Section - Enhanced with better timeline styling */}
      {/* <section
        id="experience"
        className="w-full py-16 md:py-24 lg:py-32 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-muted/20 opacity-80" />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-5 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block mb-2">
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full shadow-sm">
                Experience
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Hackathons & Events
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light leading-relaxed">
              My participation in tech events and hackathons that have shaped my
              skills and experience.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-[58rem] space-y-12">
            <motion.div
              className="relative border-l-2 border-primary/40 pl-8 pb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-br from-primary to-purple-500 shadow-md shadow-primary/20"></div>
              <h3 className="text-xl font-bold">
                MUJHackX, Manipal University Jaipur
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                September 2024 | Jaipur, India
              </p>
              <div className="mt-4 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Developed a business-centric fraud detection system for
                  Amazon, utilizing predictive analytics to mitigate financial
                  risks.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Implemented predictive analysis and sentiment analysis to
                  enhance fraud detection accuracy.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative border-l-2 border-primary/40 pl-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: "spring",
                stiffness: 50,
              }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-br from-primary to-purple-500 shadow-md shadow-primary/20"></div>
              <h3 className="text-xl font-bold">
                Hack The Mountain 5.0, Marwadi University
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                October 2024 | Rajkot, India
              </p>
              <div className="mt-4 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Built a scalable SaaS solution, 'Franchise Navigator,'
                  integrating AI-based analytics to support small business
                  owners.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Integrated an AI-based chatbot and sentiment analysis to
                  enhance user engagement and decision-making while ensuring a
                  responsive and seamless frontend experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
      <section
  id="experience"
  className="w-full py-16 md:py-24 lg:py-32 relative"
>
  <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-muted/20 opacity-80" />
  <div className="container px-4 md:px-6 relative z-10">
    <motion.div
      className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-5 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="inline-block mb-2">
        <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full shadow-sm">
          Journey
        </span>
      </div>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
        My Experience & Achievements
      </h2>
      <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light leading-relaxed">
        A glimpse into my professional journey, hackathon contributions, and extracurricular engagements that have helped shape my skillset.
      </p>
    </motion.div>

    <div className="mx-auto mt-16 max-w-[58rem] space-y-12">
      {/* Internship */}
      <motion.div
        className="relative border-l-2 border-primary/40 pl-8 pb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
        viewport={{ once: true }}
      >
        <div className="absolute -left-3 top-0 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-br from-primary to-purple-500 shadow-md shadow-primary/20"></div>
        <h3 className="text-xl font-bold">Web Development Intern – Mittal Alliance</h3>
        <p className="text-sm text-muted-foreground mt-1">October 2024 – November 2024</p>
        <div className="mt-4 space-y-3">
          <p className="text-muted-foreground leading-relaxed">
            Developed a comprehensive biofuel website showcasing services and products.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Ensured responsive design and optimized performance using modern best practices.
          </p>
        </div>
      </motion.div>

      {/* Freelance */}
      <motion.div
        className="relative border-l-2 border-primary/40 pl-8 pb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 50 }}
        viewport={{ once: true }}
      >
        <div className="absolute -left-3 top-0 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-br from-green-400 to-primary shadow-md shadow-primary/20"></div>
        <h3 className="text-xl font-bold">Freelance Web Developer – Anugami Website</h3>
        <p className="text-sm text-muted-foreground mt-1">2024</p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Created a responsive and engaging front-end experience for a client’s website with a focus on clarity and user flow.
        </p>
      </motion.div>

      {/* Hackathons */}
      <motion.div
        className="relative border-l-2 border-primary/40 pl-8 pb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 50 }}
        viewport={{ once: true }}
      >
        <div className="absolute -left-3 top-0 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-br from-yellow-500 to-pink-500 shadow-md shadow-primary/20"></div>
        <h3 className="text-xl font-bold">Hack The Mountain 5.0</h3>
        <p className="text-sm text-muted-foreground mt-1">October 2024 | Rajkot, India</p>
        <div className="mt-4 space-y-3">
          <p className="text-muted-foreground leading-relaxed">
            Won Best Beginner Award for building 'Franchise Navigator' – a SaaS tool integrating AI-based analytics and chatbot for small business owners.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="relative border-l-2 border-primary/40 pl-8 pb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 50 }}
        viewport={{ once: true }}
      >
        <div className="absolute -left-3 top-0 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-br from-pink-400 to-indigo-600 shadow-md shadow-primary/20"></div>
        <h3 className="text-xl font-bold">IPS Tech Hackathon</h3>
        <p className="text-sm text-muted-foreground mt-1">2024</p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Contributed as a full-stack and hardware developer in the creation of the AquaAir Tracker prototype for smart water and air quality monitoring.
        </p>
      </motion.div>

      {/* Extracurricular */}
      <motion.div
        className="relative border-l-2 border-primary/40 pl-8 pb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 50 }}
        viewport={{ once: true }}
      >
        <div className="absolute -left-3 top-0 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-br from-orange-400 to-red-500 shadow-md shadow-primary/20"></div>
        <h3 className="text-xl font-bold">Tech Core Member – BAD Talks</h3>
        <p className="text-sm text-muted-foreground mt-1">June 2024 – August 2024</p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Worked in the core technical team for 'BAD Talks – The CEO Summit', supporting development, event tech coordination, and media.
        </p>
      </motion.div>

      <motion.div
        className="relative border-l-2 border-primary/40 pl-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 50 }}
        viewport={{ once: true }}
      >
        <div className="absolute -left-3 top-0 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-br from-blue-500 to-sky-400 shadow-md shadow-primary/20"></div>
        <h3 className="text-xl font-bold">Other Activities</h3>
        <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
          <p>• Participated in Google Cloud Study Jam – gained hands-on experience with cloud computing technologies.</p>
          <p>• Represented school at the State Level Kabaddi Tournament – showcasing teamwork and discipline on the field.</p>
        </div>
      </motion.div>
    </div>
  </div>
</section>


      {/* Education Section - Enhanced with better design elements */}
      <section
        id="education"
        className="w-full py-16 md:py-24 lg:py-32 relative"
      >
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl opacity-60" />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-5 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block mb-2">
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full shadow-sm">
                Education
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Academic Background
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light leading-relaxed">
              My educational journey that has built the foundation for my
              technical skills.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-[58rem] space-y-12">
            <motion.div
              className="relative border-l-2 border-primary/40 pl-8 pb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-br from-primary to-purple-500 shadow-md shadow-primary/20"></div>
              <h3 className="text-xl font-bold">IES IPS Academy</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Bachelor of Technology | Nov 2022 - May 2026
              </p>
              <p className="mt-2 font-medium text-primary">
                GPA: 8.2/10.00 (Current)
              </p>
              <p className="mt-2 text-muted-foreground">Indore, India</p>
            </motion.div>

            <motion.div
              className="relative border-l-2 border-primary/40 pl-8 pb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-br from-primary to-purple-500 shadow-md shadow-primary/20"></div>
              <h3 className="text-xl font-bold">
              VIDHYUT MANDAL HEIGHER SECONDARY SCHOOL.
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                High School | Graduated May 2021
              </p>
              <p className="mt-2 font-medium text-primary">Percentage: 80%</p>
              <p className="mt-2 text-muted-foreground">Birshinghpur Pali (MP), India</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section with enhanced animations and gradients */}
      <section id="contact" className="w-full py-16 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-muted/40 to-muted/20 opacity-80" />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-5 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block mb-2">
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full shadow-sm">
                Contact
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light leading-relaxed">
              Have a project in mind or interested in working together? Feel
              free to reach out to me through the form below.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-3xl">
            <motion.div
              className="grid gap-8 md:grid-cols-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  <p className="text-muted-foreground">
                    I'm currently open for freelance work and job opportunities.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:rvgautam59@gmail.com"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        rvgautam59@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/ravigautam02"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        www.linkedin.com/in/ravigautam02
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <a
                        href="https://github.com/RaviGauta1121"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        github.com/RaviGauta1121
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with better spacing and gradients */}
      <footer className="w-full border-t bg-gradient-to-b from-background to-background/80 py-10 relative">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-60" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Ravi Gautam</h3>
              <p className="text-sm text-muted-foreground">
                Creating beautiful digital experiences with modern web
                technologies.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://github.com/RaviGauta1121"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ravigautam02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link
                href="https://www.instagram.com/ravi_gautamm_?igsh=MWIzcW9zN3Zza3Fjbg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="mailto:rvgautam59@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t pt-6">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ravi Gautam. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
