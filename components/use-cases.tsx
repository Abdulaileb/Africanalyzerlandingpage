// "use client"

// import { motion } from "framer-motion"
// import { GraduationCap, Building2, ShieldCheck, CheckCircle2 } from "lucide-react"

// const cases = [
//   {
//     icon: GraduationCap,
//     title: "Universities",
//     body: "Monitor campus networks, protect student and faculty data, detect insider threats, and support cybersecurity research programs.",
//     benefits: [
//       "Protect student & faculty data",
//       "Monitor research infrastructure",
//       "Support cybersecurity education",
//       "Detect insider threats",
//     ],
//   },
//   {
//     icon: Building2,
//     title: "Enterprises",
//     body: "Centralize log management, achieve compliance, gain business intelligence, and monitor performance across your entire infrastructure.",
//     benefits: [
//       "Centralized log management",
//       "Compliance reporting",
//       "Business intelligence",
//       "Performance monitoring",
//     ],
//   },
//   {
//     icon: ShieldCheck,
//     title: "Security Teams",
//     body: "Accelerate incident response, automate forensic reporting, and collaborate on live investigations in one unified workspace.",
//     benefits: [
//       "Rapid incident response",
//       "Threat intelligence",
//       "Automated forensics",
//       "Collaborative investigations",
//     ],
//   },
// ]

// const containerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1 } },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 32 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
// }

// export default function UseCases() {
//   return (
//     <section id="use-cases" style={{ backgroundColor: "#F2F5FA" }} className="py-24 lg:py-[100px]">
//       <div className="mx-auto max-w-[1200px] px-6">
//         {/* Section divider */}
//         <motion.div
//           className="flex items-center gap-4"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="h-px flex-1" style={{ background: "rgba(0,0,0,0.12)" }} />
//           <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: "#6B7280" }}>
//             Use cases
//           </span>
//           <div className="h-px flex-1" style={{ background: "rgba(0,0,0,0.12)" }} />
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
//             style={{
//               fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
//               fontWeight: 800,
//               letterSpacing: "-0.03em",
//               lineHeight: 1.05,
//               color: "#0A0F1F",
//             }}
//           >
//             Built for your organization
//           </h2>
//           <p className="mt-4" style={{ color: "#6B7280", fontSize: "1rem" }}>
//             Universities, enterprises, or security operations centers — Afric-Analyzer fits your scale.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <motion.div
//           className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-80px" }}
//         >
//           {cases.map((c, i) => {
//             const Icon = c.icon
//             return (
//               <motion.div
//                 key={i}
//                 variants={itemVariants}
//                 className="overflow-hidden rounded-[14px] bg-white"
//                 style={{
//                   border: "1px solid rgba(0,0,0,0.07)",
//                   boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
//                 }}
//                 whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}
//                 transition={{ duration: 0.2 }}
//               >
//                 {/* Top strip */}
//                 <div className="h-1" style={{ backgroundColor: "#2563EB" }} />

//                 <div className="p-7">
//                   {/* Icon */}
//                   <div
//                     className="flex h-11 w-11 items-center justify-center rounded-[10px]"
//                     style={{ background: "rgba(37,99,235,0.08)" }}
//                   >
//                     <Icon className="h-[22px] w-[22px]" style={{ color: "#2563EB" }} />
//                   </div>

//                   <h3
//                     className="mt-3.5 mb-2.5"
//                     style={{
//                       fontSize: "20px",
//                       fontWeight: 800,
//                       color: "#0A0F1F",
//                       letterSpacing: "-0.02em",
//                     }}
//                   >
//                     {c.title}
//                   </h3>
//                   <p className="mb-5 text-sm leading-[1.7]" style={{ color: "#6B7280" }}>
//                     {c.body}
//                   </p>

//                   {/* Benefits */}
//                   <div className="space-y-2">
//                     {c.benefits.map((b, j) => (
//                       <div key={j} className="flex items-start gap-2.5">
//                         <CheckCircle2 className="mt-0.5 h-[15px] w-[15px] shrink-0" style={{ color: "#2563EB" }} />
//                         <span className="text-[13px]" style={{ color: "#374151" }}>
//                           {b}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             )
//           })}
//         </motion.div>
//       </div>
//     </section>
//   )
// }



// "use client"

import { motion } from "framer-motion"
import { GraduationCap, Building2, ShieldCheck, CheckCircle2 } from "lucide-react"

const cases = [
  {
    icon: GraduationCap,
    title: "Universities",
    body: "Monitor campus networks, protect student data, and pass audits without a dedicated SOC team.",
    benefits: [
      "Protect student & faculty records",
      "Monitor research infrastructure",
      "Support cybersecurity education and labs",
      "Detect insider and account-sharing issues",
    ],
  },
  {
    icon: Building2,
    title: "SMEs & Enterprises",
    body: "Centralise security logs, meet compliance, and understand what's happening across offices and cloud apps.",
    benefits: [
      "Centralised log management",
      "Compliance & audit reporting",
      "Early breach detection",
      "Executive-friendly reports",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security Teams / MSPs",
    body: "Offer managed detection and response to many clients from one dashboard.",
    benefits: [
      "Rapid incident response",
      "Multi-tenant views for MSPs",
      "Automated incident reports",
      "API integrations into your tools",
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function UseCases() {
  return (
    <section id="use-cases" style={{ backgroundColor: "#F2F5FA" }} className="py-24 lg:py-[100px]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section divider */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px flex-1" style={{ background: "rgba(0,0,0,0.12)" }} />
          <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: "#6B7280" }}>
            Use cases
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(0,0,0,0.12)" }} />
        </motion.div>

        {/* Headline */}
        <motion.div
          className="mt-8 mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#0A0F1F",
            }}
          >
            Built for your organization
          </h2>
          <p className="mt-4" style={{ color: "#6B7280", fontSize: "1rem" }}>
            Universities, SMEs, or managed service providers — AfricAnalyzer fits your scale.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cases.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="overflow-hidden rounded-[14px] bg-white"
                style={{
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                }}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                {/* Top strip */}
                <div className="h-1" style={{ backgroundColor: "#2563EB" }} />

                <div className="p-7">
                  {/* Icon */}
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-[10px]"
                    style={{ background: "rgba(37,99,235,0.08)" }}
                  >
                    <Icon className="h-[22px] w-[22px]" style={{ color: "#2563EB" }} />
                  </div>

                  <h3
                    className="mt-3.5 mb-2.5"
                    style={{
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "#0A0F1F",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {c.title}
                  </h3>
                  <p className="mb-5 text-sm leading-[1.7]" style={{ color: "#6B7280" }}>
                    {c.body}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2">
                    {c.benefits.map((b, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-[15px] w-[15px] shrink-0" style={{ color: "#2563EB" }} />
                        <span className="text-[13px]" style={{ color: "#374151" }}>
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}