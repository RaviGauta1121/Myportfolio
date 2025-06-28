import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { ContactForm } from "./contact-form";
export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/40 to-muted/20 opacity-80" />
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-5 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-block mb-2">
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full shadow-sm">
              Contact
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light leading-relaxed">
            Have a project in mind or interested in working together? Feel free to reach out to me through the form below.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-3xl">
          <motion.div
            className="grid gap-8 md:grid-cols-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <p className="text-muted-foreground">
                  I'm currently open for freelance work and job opportunities.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:rvgautam59@gmail.com"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      rvgautam59@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/ravigautam02"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      www.linkedin.com/in/ravigautam02
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a
                      href="https://github.com/RaviGauta1121"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      github.com/RaviGauta1121
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
             <ContactForm/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
