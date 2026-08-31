"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Github, Twitter, Mail } from "lucide-react"

const founder = {
  name: "Abdulai Tamba Lebbie",
  role: "FOUNDER & LEAD ENGINEER",
  bio: "Abdulai is the Founder and Tech Lead of Afric-Analyzer. With a background in Information Technology and a deep interest in AI and data systems, he focuses on building practical digital solutions that address real challenges across Africa. He is passionate about secure system design and combines clean development practices with a strong emphasis on performance and long-term maintainability.",
  skills: ["AI & Machine Learning", "Data Analytics", "Full Stack Development", "Cloud Architecture"],
  photo: "/team/lebbie.webp",
}

const members = [
  {
    name: "Chinedum Roland Eke",
    role: "FULL STACK DEVELOPER",
    bio: "Full Stack Developer and DevOps enthusiast with deep expertise in Node.js, TypeScript, cloud infrastructure, and scalable backend systems. He architects and deploys the core infrastructure powering Afric-Analyzer.",
    skills: ["Node.js", "TypeScript", "PostgreSQL", "AWS & Terraform", "Docker"],
    photo: "/team/roland.webp",
    linkedin: "https://www.linkedin.com/in/chinedum-roland-eke/",
    github: "https://github.com/chinedum-eke",
  },
  {
    name: "Alex Alison Sesay",
    role: "CYBERSECURITY & FRONTEND",
    bio: "Cybersecurity specialist and frontend developer combining rigorous security practices with modern UI to ensure Afric-Analyzer is both deeply secure and effortless to use.",
    skills: ["React.js", "Tailwind CSS", "Penetration Testing", "Network Security"],
    photo: "/team/alex.webp",
    linkedin: "https://www.linkedin.com/in/alex-sesay-248997332/",
    github: "https://github.com/Al3x-Alison",
  },
]

function SocialIcon({ href, icon: Icon }: { href?: string; icon: React.ElementType }) {
  const Comp = href ? "a" : "span"
  return (
    <Comp
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="flex h-[34px] w-[34px] items-center justify-center rounded-lg transition-colors"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.09)",
      }}
    >
      <Icon className="h-4 w-4" style={{ color: "rgba(255,255,255,0.55)" }} />
    </Comp>
  )
}

function SkillTag({ label }: { label: string }) {
  return (
    <span
      className="rounded-md px-3 py-1 text-xs font-semibold"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.09)",
        color: "rgba(255,255,255,0.65)",
      }}
    >
      {label}
    </span>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Team() {
  return (
    <section style={{ backgroundColor: "#070D1A" }} className="py-24 lg:py-[100px]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section divider */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
          <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: "rgba(255,255,255,0.3)" }}>
            The team
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
        </motion.div>

        {/* Headline */}
        <motion.div
          className="mt-8 mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-balance text-white" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            The minds behind Afric-Analyzer
          </h2>
          <p className="mt-4" style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem" }}>
            A small, focused team building serious security infrastructure for Africa.
          </p>
        </motion.div>

        {/* Founder card */}
        <motion.div
          className="mb-8 grid items-center gap-8 overflow-hidden rounded-2xl p-8 lg:grid-cols-[320px_1fr] lg:gap-12 lg:p-10"
          style={{
            backgroundColor: "#0D1526",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Photo */}
          <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "3/4" }}>
            <Image
              src={founder.photo}
              alt={founder.name}
              fill
              className="object-cover object-top"
              sizes="320px"
            />
          </div>
          {/* Info */}
          <div>
            <p
              className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.1em]"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              {founder.role}
            </p>
            <h3 className="mb-1.5 text-white" style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.03em" }}>
              {founder.name}
            </h3>
            <div className="mb-5 flex gap-2">
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Github} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Mail} />
            </div>
            <p className="text-[15px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.55)" }}>
              {founder.bio}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {founder.skills.map((s) => (
                <SkillTag key={s} label={s} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team members grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {members.map((m, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="overflow-hidden rounded-[14px]"
              style={{ backgroundColor: "#0D1526", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Photo */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/5", borderBottom: "1px solid rgba(255,255,255,0.07)", backgroundColor: "#0D1526" }}>
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.08em]" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {m.role}
                </p>
                <h4 className="text-xl font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
                  {m.name}
                </h4>
                <div className="my-3 flex gap-1.5">
                  <SocialIcon href={m.linkedin} icon={Linkedin} />
                  <SocialIcon href={m.github} icon={Github} />
                </div>
                <p className="mb-4 text-[13px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {m.bio}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {m.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-md px-2.5 py-1 text-[11px] font-semibold"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.09)",
                        color: "rgba(255,255,255,0.65)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}