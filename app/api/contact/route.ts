// app/api/contact/route.ts

import { NextResponse } from "next/server";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Firebase configuration using ONLY environment variables (no fallbacks!)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID!,
};

// Initialize Firebase only once
const getFirebaseDb = () => {
  try {
    const apps = getApps();
    const app = apps.length === 0 ? initializeApp(firebaseConfig) : apps[0];
    return getFirestore(app);
  } catch (error) {
    console.error("Error initializing Firebase:", error);
    throw error;
  }
};

// POST handler for saving contact form data
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const db = getFirebaseDb();

    const docRef = await addDoc(collection(db, "contactSubmissions"), {
      name,
      email,
      message,
      createdAt: serverTimestamp(),
    });

    console.log("Document written with ID:", docRef.id);
    return NextResponse.json({ success: true, id: docRef.id }, { status: 201 });

  } catch (error: any) {
    console.error("Error saving contact form:", error);
    return NextResponse.json(
      {
        error: "Failed to save contact form",
        message: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
