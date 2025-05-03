"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { getFirestoreDb } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

interface ContactSubmission {
  id: string
  name: string
  email: string
  message: string
  createdAt: any
}

export default function AdminPage() {
  const router = useRouter()
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === "undefined") return

    const isAuthenticated = localStorage.getItem("adminAuthenticated") === "true"

    if (!isAuthenticated) {
      router.push("/")
      return
    }

    const fetchSubmissions = async () => {
      try {
        setIsLoading(true)
        const db = getFirestoreDb()
        
        if (!db) {
          throw new Error("Firebase database connection failed")
        }

        console.log("Fetching submissions from Firestore...")
        
        const q = query(
          collection(db, "contactSubmissions"),
          orderBy("createdAt", "desc")
        )

        const querySnapshot = await getDocs(q)
        console.log(`Fetched ${querySnapshot.size} submissions`)
        
        const fetchedSubmissions: ContactSubmission[] = []

        querySnapshot.forEach((doc) => {
          const data = doc.data()
          fetchedSubmissions.push({
            id: doc.id,
            name: data.name || "",
            email: data.email || "",
            message: data.message || "",
            createdAt: data.createdAt?.toDate ? new Date(data.createdAt.toDate()) : new Date(),
          })
        })

        setSubmissions(fetchedSubmissions)
        
        if (fetchedSubmissions.length === 0) {
          console.log("No submissions found in the database")
        }
      } catch (error) {
        console.error("Error fetching submissions:", error)
        setError("Failed to load contact submissions. Please try again.")
        
        toast({
          title: "Error loading data",
          description: "There was a problem connecting to the database. Please try again later.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchSubmissions()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated")
    router.push("/")
  }

  const handleRefresh = () => {
    setIsLoading(true)
    setError("")
    
    // Re-fetch the data
    const fetchSubmissions = async () => {
      try {
        const db = getFirestoreDb()
        
        if (!db) {
          throw new Error("Firebase database connection failed")
        }
        
        const q = query(
          collection(db, "contactSubmissions"),
          orderBy("createdAt", "desc")
        )

        const querySnapshot = await getDocs(q)
        const fetchedSubmissions: ContactSubmission[] = []

        querySnapshot.forEach((doc) => {
          const data = doc.data()
          fetchedSubmissions.push({
            id: doc.id,
            name: data.name || "",
            email: data.email || "",
            message: data.message || "",
            createdAt: data.createdAt?.toDate ? new Date(data.createdAt.toDate()) : new Date(),
          })
        })

        setSubmissions(fetchedSubmissions)
        
        toast({
          title: "Data refreshed",
          description: `Found ${fetchedSubmissions.length} submissions.`,
        })
      } catch (error) {
        console.error("Error fetching submissions:", error)
        setError("Failed to load contact submissions. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchSubmissions()
  }

  const handleDownloadCSV = () => {
    const headers = ["Date", "Name", "Email", "Message"]

    const rows = submissions.map((submission) => [
      formatDate(submission.createdAt),
      submission.name,
      submission.email,
      submission.message.replace(/(\r\n|\n|\r)/gm, " "),
    ])

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", "contact_submissions.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const formatDate = (date: Date) => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      return "Invalid date"
    }
    
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-4">
          <Button variant="outline" onClick={handleRefresh}>
            Refresh Data
          </Button>
          <Button variant="outline" onClick={handleDownloadCSV} disabled={submissions.length === 0}>
            Download CSV
          </Button>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact Form Submissions</CardTitle>
          <CardDescription>
            View all the messages submitted through your contact form.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center py-10">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="text-center py-10 text-red-500">{error}</div>
          ) : submissions.length === 0 ? (
            <div className="text-center py-10 text-muted-foreground">
              No submissions found. Your contact form messages will appear here.
            </div>
          ) : (
            <Table>
              <TableCaption>A list of your contact form submissions.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="w-1/3">Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell className="font-medium">
                      {formatDate(submission.createdAt)}
                    </TableCell>
                    <TableCell>{submission.name}</TableCell>
                    <TableCell>{submission.email}</TableCell>
                    <TableCell className="break-words">
                      {submission.message.length > 100
                        ? `${submission.message.substring(0, 100)}...`
                        : submission.message}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}