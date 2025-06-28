"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { getFirestoreDb } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"
import { 
  Download, 
  RefreshCw, 
  LogOut, 
  Search, 
  Eye, 
  Users, 
  Mail, 
  Calendar,
  TrendingUp,
  Filter,
  ChevronDown,
  Sparkles
} from "lucide-react"

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
  const [filteredSubmissions, setFilteredSubmissions] = useState<ContactSubmission[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null)
  const [dateFilter, setDateFilter] = useState("all")

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
        setFilteredSubmissions(fetchedSubmissions)
        
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

  // Filter submissions based on search and date
  useEffect(() => {
    let filtered = submissions

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (submission) =>
          submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          submission.message.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Date filter
    if (dateFilter !== "all") {
      const now = new Date()
      const filterDate = new Date()
      
      switch (dateFilter) {
        case "today":
          filterDate.setHours(0, 0, 0, 0)
          break
        case "week":
          filterDate.setDate(now.getDate() - 7)
          break
        case "month":
          filterDate.setMonth(now.getMonth() - 1)
          break
      }
      
      filtered = filtered.filter(
        (submission) => new Date(submission.createdAt) >= filterDate
      )
    }

    setFilteredSubmissions(filtered)
  }, [submissions, searchTerm, dateFilter])

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated")
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of the admin dashboard.",
    })
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
          title: "Data refreshed successfully",
          description: `Found ${fetchedSubmissions.length} submissions.`,
        })
      } catch (error) {
        console.error("Error fetching submissions:", error)
        setError("Failed to load contact submissions. Please try again.")
        toast({
          title: "Refresh failed",
          description: "Unable to refresh data. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchSubmissions()
  }

  const handleDownloadCSV = () => {
    const headers = ["Date", "Name", "Email", "Message"]

    const rows = filteredSubmissions.map((submission) => [
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
    link.setAttribute("download", `contact_submissions_${new Date().toISOString().split('T')[0]}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast({
      title: "CSV Downloaded",
      description: `Downloaded ${filteredSubmissions.length} submissions.`,
    })
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

  const getTimeAgo = (date: Date) => {
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffMinutes = Math.floor(diffMs / (1000 * 60))

    if (diffDays > 0) return `${diffDays}d ago`
    if (diffHours > 0) return `${diffHours}h ago`
    if (diffMinutes > 0) return `${diffMinutes}m ago`
    return "Just now"
  }

  const getStats = () => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    const thisWeek = new Date()
    thisWeek.setDate(today.getDate() - 7)
    
    const todayCount = submissions.filter(s => new Date(s.createdAt) >= today).length
    const weekCount = submissions.filter(s => new Date(s.createdAt) >= thisWeek).length
    
    return { todayCount, weekCount, totalCount: submissions.length }
  }

  const stats = getStats()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated background elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
      <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-2xl animate-pulse delay-1000 pointer-events-none" />
      
      <div className="relative z-10 container py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">Manage your contact form submissions and analytics</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button 
              variant="outline" 
              onClick={handleRefresh}
              disabled={isLoading}
              className="bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-200"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button 
              variant="outline" 
              onClick={handleDownloadCSV} 
              disabled={filteredSubmissions.length === 0}
              className="bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="bg-background/50 backdrop-blur-sm hover:bg-red-50 hover:text-red-600 hover:border-red-200 dark:hover:bg-red-950/50 dark:hover:text-red-400 dark:hover:border-red-800 transition-all duration-200"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/50 dark:to-blue-900/30 border-blue-200/50 dark:border-blue-800/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Today</p>
                  <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">{stats.todayCount}</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/50 dark:to-green-900/30 border-green-200/50 dark:border-green-800/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">This Week</p>
                  <p className="text-3xl font-bold text-green-700 dark:text-green-300">{stats.weekCount}</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/50 dark:to-purple-900/30 border-purple-200/50 dark:border-purple-800/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Total</p>
                  <p className="text-3xl font-bold text-purple-700 dark:text-purple-300">{stats.totalCount}</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Card className="bg-background/50 backdrop-blur-sm border-border/50 shadow-xl">
          <CardHeader className="border-b border-border/50 bg-muted/20">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Mail className="w-5 h-5 text-primary" />
                  Contact Form Submissions
                </CardTitle>
                <CardDescription className="mt-1">
                  {filteredSubmissions.length} of {submissions.length} submissions displayed
                </CardDescription>
              </div>
              
              {/* Search and Filter Controls */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search submissions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-64 bg-background/50 backdrop-blur-sm"
                  />
                </div>
                
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <select
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="pl-10 pr-8 py-2 border border-input bg-background/50 backdrop-blur-sm rounded-md text-sm w-full sm:w-auto appearance-none"
                  >
                    <option value="all">All Time</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-16 space-y-4">
                <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                <p className="text-muted-foreground">Loading submissions...</p>
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-red-500" />
                </div>
                <p className="text-red-500 font-medium">{error}</p>
                <Button onClick={handleRefresh} className="mt-4" variant="outline">
                  Try Again
                </Button>
              </div>
            ) : filteredSubmissions.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground font-medium">
                  {searchTerm || dateFilter !== "all" ? "No submissions match your filters" : "No submissions found"}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {searchTerm || dateFilter !== "all" ? "Try adjusting your search or filters" : "Contact form messages will appear here"}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-muted/50">
                      <TableHead className="font-semibold">Date & Time</TableHead>
                      <TableHead className="font-semibold">Contact Info</TableHead>
                      <TableHead className="font-semibold">Message Preview</TableHead>
                      <TableHead className="font-semibold text-center">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSubmissions.map((submission, index) => (
                      <TableRow key={submission.id} className="hover:bg-muted/30 transition-colors">
                        <TableCell className="font-medium">
                          <div className="space-y-1">
                            <div className="text-sm">{formatDate(submission.createdAt)}</div>
                            <Badge variant="secondary" className="text-xs">
                              {getTimeAgo(submission.createdAt)}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-medium">{submission.name}</div>
                            <div className="text-sm text-muted-foreground">{submission.email}</div>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <div className="truncate text-sm">
                            {submission.message.length > 80
                              ? `${submission.message.substring(0, 80)}...`
                              : submission.message}
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setSelectedSubmission(submission)}
                                className="hover:bg-primary/10 hover:text-primary"
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle className="flex items-center gap-2">
                                  <Mail className="w-5 h-5" />
                                  Message Details
                                </DialogTitle>
                                <DialogDescription>
                                  Submitted on {selectedSubmission && formatDate(selectedSubmission.createdAt)}
                                </DialogDescription>
                              </DialogHeader>
                              {selectedSubmission && (
                                <div className="space-y-4">
                                  <div className="Grid grid-cols-2 gap-4">
                                    <div>
                                      <label className="text-sm font-medium text-muted-foreground">Name</label>
                                      <p className="text-sm font-medium">{selectedSubmission.name}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-muted-foreground">Email</label>
                                      <p className="text-sm font-medium">{selectedSubmission.email}</p>
                                    </div>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-muted-foreground">Message</label>
                                    <div className="mt-2 p-4 bg-muted/20 rounded-lg border">
                                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                                        {selectedSubmission.message}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}