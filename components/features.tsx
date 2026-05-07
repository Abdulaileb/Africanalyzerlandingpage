// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ChevronDown, Activity, BarChart3, Bot, Shield, CheckCircle } from "lucide-react"

// const features = [
//   {
//     number: "01",
//     title: "Real-Time Log Ingestion",
//     description: "Collect logs from any system, cloud, or environment with a high-performance lightweight pipeline.",
//     icon: Activity,
//     premium: false,
//     detail: {
//       fullDescription: "Our high-performance ingestion pipeline handles millions of events per second, normalizing and enriching data from any source in real time.",
//       benefits: [
//         "Ingest from 350+ log sources out of the box",
//         "Sub-second processing latency",
//         "Automatic schema detection and normalization",
//         "Zero data loss with guaranteed delivery",
//       ],
//     },
//   },
//   {
//     number: "02",
//     title: "Intelligence Dashboard",
//     description: "Visualize threats, anomalies, and system health at a glance with a clean, powerful dashboard.",
//     icon: BarChart3,
//     premium: false,
//     detail: {
//       fullDescription: "A unified command center for your entire security posture. See threats, trends, and system health across all connected infrastructure.",
//       benefits: [
//         "Real-time threat visualization and mapping",
//         "Custom dashboards and widgets",
//         "Automated anomaly detection alerts",
//         "Historical trend analysis and reporting",
//       ],
//     },
//   },
//   {
//     number: "03",
//     title: "AI Security Assistant",
//     description: "Ask in natural language. Get incident summaries, threat analysis, and automated reports instantly.",
//     icon: Bot,
//     premium: true,
//     detail: {
//       fullDescription: "Your AI-powered security analyst that understands context, correlates events, and generates actionable intelligence in plain language.",
//       benefits: [
//         "Natural language threat investigation",
//         "Automated incident summarization",
//         "Smart response recommendations",
//         "One-click report generation",
//       ],
//     },
//   },
//   {
//     number: "04",
//     title: "Enterprise-Grade Security",
//     description: "End-to-end encryption, role-based access, and cloud-native isolation for sensitive institutional data.",
//     icon: Shield,
//     premium: false,
//     detail: {
//       fullDescription: "Built from the ground up with security-first architecture. Your data is encrypted, isolated, and protected by enterprise-grade access controls.",
//       benefits: [
//         "AES-256 encryption at rest and in transit",
//         "Role-based access control (RBAC)",
//         "Multi-tenant data isolation",
//         "SOC 2 compliance ready",
//       ],
//     },
//   },
// ]

// const sectionVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1 } },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 32 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
// }

// export default function Features() {
//   const [activeIndex, setActiveIndex] = useState(0)
//   const active = features[activeIndex]
//   const ActiveIcon = active.icon

//   return (
//     <section id="features" style={{ backgroundColor: "#070D1A" }} className="py-24 lg:py-[100px]">
//       <div className="mx-auto max-w-[1200px] px-6">
//         {/* Section divider label */}
//         <motion.div
//           className="flex items-center gap-4"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
//           <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: "rgba(255,255,255,0.3)" }}>
//             What we provide
//           </span>
//           <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
//         </motion.div>

//         {/* Headline */}
//         <motion.div
//           className="mt-8 mb-16 text-center"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <h2
//             className="mx-auto max-w-[640px] text-balance text-white"
//             style={{
//               fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
//               fontWeight: 800,
//               letterSpacing: "-0.03em",
//               lineHeight: 1.05,
//             }}
//           >
//             Everything you need to secure your infrastructure
//           </h2>
//           <p className="mt-4" style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem" }}>
//             Comprehensive tools built for modern African security teams.
//           </p>
//         </motion.div>

