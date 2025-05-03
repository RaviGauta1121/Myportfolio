"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { initializeAnalytics, getFirebaseApp } from "@/lib/firebase";

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Initialize Firebase
    try {
      // Initialize Firebase app
      const app = getFirebaseApp();
      
      if (!app) {
        console.warn("Firebase app initialization returned null - check your environment variables");
        setError("Firebase configuration is incomplete");
        setIsInitialized(false);
        return;
      }
      
      // Initialize Firebase Analytics with error handling
      const initAnalytics = async () => {
        try {
          // Only try to initialize analytics if we're in a browser environment
          if (typeof window !== 'undefined') {
            // This is now safer with our improved error handling
            const analytics = await initializeAnalytics();
            if (analytics) {
              console.log("Firebase Analytics initialized successfully");
            } else {
              console.log("Firebase Analytics initialization skipped (not an error)");
            }
          }
        } catch (error) {
          // Don't fail the entire initialization if analytics fails
          console.error("Error initializing Firebase Analytics:", error);
          // Just log it and continue - analytics is optional
        } finally {
          // Mark initialization as complete regardless of analytics success
          setIsInitialized(true);
        }
      };
      
      initAnalytics();
    } catch (error) {
      console.error("Error initializing Firebase:", error);
      setError("Firebase initialization failed");
      setIsInitialized(false);
    }
  }, []);
  
  // You could render an error UI here if needed
  // if (error) {
  //   return <div className="text-red-500">Firebase error: {error}</div>;
  // }
  
  // Render children even if not initialized to avoid blocking the UI
  return <>{children}</>;
}