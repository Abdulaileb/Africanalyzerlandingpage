"use client"

import { motion } from "framer-motion"
import { ShieldAlert, SignalHigh, UserX, Network } from "lucide-react"

const alerts = [
  {
    title: "Password attack detected",
    description: "Multiple failed logins from 4 IPs targeting a staff account.",
    risk: "High",
    action: "Block IP range and enforce MFA reset.",
    icon: ShieldAlert,
    tone: "#EF4444",
  },
  {
    title: "Beaconing activity",
    description: "Workstation-21 is making periodic outbound calls every 60 seconds.",
    risk: "Medium",
    action: "Isolate device and run malware scan.",
    icon: SignalHigh,
    tone: "#F59E0B",
  },
  {
    title: "Suspicious admin login",
    description: "New login to admin console from an unfamiliar location.",
    risk: "High",
    action: "Force admin password reset and review activity log.",
    icon: UserX,
    tone: "#EF4444",
  },
  {
    title: "Lateral movement attempt",
    description: "Repeated access attempts across internal servers detected.",
    risk: "Medium",
    action: "Lock down lateral traffic and review privileged accounts.",
    icon: Network,
    tone: "#2563EB",
  },
]

export default function LiveDetection() {
  return (
    <section id="live-detection" style={{ backgroundColor: "#F2F5FA" }} className="py-24 lg:py-[100px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px flex-1" style={{ background: "rgba(0,0,0,0.12)" }} />
          <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: "#6B7280" }}>
            Live detection
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(0,0,0,0.12)" }} />
        </motion.div>

        <motion.div
          className="mt-8 mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-balance"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#0A0F1F",
            }}
          >
            Real alerts, clear next steps
          </h2>
          <p className="mt-4" style={{ color: "#6B7280", fontSize: "1rem" }}>
            Each alert includes the risk level and recommended action so teams can respond fast.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {alerts.map((alert) => {
            const Icon = alert.icon
            return (
              <motion.div
                key={alert.title}
                className="rounded-[16px] bg-white p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                style={{ border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 12px 40px rgba(15,23,42,0.08)" }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-[10px]"
                      style={{ background: "rgba(37,99,235,0.08)" }}
                    >
                      <Icon className="h-5 w-5" style={{ color: alert.tone }} />
                    </div>
                    <div>
                      <p className="text-sm font-bold" style={{ color: "#0A0F1F" }}>{alert.title}</p>
                      <p className="text-xs" style={{ color: "#6B7280" }}>{alert.description}</p>
                    </div>
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-semibold"
                    style={{ background: "rgba(239,68,68,0.08)", color: alert.tone }}
                  >
                    {alert.risk} risk
                  </span>
                </div>
                <div className="mt-4 rounded-lg p-3" style={{ background: "rgba(15,23,42,0.04)" }}>
                  <p className="text-xs" style={{ color: "#475569" }}>
                    Recommended action: {alert.action}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}