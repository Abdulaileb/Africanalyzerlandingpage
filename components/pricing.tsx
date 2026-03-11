// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Check, Lock, Clock, ArrowRight } from "lucide-react"

// const plans = [
//   {
//     name: "Free",
//     description: "Perfect for getting started with basic security monitoring.",
//     monthlyPrice: 0,
//     yearlyPrice: 0,
//     cta: "Get Started",
//     style: "outline" as const,
//     features: [
//       { text: "Basic dashboard", included: true },
//       { text: "Up to 1GB logs/month", included: true },
//       { text: "Real-time monitoring", included: true },
//       { text: "7-day log retention", included: true },
//       { text: "Email support", included: true },
//       { text: "No AI Assistant", included: false },
//       { text: "No team access", included: false },
//     ],
//   },
//   {
//     name: "Standard",
//     description: "For growing teams that need more power and collaboration.",
//     monthlyPrice: 99,
//     yearlyPrice: 990,
//     cta: "Start Free Trial",
//     style: "primary" as const,
//     popular: true,
//     features: [
//       { text: "Full dashboard", included: true },
//       { text: "Unlimited log ingestion", included: true },
//       { text: "Real-time alerts", included: true },
//       { text: "90-day log retention", included: true },
//       { text: "Team access up to 10 users", included: true },
//       { text: "Role-based permissions", included: true },
//       { text: "Priority support", included: true },
//       { text: "API access", included: true },
//     ],
//   },
//   {
//     name: "Premium",
//     description: "Enterprise-grade security with AI-powered intelligence.",
//     monthlyPrice: 299,
//     yearlyPrice: 2990,
//     cta: "Contact Sales",
//     style: "dark" as const,
//     features: [
//       { text: "Everything in Standard", included: true },
//       { text: "AI Security Assistant", included: true },
//       { text: "Automated incident reports", included: true },
//       { text: "Advanced analytics", included: true },
//       { text: "Unlimited log retention", included: true },
//       { text: "Unlimited team members", included: true },
//       { text: "24/7 priority support", included: true },
//       { text: "Custom integrations", included: true },
//       { text: "Dedicated account manager", included: true },
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

// export default function Pricing() {
//   const [yearly, setYearly] = useState(false)

//   return (
//     <section id="pricing" style={{ backgroundColor: "#F2F5FA" }} className="py-24 lg:py-[100px]">
//       <div className="mx-auto max-w-[1200px] px-6">
//         {/* Coming Soon badge */}
//         <motion.div
//           className="mb-6 flex justify-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div
//             className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5"
//             style={{
//               background: "rgba(245,158,11,0.1)",
//               border: "1px solid rgba(245,158,11,0.25)",
//             }}
//           >
//             <Clock className="h-[13px] w-[13px]" style={{ color: "#F59E0B" }} />
//             <span className="text-xs font-semibold" style={{ color: "#D97706" }}>
//               Launching April 2026
//             </span>
//           </div>
//         </motion.div>

//         {/* Headline */}
//         <motion.div
//           className="mb-12 text-center"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#0A0F1F" }}>
//             Simple, transparent pricing
//           </h2>
//           <p className="mt-4" style={{ color: "#6B7280", fontSize: "1rem" }}>
//             Choose the plan that fits your security needs.
//           </p>

