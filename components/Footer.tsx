import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FooterSection() {
  return (
    <footer className="w-full border-t bg-gradient-to-b from-background to-background/80 py-10 relative">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-60" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Ravi Gautam</h3>
            <p className="text-sm text-muted-foreground">
              Creating beautiful digital experiences with modern web technologies.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/RaviGauta1121" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-all duration-300">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/ravigautam02" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://www.instagram.com/ravi_gautamm_?igsh=MWIzcW9zN3Zza3Fjbg==" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-all duration-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
            <Link href="mailto:rvgautam59@gmail.com">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-all duration-300">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ravi Gautam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
