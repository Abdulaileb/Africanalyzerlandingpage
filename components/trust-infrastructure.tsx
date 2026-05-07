"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Lock, Server, Users, Globe } from "lucide-react"

const items = [
  {
    title: "GDPR-ready",
    description: "Built with data protection and auditability in mind.",
    icon: Globe,
  },
  {
    title: "Multi-tenant isolation",
    description: "Strict separation of data across clients and environments.",
    icon: Users,
  },
  {
    title: "Encrypted ingestion",
    description: "TLS in transit and AES-256 at rest across the stack.",
    icon: Lock,
  },
  {
    title: "Role-based access",
    description: "Fine-grained permissions for admins and analysts.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud or on-prem",
    description: "Deploy to your cloud or keep sensitive data on-site.",
    icon: Server,
  },
]

export default function TrustInfrastructure() {
  return (
    <section id="trust" style={{ backgroundColor: "#070D1A" }} className="py-24 lg:py-[100px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
          <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: "rgba(255,255,255,0.3)" }}>
            Trust & infrastructure
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
        </motion.div>

        <motion.div
          className="mt-8 mb-14 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-balance text-white"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Built for trust, designed for real-world ops
          </h2>
          <p className="mt-4" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem" }}>
            Everything you need to meet compliance and protect critical systems.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                className="rounded-2xl p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(15,23,42,0.6)",
                }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "rgba(37,99,235,0.16)" }}>
                  <Icon className="h-5 w-5" style={{ color: "#60A5FA" }} />
                </div>
                <p className="mt-4 text-base font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm" style={{ color: "rgba(148,163,184,0.7)" }}>{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}