//           {/* Toggle */}
//           <div className="mt-8 flex justify-center">
//             <div
//               className="inline-flex rounded-lg p-1"
//               style={{ background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.08)" }}
//             >
//               <button
//                 onClick={() => setYearly(false)}
//                 className="rounded-md px-[18px] py-[7px] text-sm font-medium transition-all"
//                 style={{
//                   backgroundColor: !yearly ? "white" : "transparent",
//                   color: !yearly ? "#0A0F1F" : "#6B7280",
//                   fontWeight: !yearly ? 700 : 500,
//                   boxShadow: !yearly ? "0 1px 6px rgba(0,0,0,0.1)" : "none",
//                 }}
//               >
//                 Monthly
//               </button>
//               <button
//                 onClick={() => setYearly(true)}
//                 className="flex items-center gap-2 rounded-md px-[18px] py-[7px] text-sm font-medium transition-all"
//                 style={{
//                   backgroundColor: yearly ? "white" : "transparent",
//                   color: yearly ? "#0A0F1F" : "#6B7280",
//                   fontWeight: yearly ? 700 : 500,
//                   boxShadow: yearly ? "0 1px 6px rgba(0,0,0,0.1)" : "none",
//                 }}
//               >
//                 Yearly
//                 <span className="rounded px-1.5 py-[1px] text-[10px] font-bold" style={{ background: "rgba(13,148,136,0.1)", color: "#0D9488" }}>
//                   Save 17%
//                 </span>
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Cards */}
//         <motion.div
//           className="grid gap-6 lg:grid-cols-3"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-80px" }}
//         >
//           {plans.map((plan, i) => (
//             <motion.div
//               key={i}
//               variants={itemVariants}
//               className="relative rounded-2xl bg-white p-8"
//               style={{
//                 border: plan.popular ? "1.5px solid #2563EB" : "1px solid rgba(0,0,0,0.07)",
//                 boxShadow: plan.popular ? "0 0 32px rgba(37,99,235,0.1)" : "none",
//               }}
//               whileHover={{ y: -4 }}
//               transition={{ duration: 0.2 }}
//             >
//               {plan.popular && (
//                 <div
//                   className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.04em] text-white"
//                   style={{ backgroundColor: "#2563EB" }}
//                 >
//                   Most Popular
//                 </div>
//               )}

//               <p className="mb-1.5 text-sm font-bold uppercase tracking-[0.04em]" style={{ color: "#6B7280" }}>
//                 {plan.name}
//               </p>
//               <p className="mb-5 text-sm" style={{ color: "#6B7280" }}>
//                 {plan.description}
//               </p>

//               {/* Price */}
//               <div className="mb-6">
//                 <span style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-0.04em", color: "#0A0F1F" }}>
//                   ${yearly && plan.yearlyPrice > 0 ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
//                 </span>
//                 <span className="text-[15px]" style={{ color: "#6B7280" }}>/month</span>
//                 {yearly && plan.yearlyPrice > 0 && (
//                   <p className="mt-1 text-sm" style={{ color: "#0D9488" }}>
//                     ${plan.yearlyPrice.toLocaleString()} billed annually
//                   </p>
//                 )}
//               </div>

//               {/* CTA button */}
//               <button
//                 className="mb-6 w-full rounded-[10px] py-3.5 text-[15px] font-bold transition-all"
//                 style={{
//                   backgroundColor:
//                     plan.style === "primary" ? "#2563EB" :
//                     plan.style === "dark" ? "#0A0F1F" : "white",
//                   color:
//                     plan.style === "outline" ? "#0A0F1F" : "white",
//                   border:
//                     plan.style === "outline" ? "1.5px solid rgba(0,0,0,0.15)" : "none",
//                   boxShadow:
//                     plan.style === "primary" ? "0 4px 16px rgba(37,99,235,0.3)" : "none",
//                 }}
//               >
//                 {plan.cta}
//               </button>

