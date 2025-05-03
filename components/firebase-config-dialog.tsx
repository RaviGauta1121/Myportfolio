"use client"

import { useEffect, useState } from "react"
import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FirebaseConfigDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfigSaved: (config: any) => void
}

export function FirebaseConfigDialog({
  open,
  onOpenChange,
  onConfigSaved,
}: FirebaseConfigDialogProps) {
  const [config, setConfig] = useState({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "",
  })

  // Load saved config from localStorage (optional)
  useEffect(() => {
    const saved = localStorage.getItem("firebaseConfig")
    if (saved) {
      try {
        setConfig(JSON.parse(saved))
      } catch {
        console.warn("Invalid config in localStorage")
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setConfig((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    try {
      // Avoid re-initializing if already initialized
      const app =
        getApps().length === 0 ? initializeApp(config) : getApps()[0]

      getFirestore(app) // Initialize Firestore

      // Save config
      localStorage.setItem("firebaseConfig", JSON.stringify(config))

      onConfigSaved(config)
      onOpenChange(false)
    } catch (error) {
      console.error("Firebase Init Error:", error)
      alert("Invalid Firebase configuration. Please check and try again.")
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Firebase Configuration</AlertDialogTitle>
          <AlertDialogDescription>
            Enter your Firebase project details to enable database features.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          {Object.keys(config).map((key) => (
            <div key={key} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={key} className="text-right capitalize">
                {key}
              </Label>
              <Input
                id={key}
                name={key}
                value={config[key as keyof typeof config]}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
          ))}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSave}>Save Configuration</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
