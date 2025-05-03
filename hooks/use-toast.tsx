// Adapted from: https://ui.shadcn.com/docs/components/toast
"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"

const TOAST_REMOVE_DELAY = 5000

type ToastProps = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  variant?: "default" | "destructive"
}

type ToasterToast = ToastProps

const ToastContext = createContext<{
  toasts: ToasterToast[]
  toast: (props: Omit<ToasterToast, "id">) => void
  dismiss: (toastId: string) => void
}>({
  toasts: [],
  toast: () => {},
  dismiss: () => {},
})

export const useToast = () => {
  const context = useContext(ToastContext)

  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }

  return context
}

export const ToastProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [toasts, setToasts] = useState<ToasterToast[]>([])

  useEffect(() => {
    const timers = toasts.map((toast) => {
      const timer = setTimeout(() => {
        dismiss(toast.id)
      }, TOAST_REMOVE_DELAY)

      return { id: toast.id, timer }
    })

    return () => {
      timers.forEach((timer) => clearTimeout(timer.timer))
    }
  }, [toasts])

  const toast = ({ title, description, variant, action }: Omit<ToasterToast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { id, title, description, variant, action }])
    return id
  }

  const dismiss = (toastId: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastId))
  }

  return <ToastContext.Provider value={{ toasts, toast, dismiss }}>{children}</ToastContext.Provider>
}
