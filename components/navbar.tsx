"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Menu, 
  Moon, 
  Sun, 
  X, 
  User, 
  Rocket, 
  Briefcase, 
  GraduationCap, 
  Mail,
  Sparkles,
  Zap
} from "lucide-react"
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

  // Navigation links with Lucide icons
  const navItems = [
    { href: "/#about", label: "About", icon: User },
    { href: "/#projects", label: "Projects", icon: Rocket },
    { href: "/#experience", label: "Experience", icon: Briefcase },
    { href: "/#education", label: "Education", icon: GraduationCap },
    { href: "/#contact", label: "Contact", icon: Mail },
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
        "sticky top-0 z-50 w-full transition-all duration-700",
        isScrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-primary/5"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        {/* Enhanced Logo with sparkle effect */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="flex-shrink-0"
        >
          <Link href="/" className="flex items-center gap-3 group relative">
            <motion.div 
              className="relative p-2 rounded-xl bg-gradient-to-br from-primary/10 to-purple-600/10 backdrop-blur-sm border border-primary/20 group-hover:border-primary/40 transition-all duration-300"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
            <div className="relative">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wider">
                Ravi Gautam
              </span>
              <motion.div 
                className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-primary to-purple-600 group-hover:w-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>
          </Link>
        </motion.div>
        
        {/* Enhanced Desktop navigation with glass morphism */}
        <motion.nav 
          className="hidden md:flex items-center justify-center flex-1 max-w-3xl mx-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={cn(
            "flex items-center gap-2 p-2 rounded-2xl transition-all duration-500 relative",
            isScrolled 
              ? "bg-background/70 backdrop-blur-xl border border-border/50 shadow-xl shadow-primary/5" 
              : "bg-background/40 backdrop-blur-md border border-border/30"
          )}>
            {/* Floating background indicator */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 via-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
            />
            
            {navItems.map((item, i) => {
              const isActive = activeSection === item.href.replace('/#', '');
              const IconComponent = item.icon;
              
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onHoverStart={() => setHoverItem(item.href)}
                  onHoverEnd={() => setHoverItem(null)}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative z-10 group/link",
                      isActive 
                        ? "text-white shadow-lg" 
                        : "text-muted-foreground hover:text-primary"
                    )}
                    onClick={(e) => scrollToSection(e, item.href)}
                  >
                    <motion.div
                      className="relative"
                      animate={{ 
                        scale: isActive ? 1.1 : 1,
                        rotate: hoverItem === item.href ? 10 : 0
                      }}
                      transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
                    >
                      <IconComponent className="w-4 h-4" />
                      {isActive && (
                        <motion.div
                          className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 to-purple-600/30 blur-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.div>
                    
                    <span className="relative">
                      {item.label}
                      {/* Sliding underline effect */}
                      <motion.div
                        className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-primary to-purple-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: hoverItem === item.href && !isActive ? "100%" : "0%"
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </span>
                  </Link>
                  
                  {/* Enhanced active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-purple-600 to-blue-600 shadow-lg shadow-primary/25"
                      transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
                    />
                  )}
                  
                  {/* Sophisticated hover effect */}
                  {hoverItem === item.href && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 via-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-primary/20"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.nav>
        
        {/* Enhanced right side actions */}
        <motion.div 
          className="hidden md:flex items-center gap-3 flex-shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Admin button with enhanced styling */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AdminButton />
          </motion.div>
          
          {/* Premium theme toggle */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-xl relative overflow-hidden bg-background/60 backdrop-blur-md border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <AnimatePresence mode="wait">
                {theme === "light" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                  >
                    <Sun className="h-5 w-5 text-amber-500 drop-shadow-sm" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 180, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -180, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                  >
                    <Moon className="h-5 w-5 text-blue-400 drop-shadow-sm" />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Subtle glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Mobile navigation */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Admin button (mobile) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AdminButton />
          </motion.div>
          
          {/* Theme toggle (mobile) */}
          <Button
            variant="ghost"
            size="icon"
            className="mr-2 rounded-xl bg-background/60 backdrop-blur-md border border-border/50"
            onClick={toggleTheme}
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.div
                  key="sun-mobile"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun className="h-5 w-5 text-amber-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon-mobile"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon className="h-5 w-5 text-blue-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
          
          {/* Enhanced mobile menu toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl bg-background/60 backdrop-blur-md border border-border/50 relative overflow-hidden group"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-active:opacity-100 transition-opacity duration-150"
              initial={{ scale: 0.8, opacity: 0 }}
              whileTap={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          </Button>
        </div>
      </div>

      {/* Premium animated mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden border-b border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl shadow-primary/10"
          >
            <motion.div 
              className="container flex flex-col space-y-2 py-6 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {navItems.map((item, i) => {
                const isActive = activeSection === item.href.replace('/#', '');
                const IconComponent = item.icon;
                
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1, type: "spring", bounce: 0.4 }}
                  >
                    <Link 
                      href={item.href} 
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group relative overflow-hidden",
                        isActive 
                          ? "bg-gradient-to-r from-primary/15 via-purple-600/15 to-blue-600/15 text-primary font-medium border border-primary/30 shadow-lg shadow-primary/10" 
                          : "text-muted-foreground hover:bg-primary/5 hover:text-primary border border-transparent hover:border-primary/20 hover:shadow-md"
                      )}
                      onClick={(e) => scrollToSection(e, item.href)}
                    >
                      <motion.div
                        className="relative"
                        animate={{ 
                          scale: isActive ? 1.1 : 1,
                          rotate: isActive ? 5 : 0
                        }}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
                      >
                        <IconComponent className="w-5 h-5" />
                        {isActive && (
                          <motion.div
                            className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 to-purple-600/30 blur-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.div>
                      
                      <span className="font-medium relative">
                        {item.label}
                        {/* Mobile sliding underline */}
                        <motion.div
                          className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-primary to-purple-600 rounded-full"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      </span>
                      
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, x: 20 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          className="ml-auto"
                        >
                          <motion.div 
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-600"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </motion.div>
                      )}
                      
                      {/* Ripple effect for mobile */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-purple-600/10 opacity-0 group-active:opacity-100 transition-opacity duration-200"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileTap={{ scale: 1.1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium scrolling indicator with gradient */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-purple-500  to-cyan-500 shadow-lg shadow-primary/20"
        style={{ 
          width: isScrolled ? `${scrollProgress}%` : "0%",
          scaleX: isScrolled ? 1 : 0,
          transformOrigin: "left"
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      
      {/* Subtle animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px)`,
          backgroundSize: "20px 20px"
        }}
        animate={{ 
          backgroundPosition: ["0px 0px", "20px 20px"],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
    </header>
  )
}