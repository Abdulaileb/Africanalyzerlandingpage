// "use client"

// import { motion } from "framer-motion"
// import { Globe, Building2, Landmark, Smartphone, Radio, FileText } from "lucide-react"

// const orgs = [
//   { name: "University of Sierra Leone", icon: Globe },
//   { name: "Njala University", icon: Globe },
//   { name: "Rokel Commercial Bank", icon: Landmark },
//   { name: "Orange SL", icon: Smartphone },
//   { name: "NTC Sierra Leone", icon: Radio },
//   { name: "Ministry of Information", icon: Building2 },
//   { name: "University of Sierra Leone", icon: Globe },
//   { name: "Njala University", icon: Globe },
//   { name: "Rokel Commercial Bank", icon: Landmark },
//   { name: "Orange SL", icon: Smartphone },
//   { name: "NTC Sierra Leone", icon: Radio },
//   { name: "Ministry of Information", icon: FileText },
// ]

// export default function TrustedBy() {
//   return (
//     <section style={{ backgroundColor: "#070D1A" }} className="py-10">
//       <div className="mx-auto max-w-[1200px] px-6">
//         {/* Divider label */}
//         <motion.div
//           className="flex items-center gap-4"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
//           <span
//             className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em]"
//             style={{ color: "rgba(255,255,255,0.3)" }}
//           >
//             Trusted by 2,000+ organizations
//           </span>
//           <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
//         </motion.div>

//         {/* Marquee */}
//         <div className="mt-7 overflow-hidden">
//           <div className="animate-marquee flex gap-4" style={{ width: "max-content" }}>
//             {[...orgs, ...orgs].map((org, i) => {
//               const Icon = org.icon
//               return (
//                 <div
//                   key={i}
//                   className="flex shrink-0 items-center gap-2 rounded-full px-5 py-2"
//                   style={{
//                     background: "rgba(255,255,255,0.05)",
//                     border: "1px solid rgba(255,255,255,0.08)",
//                   }}
//                 >
//                   <Icon className="h-4 w-4" style={{ color: "#2563EB" }} />
//                   <span className="whitespace-nowrap text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
//                     {org.name}
//                   </span>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import { motion } from "framer-motion"
import { GraduationCap, Building2, ShieldCheck, Star } from "lucide-react"

const earlyAdopters = [
  { name: "Higher Education", icon: GraduationCap, detail: "West African university pilot" },
  { name: "SMEs", icon: Building2, detail: "Early-stage validation partners" },
  { name: "Security Teams", icon: ShieldCheck, detail: "MSP pilot programme" },
  { name: "Higher Education", icon: GraduationCap, detail: "West African university pilot" },
  { name: "SMEs", icon: Building2, detail: "Early-stage validation partners" },
  { name: "Security Teams", icon: ShieldCheck, detail: "MSP pilot programme" },
]

export default function TrustedBy() {
  return (
    <section style={{ backgroundColor: "#070D1A" }} className="py-10">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Divider label */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
          <span
            className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Trusted by our early adopters in higher education and SMEs
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
        </motion.div>

        {/* Marquee */}
        <div className="mt-7 overflow-hidden">
          <div className="animate-marquee flex gap-4" style={{ width: "max-content" }}>
            {[...earlyAdopters, ...earlyAdopters].map((org, i) => {
              const Icon = org.icon
              return (
                <div
                  key={i}
                  className="flex shrink-0 items-center gap-2.5 rounded-full px-5 py-2.5"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Icon className="h-4 w-4" style={{ color: "#2563EB" }} />
                  <div>
                    <span className="whitespace-nowrap text-[13px] font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {org.name}
                    </span>
                    <span className="ml-2 text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                      · {org.detail}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}