import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section id="education" className="w-full py-16 md:py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl opacity-60" />
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
              Education
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Academic Background
          </h2>
          <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light leading-relaxed">
            My educational journey that has built the foundation for my
            technical skills.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-[58rem] space-y-12">
          <motion.div
            className="relative border-l-2 border-primary/40 pl-8 pb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-3 top-0 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-br from-primary to-purple-500 shadow-md shadow-primary/20"></div>
            <h3 className="text-xl font-bold">IES IPS Academy</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Bachelor of Technology | Nov 2022 - May 2026
            </p>
            <p className="mt-2 font-medium text-primary">
              GPA: 8.2/10.00 (Current)
            </p>
            <p className="mt-2 text-muted-foreground">Indore, India</p>
          </motion.div>

          <motion.div
            className="relative border-l-2 border-primary/40 pl-8 pb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-3 top-0 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-br from-primary to-purple-500 shadow-md shadow-primary/20"></div>
            <h3 className="text-xl font-bold">
              VIDHYUT MANDAL HEIGHER SECONDARY SCHOOL.
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              High School | Graduated May 2021
            </p>
            <p className="mt-2 font-medium text-primary">Percentage: 80%</p>
            <p className="mt-2 text-muted-foreground">
              Birshinghpur Pali (MP), India
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
