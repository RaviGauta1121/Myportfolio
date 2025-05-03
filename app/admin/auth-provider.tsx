"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"

type AuthContextType = {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if user is authenticated on component mount
    const authStatus = localStorage.getItem("adminAuthenticated") === "true"
    setIsAuthenticated(authStatus)
  }, [])

  const login = () => {
    localStorage.setItem("adminAuthenticated", "true")
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem("adminAuthenticated")
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}