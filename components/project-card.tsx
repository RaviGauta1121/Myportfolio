"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  githubUrl: string
  liveUrl?: string
  index?: number
}

export function ProjectCard({ title, description, tags, imageUrl, githubUrl, liveUrl, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full border-muted/60 transition-all duration-300 hover:border-primary/50 hover:shadow-md">
        <div className="relative aspect-video overflow-hidden">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="h-full w-full">
            <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
        <CardHeader>
          <h3 className="text-xl font-bold">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground font-light">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="bg-secondary/10 text-foreground/80">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
            </Link>
          </motion.div>
          {liveUrl && (
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </Link>
            </motion.div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
