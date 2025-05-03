"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <Badge
        variant="outline"
        className="px-3 py-1.5 text-sm border-primary/20 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 hover:bg-primary/10"
      >
        {name}
      </Badge>
    </motion.div>
  )
}