//         {/* 2-column layout */}
//         <motion.div
//           className="grid gap-10 lg:grid-cols-2 lg:gap-12"
//           variants={sectionVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-80px" }}
//         >
//           {/* Left: accordion list */}
//           <div>
//             {features.map((feat, i) => {
//               const isOpen = i === activeIndex
//               return (
//                 <motion.div
//                   key={i}
//                   variants={itemVariants}
//                   style={{
//                     borderBottom: i < features.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
//                   }}
//                 >
//                   <button
//                     onClick={() => setActiveIndex(i)}
//                     className="flex w-full items-center justify-between py-5 text-left"
//                   >
//                     <div className="flex items-center gap-3">
//                       <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
//                         {feat.number}
//                       </span>
//                       <span className="text-[17px] font-bold text-white">
//                         {feat.title}
//                       </span>
//                       {feat.premium && (
//                         <span
//                           className="rounded px-[7px] py-[2px] text-[10px] font-bold"
//                           style={{
//                             background: "rgba(37,99,235,0.2)",
//                             border: "1px solid rgba(37,99,235,0.3)",
//                             color: "#60A5FA",
//                           }}
//                         >
//                           Premium
//                         </span>
//                       )}
//                     </div>
//                     <motion.div
//                       animate={{ rotate: isOpen ? 180 : 0 }}
//                       transition={{ duration: 0.25 }}
//                     >
//                       <ChevronDown className="h-[18px] w-[18px]" style={{ color: "#2563EB" }} />
//                     </motion.div>
//                   </button>
//                   <AnimatePresence>
//                     {isOpen && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//                         style={{ overflow: "hidden" }}
//                       >
//                         <p className="pb-5 text-sm leading-[1.7]" style={{ color: "rgba(255,255,255,0.5)" }}>
//                           {feat.description}
//                         </p>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               )
//             })}
//           </div>

//           {/* Right: feature detail panel */}
//           <div
//             className="rounded-2xl p-8"
//             style={{
//               backgroundColor: "#0D1526",
//               border: "1px solid rgba(255,255,255,0.08)",
//             }}
//           >
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIndex}
//                 initial={{ opacity: 0, y: 12 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -12 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div
//                   className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
//                   style={{ background: "rgba(37,99,235,0.12)" }}
//                 >
//                   <ActiveIcon className="h-6 w-6" style={{ color: "#2563EB" }} />
//                 </div>
//                 <h3 className="mb-3 text-[22px] font-bold text-white">{active.title}</h3>
//                 <p className="mb-6 text-sm leading-[1.75]" style={{ color: "rgba(255,255,255,0.5)" }}>
//                   {active.detail.fullDescription}
//                 </p>
//                 <div className="space-y-3">
//                   {active.detail.benefits.map((b, i) => (
//                     <div key={i} className="flex items-start gap-2.5">
//                       <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#2563EB" }} />
//                       <span className="text-sm text-white/70">{b}</span>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { Banknote, Wrench, ShieldAlert } from "lucide-react"

const gaps = [
  {
    product: "Splunk",
    problem: "Too expensive",
    icon: Banknote,
  },
  {
    product: "Wazuh",
    problem: "Too technical",
    icon: Wrench,
  },
  {
    product: "SMEs",
    problem: "Under-protected",
    icon: ShieldAlert,
  },
]

export default function Features() {
  return (
    <section id="features" style={{ backgroundColor: "#070D1A" }} className="py-24 lg:py-[100px]">
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
            Why we exist
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
            className="mx-auto max-w-[720px] text-balance text-white"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Most companies are too small for enterprise security — but too important to stay vulnerable.
          </h2>
          <p className="mt-4" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem" }}>
            Vigil closes the gap with a calmer, simpler security platform built for lean teams.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {gaps.map((gap) => {
            const Icon = gap.icon
            return (
              <motion.div
                key={gap.product}
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
                <p className="mt-4 text-sm font-semibold" style={{ color: "rgba(148,163,184,0.7)" }}>{gap.product}</p>
                <p className="mt-2 text-lg font-bold text-white">{gap.problem}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="mt-10 rounded-2xl border p-6 text-center"
          style={{ borderColor: "rgba(148,163,184,0.2)", background: "rgba(15,23,42,0.35)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base font-semibold text-white">
            We built a simpler, more actionable security platform designed for real-world teams.
          </p>
        </motion.div>
      </div>
    </section>
  )
}