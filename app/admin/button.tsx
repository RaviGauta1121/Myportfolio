"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AdminLoginDialog } from "./admin-login-dilog"

export function AdminButton() {
  const [showLoginDialog, setShowLoginDialog] = useState(false)

  return (
    <>
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => setShowLoginDialog(true)}
        className="text-muted-foreground hover:text-foreground"
      >
        Admin
      </Button>
      
      <AdminLoginDialog 
        open={showLoginDialog} 
        onOpenChange={setShowLoginDialog} 
      />
    </>
  )
}