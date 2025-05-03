// lib/firebase.js - Updated for Analytics fix

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration - Make sure these values are correct
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAY7rjsS11wBVyaITvv5-iuLhg3UXiitPA",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "personal-portfolio-d432c.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "personal-portfolio-d432c",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "personal-portfolio-d432c.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "786814607358",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:786814607358:web:89f434985c86b73d076aaf",
  // Only add measurementId if you actually have set up Analytics
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID, 
};

// Debug logging
console.log("Firebase config loaded with project ID:", firebaseConfig.projectId);

// Initialize Firebase with error handling
const initFirebase = () => {
  try {
    // Check if we have a valid project ID
    if (!firebaseConfig.projectId) {
      console.error("Firebase project ID is missing. Check your environment variables.");
      return null;
    }
    
    if (getApps().length === 0) {
      console.log("Initializing new Firebase app");
      return initializeApp(firebaseConfig);
    } else {
      console.log("Using existing Firebase app");
      return getApp();
    }
  } catch (error) {
    console.error("Firebase initialization error:", error);
    return null;
  }
};

// Get Firebase app instance with safety checks
export const getFirebaseApp = () => {
  if (typeof window === "undefined" && process.env.NODE_ENV !== "development") {
    // For server-side in production, create a separate app instance
    try {
      return getApps().length === 0 
        ? initializeApp(firebaseConfig, "server-app") 
        : getApp("server-app");
    } catch (error) {
      console.error("Server-side Firebase initialization error:", error);
      return null;
    }
  }
  
  return initFirebase();
};

// Get Firestore instance with safety checks
export const getFirestoreDb = () => {
  const app = getFirebaseApp();
  if (!app) return null;
  
  try {
    return getFirestore(app);
  } catch (error) {
    console.error("Error initializing Firestore:", error);
    return null;
  }
};

// Initialize Analytics conditionally (only in browser) with better error handling
export const initializeAnalytics = async () => {
  if (typeof window === "undefined") return null;
  
  try {
    const app = getFirebaseApp();
    if (!app) {
      console.warn("Cannot initialize Analytics: Firebase app is null");
      return null;
    }
    
    // Check if analytics is supported
    const analyticsSupported = await isSupported().catch(err => {
      console.warn("Analytics support check failed:", err);
      return false;
    });
    
    if (!analyticsSupported) {
      console.warn("Analytics is not supported in this environment");
      return null;
    }
    
    // Check if measurement ID exists (required for analytics)
    // If it doesn't exist, don't try to initialize analytics
    if (!firebaseConfig.measurementId && !process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID) {
      console.warn("Analytics measurement ID is missing - skipping analytics initialization");
      return null;
    }
    
    console.log("Initializing Firebase Analytics");
    return getAnalytics(app);
  } catch (error) {
    console.error("Analytics initialization error:", error);
    // Don't rethrow - just log the error and return null
    return null;
  }
};

export default getFirebaseApp;