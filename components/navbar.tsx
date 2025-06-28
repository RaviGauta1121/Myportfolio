"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Moon, Sun, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { AdminButton } from "../app/admin/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0)
  const { theme, setTheme } = useTheme()
  const navRef = useRef<HTMLElement | null>(null);

  // Navigation links
  const navItems = [
    { href: "/#about", label: "About", icon: "👨‍💻" },
    { href: "/#projects", label: "Projects", icon: "🚀" },
    { href: "/#experience", label: "Experience", icon: "💼" },
    { href: "/#education", label: "Education", icon: "🎓" },
    { href: "/#contact", label: "Contact", icon: "📧" },
  ]

  // Handle scroll for navbar appearance and active section
  useEffect(() => {
    // Make sure code runs only in the browser
    if (typeof window === "undefined") return;
    
    const handleScroll = () => {
      // Update navbar appearance
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight * 100;
      setScrollProgress(Math.min(scrollPercent, 100));

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('/#', ''));
      
      // Find the current section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the element is in view (with some buffer for better UX)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  // Handle clicks outside the navbar to close it
  useEffect(() => {
    // Make sure code runs only in the browser
    if (typeof window === "undefined") return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Handle theme toggle with animation
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Scroll to section smoothly
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const sectionId = href.replace('/#', '')
    const element = document.getElementById(sectionId)
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
      
      setActiveSection(sectionId)
      setIsOpen(false)
    }
  }

  return (
    <header
      ref={navRef}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        {/* Logo with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="flex-shrink-0"
        >
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wider">
                Ravi Gautam
              </span>
              <motion.div 
                className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-primary to-purple-600 group-hover:w-full"
                initial={{ width: 0 }}
                animate={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </Link>
        </motion.div>
        
        {/* Centered Desktop navigation */}
        <motion.nav 
          className="hidden md:flex items-center justify-center flex-1 max-w-2xl mx-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={cn(
            "flex items-center gap-1 p-1 rounded-full transition-all duration-300",
            isScrolled 
              ? "bg-background/60 backdrop-blur-sm border shadow-sm" 
              : "bg-background/40 backdrop-blur-sm"
          )}>
            {navItems.map((item, i) => {
              const isActive = activeSection === item.href.replace('/#', '');
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  onHoverStart={() => setHoverItem(item.href)}
                  onHoverEnd={() => setHoverItem(null)}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 relative z-10",
                      isActive 
                        ? "text-white" 
                        : "text-muted-foreground hover:text-primary"
                    )}
                    onClick={(e) => scrollToSection(e, item.href)}
                  >
                    <motion.span 
                      className="text-base"
                      animate={{ scale: isActive ? 1.1 : 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span>{item.label}</span>
                  </Link>
                  
                  {/* Active indicator with enhanced animation */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 shadow-lg"
                      transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
                    />
                  )}
                  
                  {/* Hover effect */}
                  {hoverItem === item.href && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 rounded-full bg-primary/10 backdrop-blur-sm"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.nav>
        
        {/* Right side actions */}
        <motion.div 
          className="hidden md:flex items-center gap-3 flex-shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Admin button */}
          <AdminButton />
          
          {/* Enhanced theme toggle */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full relative overflow-hidden bg-background/60 backdrop-blur-sm border hover:bg-primary/10 transition-all duration-300"
            >
              <AnimatePresence mode="wait">
                {theme === "light" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="h-5 w-5 text-amber-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="h-5 w-5 text-blue-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Mobile navigation */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Admin button (mobile) */}
          <AdminButton />
          
          {/* Theme toggle (mobile) */}
          <Button
            variant="ghost"
            size="icon"
            className="mr-2 rounded-full bg-background/60 backdrop-blur-sm"
            onClick={toggleTheme}
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.div
                  key="sun-mobile"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="h-5 w-5 text-amber-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon-mobile"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="h-5 w-5 text-blue-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
          
          {/* Mobile menu toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full bg-background/60 backdrop-blur-sm"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Enhanced animated mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden border-b bg-background/95 backdrop-blur-md shadow-lg"
          >
            <motion.div 
              className="container flex flex-col space-y-3 py-6 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {navItems.map((item, i) => {
                const isActive = activeSection === item.href.replace('/#', '');
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <Link 
                      href={item.href} 
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group",
                        isActive 
                          ? "bg-gradient-to-r from-primary/10 to-purple-600/10 text-primary font-medium border border-primary/20" 
                          : "text-muted-foreground hover:bg-primary/5 hover:text-primary border border-transparent hover:border-primary/10"
                      )}
                      onClick={(e) => scrollToSection(e, item.href)}
                    >
                      <motion.span 
                        className="text-xl"
                        animate={{ scale: isActive ? 1.1 : 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="ml-auto"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </motion.div>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced scrolling indicator */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 shadow-sm"
        style={{ 
          width: isScrolled ? `${scrollProgress}%` : "0%",
          scaleX: isScrolled ? 1 : 0
        }}
        transition={{ duration: 0.2 }}
      />
    </header>
  )
}