//               {/* Features */}
//               <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }} className="pt-5">
//                 <div className="space-y-2.5">
//                   {plan.features.map((f, j) => (
//                     <div key={j} className="flex items-start gap-2.5">
//                       {f.included ? (
//                         <div
//                           className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px]"
//                           style={{ background: "rgba(37,99,235,0.1)" }}
//                         >
//                           <Check className="h-[15px] w-[15px]" style={{ color: "#2563EB" }} />
//                         </div>
//                       ) : (
//                         <div
//                           className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px]"
//                           style={{ background: "rgba(0,0,0,0.04)" }}
//                         >
//                           <Lock className="h-3 w-3" style={{ color: "#D1D5DB" }} />
//                         </div>
//                       )}
//                       <span
//                         className="text-[13px]"
//                         style={{
//                           color: f.included ? "#374151" : "#9CA3AF",
//                           textDecoration: f.included ? "none" : "line-through",
//                         }}
//                       >
//                         {f.text}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Enterprise CTA */}
//         <motion.div
//           className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[14px] p-9 lg:flex-row lg:px-10"
//           style={{ backgroundColor: "#0A0F1F" }}
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <div>
//             <h3 className="text-lg font-bold text-white">Need a custom solution?</h3>
//             <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
//               Contact Sales for enterprise pricing with custom features.
//             </p>
//           </div>
//           <button
//             className="flex items-center gap-2 rounded-[10px] px-6 py-3 text-sm font-semibold text-white transition-colors"
//             style={{ border: "1px solid rgba(255,255,255,0.2)" }}
//           >
//             Contact Sales
//             <ArrowRight className="h-4 w-4" />
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Lock, Clock, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started with basic security monitoring.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: "Get Started",
    style: "outline" as const,
    features: [
      { text: "Basic dashboard", included: true },
      { text: "Up to 1GB logs/month", included: true },
      { text: "Real-time monitoring", included: true },
      { text: "7-day log retention", included: true },
      { text: "Email support", included: true },
      { text: "No AI Assistant", included: false },
      { text: "No team access", included: false },
    ],
  },
  {
    name: "Standard",
    description: "For SMEs and universities just starting with continuous monitoring.",
    monthlyPrice: 99,
    yearlyPrice: 990,
    cta: "Start Free Trial",
    style: "primary" as const,
    popular: true,
    features: [
      { text: "Full dashboard", included: true },
      { text: "Unlimited log ingestion", included: true },
      { text: "Real-time alerts", included: true },
      { text: "90-day log retention", included: true },
      { text: "Team access up to 10 users", included: true },
      { text: "Role-based permissions", included: true },
      { text: "Priority support", included: true },
      { text: "API access", included: true },
    ],
  },
  {
    name: "Premium",
    description: "For MSPs and institutions that need AI-assisted investigations and long-term retention.",
    monthlyPrice: 299,
    yearlyPrice: 2990,
    cta: "Contact Sales",
    style: "dark" as const,
    features: [
      { text: "Everything in Standard", included: true },
      { text: "AI Security Assistant", included: true },
      { text: "Automated incident reports", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Unlimited log retention", included: true },
      { text: "Unlimited team members", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Custom integrations", included: true },
      { text: "Dedicated account manager", included: true },
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

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" style={{ backgroundColor: "#F2F5FA" }} className="py-24 lg:py-[100px]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Coming Soon badge */}
        <motion.div
          className="mb-6 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5"
            style={{
              background: "rgba(245,158,11,0.1)",
              border: "1px solid rgba(245,158,11,0.25)",
            }}
          >
            <Clock className="h-[13px] w-[13px]" style={{ color: "#F59E0B" }} />
            <span className="text-xs font-semibold" style={{ color: "#D97706" }}>
              Launching April 2026
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#0A0F1F" }}>
            Simple, transparent pricing
          </h2>
          <p className="mt-4" style={{ color: "#6B7280", fontSize: "1rem" }}>
            Choose the plan that fits your security needs.
          </p>
          <p className="mt-2 text-sm font-medium" style={{ color: "#2563EB" }}>
            Pilot pricing available for universities and early adopters — ask us about 3-month validation pilots.
          </p>

          {/* Toggle */}
          <div className="mt-8 flex justify-center">
            <div
              className="inline-flex rounded-lg p-1"
              style={{ background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.08)" }}
            >
              <button
                onClick={() => setYearly(false)}
                className="rounded-md px-[18px] py-[7px] text-sm font-medium transition-all"
                style={{
                  backgroundColor: !yearly ? "white" : "transparent",
                  color: !yearly ? "#0A0F1F" : "#6B7280",
                  fontWeight: !yearly ? 700 : 500,
                  boxShadow: !yearly ? "0 1px 6px rgba(0,0,0,0.1)" : "none",
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className="flex items-center gap-2 rounded-md px-[18px] py-[7px] text-sm font-medium transition-all"
                style={{
                  backgroundColor: yearly ? "white" : "transparent",
                  color: yearly ? "#0A0F1F" : "#6B7280",
                  fontWeight: yearly ? 700 : 500,
                  boxShadow: yearly ? "0 1px 6px rgba(0,0,0,0.1)" : "none",
                }}
              >
                Yearly
                <span className="rounded px-1.5 py-[1px] text-[10px] font-bold" style={{ background: "rgba(13,148,136,0.1)", color: "#0D9488" }}>
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative rounded-2xl bg-white p-8"
              style={{
                border: plan.popular ? "1.5px solid #2563EB" : "1px solid rgba(0,0,0,0.07)",
                boxShadow: plan.popular ? "0 0 32px rgba(37,99,235,0.1)" : "none",
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.04em] text-white"
                  style={{ backgroundColor: "#2563EB" }}
                >
                  Most Popular
                </div>
              )}

              <p className="mb-1.5 text-sm font-bold uppercase tracking-[0.04em]" style={{ color: "#6B7280" }}>
                {plan.name}
              </p>
              <p className="mb-5 text-sm" style={{ color: "#6B7280" }}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-0.04em", color: "#0A0F1F" }}>
                  ${yearly && plan.yearlyPrice > 0 ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                </span>
                <span className="text-[15px]" style={{ color: "#6B7280" }}>/month</span>
                {yearly && plan.yearlyPrice > 0 && (
                  <p className="mt-1 text-sm" style={{ color: "#0D9488" }}>
                    ${plan.yearlyPrice.toLocaleString()} billed annually
                  </p>
                )}
              </div>

              {/* CTA button */}
              <button
                className="mb-6 w-full rounded-[10px] py-3.5 text-[15px] font-bold transition-all"
                style={{
                  backgroundColor:
                    plan.style === "primary" ? "#2563EB" :
                    plan.style === "dark" ? "#0A0F1F" : "white",
                  color:
                    plan.style === "outline" ? "#0A0F1F" : "white",
                  border:
                    plan.style === "outline" ? "1.5px solid rgba(0,0,0,0.15)" : "none",
                  boxShadow:
                    plan.style === "primary" ? "0 4px 16px rgba(37,99,235,0.3)" : "none",
                }}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }} className="pt-5">
                <div className="space-y-2.5">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      {f.included ? (
                        <div
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px]"
                          style={{ background: "rgba(37,99,235,0.1)" }}
                        >
                          <Check className="h-[15px] w-[15px]" style={{ color: "#2563EB" }} />
                        </div>
                      ) : (
                        <div
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px]"
                          style={{ background: "rgba(0,0,0,0.04)" }}
                        >
                          <Lock className="h-3 w-3" style={{ color: "#D1D5DB" }} />
                        </div>
                      )}
                      <span
                        className="text-[13px]"
                        style={{
                          color: f.included ? "#374151" : "#9CA3AF",
                          textDecoration: f.included ? "none" : "line-through",
                        }}
                      >
                        {f.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[14px] p-9 lg:flex-row lg:px-10"
          style={{ backgroundColor: "#0A0F1F" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h3 className="text-lg font-bold text-white">Need a custom solution?</h3>
            <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              Contact Sales for enterprise pricing with custom features.
            </p>
          </div>
          <button
            className="flex items-center gap-2 rounded-[10px] px-6 py-3 text-sm font-semibold text-white transition-colors"
            style={{ border: "1px solid rgba(255,255,255,0.2)" }}
          >
            Contact Sales
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}