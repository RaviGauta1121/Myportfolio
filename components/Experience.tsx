import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-muted/20 opacity-80" />
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
              Journey
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            My Experience & Achievements
          </h2>
          <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light leading-relaxed">
            A glimpse into my professional journey, hackathon contributions,
            and extracurricular engagements that have helped shape my
            skillset.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-[58rem] space-y-12">
          {/** Internship */}
          <ExperienceItem
            title="Web Development Intern – Mittal Alliance"
            date="October 2024 – November 2024"
            description={["Developed a comprehensive biofuel website showcasing services and products.", "Ensured responsive design and optimized performance using modern best practices."]}
            badgeColor="from-primary to-purple-500"
          />

          {/** Freelance */}
          <ExperienceItem
            title="Freelance Web Developer – Anugami Website"
            date="2024"
            description={["Created a responsive and engaging front-end experience for a client’s website with a focus on clarity and user flow."]}
            badgeColor="from-green-400 to-primary"
          />

          {/** Hackathon - HTM */}
          <ExperienceItem
            title="Hack The Mountain 5.0"
            date="October 2024 | Rajkot, India"
            description={["Won Best Beginner Award for building 'Franchise Navigator' – a SaaS tool integrating AI-based analytics and chatbot for small business owners."]}
            badgeColor="from-yellow-500 to-pink-500"
          />

          {/** Hackathon - IPS */}
          <ExperienceItem
            title="IPS Tech Hackathon"
            date="2024"
            description={["Contributed as a full-stack and hardware developer in the creation of the AquaAir Tracker prototype for smart water and air quality monitoring."]}
            badgeColor="from-pink-400 to-indigo-600"
          />

          {/** Tech Team */}
          <ExperienceItem
            title="Tech Core Member – BAD Talks"
            date="June 2024 – August 2024"
            description={["Worked in the core technical team for 'BAD Talks – The CEO Summit', supporting development, event tech coordination, and media."]}
            badgeColor="from-orange-400 to-red-500"
          />

          {/** Others */}
          <ExperienceItem
            title="Other Activities"
            description={[
              "• Participated in Google Cloud Study Jam – gained hands-on experience with cloud computing technologies.",
              "• Represented school at the State Level Kabaddi Tournament – showcasing teamwork and discipline on the field."
            ]}
            badgeColor="from-blue-500 to-sky-400"
          />
        </div>
      </div>
    </section>
  );
}
type ExperienceItemProps = {
  title: string;
  date?: string;
  description: string[];
  badgeColor: string;
};

function ExperienceItem({ title, date, description, badgeColor }: ExperienceItemProps) {
  return (
    <motion.div
      className="relative border-l-2 border-primary/40 pl-8 pb-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
      viewport={{ once: true }}
    >
      <div
        className={`absolute -left-3 top-0 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-br ${badgeColor} shadow-md shadow-primary/20`}
      />
      <h3 className="text-xl font-bold">{title}</h3>
      {date && <p className="text-sm text-muted-foreground mt-1">{date}</p>}
      <div className="mt-4 space-y-3">
        {description.map((line: string, idx: number) => (
          <p key={idx} className="text-muted-foreground leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
