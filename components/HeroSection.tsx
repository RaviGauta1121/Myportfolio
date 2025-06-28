//hero section
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

// Animation variants (you can define or import these from a separate file)
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_600px]">
          {/* Left Content */}
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
              Currently pursuing B.Tech at IES IPS Academy.
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

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              variants={fadeIn}
              custom={4}
              initial="hidden"
              animate="visible"
            >
              <Link href="https://github.com/RaviGauta1121" target="_blank">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ravigautam02"
                target="_blank"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://www.instagram.com/ravi_gautamm_"
                target="_blank"
              >
                <Button variant="ghost" size="icon">
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:rvgautam59@gmail.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side Image and Decorations */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Floating Blur Circles */}
            <motion.div
              className="absolute w-64 h-64 bg-secondary/30 rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute w-48 h-48 bg-primary/30 rounded-full blur-3xl -translate-x-20 translate-y-10"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute w-40 h-40 bg-accent/30 rounded-full blur-3xl translate-x-20 -translate-y-10"
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5,
              }}
            />

            {/* Profile Image */}
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
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px]">
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
                      repeat: Infinity,
                      ease: "linear",
                    },
                    borderWidth: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                    boxShadow: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                />

                <div className="absolute inset-3 overflow-hidden rounded-full border-4 border-white dark:border-gray-900 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 opacity-50" />
                  <Image
                    src="/Ravi-profile.jpg"
                    alt="Ravi Gautam"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Dots */}
                <motion.div
                  className="absolute w-5 h-5 bg-gradient-to-br from-primary to-purple-500 rounded-full shadow-md"
                  style={{ top: "8%", right: "5%" }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute w-4 h-4 bg-gradient-to-br from-secondary to-cyan-400 rounded-full shadow-md"
                  style={{ bottom: "15%", right: "12%" }}
                  animate={{
                    y: [0, 12, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
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
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
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
  );
}
