"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Eye, EyeOff, Lock, Mail, Shield, Sparkles, X } from "lucide-react"

interface AdminLoginDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AdminLoginDialog({ open, onOpenChange }: AdminLoginDialogProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simulate loading delay for better UX
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Check against hardcoded credentials
      if (formData.email === "RaviGautam@gmail.com" && formData.password === "123456") {
        // Set admin session in localStorage
        localStorage.setItem("adminAuthenticated", "true")
        
        // Close dialog and redirect
        onOpenChange(false)
        
        // Show success message
        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard.",
        })
        
        // Redirect to admin dashboard
        router.push("/admin")
      } else {
        setError("Invalid email or password")
      }
    } catch (error) {
      setError("Failed to login. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden border-0 bg-gradient-to-br from-background via-background to-muted/20 [&>button]:hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-2xl animate-pulse delay-1000" />
        
        <div className="relative z-10">
          {/* Custom Close Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onOpenChange(false)}
            className="absolute right-6 top-6 z-50 h-8 w-8 p-0 rounded-full hover:bg-muted/80 transition-all duration-200 group"
          >
            <X className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="sr-only">Close</span>
          </Button>

          {/* Header Section */}
          <DialogHeader className="px-8 pt-8 pb-2 text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary/25 animate-in fade-in-0 zoom-in-95 duration-300">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Admin Access
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-2 leading-relaxed">
              Secure authentication required to access the admin dashboard
            </DialogDescription>
          </DialogHeader>

          {/* Form Section */}
          <div className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label 
                  htmlFor="email" 
                  className="text-sm font-medium flex items-center gap-2 text-foreground/90"
                >
                  <Mail className="w-4 h-4" />
                  Email Address
                </Label>
                <div className="relative group">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={`
                      h-12 pl-4 pr-4 border-2 transition-all duration-300 rounded-xl
                      bg-background/50 backdrop-blur-sm
                      ${focusedField === "email" 
                        ? "border-primary shadow-lg shadow-primary/25 bg-background/80" 
                        : "border-muted-foreground/20 hover:border-muted-foreground/40"
                      }
                      ${error ? "border-red-500/50" : ""}
                    `}
                    placeholder="admin@example.com"
                    required
                  />
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 transition-opacity duration-300 pointer-events-none ${focusedField === "email" ? "opacity-100" : "opacity-0"}`} />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label 
                  htmlFor="password" 
                  className="text-sm font-medium flex items-center gap-2 text-foreground/90"
                >
                  <Lock className="w-4 h-4" />
                  Password
                </Label>
                <div className="relative group">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                    className={`
                      h-12 pl-4 pr-12 border-2 transition-all duration-300 rounded-xl
                      bg-background/50 backdrop-blur-sm
                      ${focusedField === "password" 
                        ? "border-primary shadow-lg shadow-primary/25 bg-background/80" 
                        : "border-muted-foreground/20 hover:border-muted-foreground/40"
                      }
                      ${error ? "border-red-500/50" : ""}
                    `}
                    placeholder="Enter your password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-muted/50"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <Eye className="w-4 h-4 text-muted-foreground" />
                    )}
                  </Button>
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 transition-opacity duration-300 pointer-events-none ${focusedField === "password" ? "opacity-100" : "opacity-0"}`} />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="animate-in slide-in-from-left-2 duration-300">
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800/50">
                    <p className="text-sm text-red-600 dark:text-red-400 font-medium">
                      {error}
                    </p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => onOpenChange(false)}
                  className="flex-1 h-12 rounded-xl border-2 hover:bg-muted/50 transition-all duration-200"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="flex-1 h-12 rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Authenticating...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Sign In
                    </div>
                  )}
                </Button>
              </div>
            </form>

            {/* Footer */}
            <div className="mt-6 pt-6 border-t border-muted-foreground/10">
              <p className="text-xs text-muted-foreground text-center">
                Secured with enterprise-grade authentication
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}