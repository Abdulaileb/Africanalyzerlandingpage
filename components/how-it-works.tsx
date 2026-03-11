// "use client"

// import { motion } from "framer-motion"
// import { Link2, Activity, Bot, Shield, Bell, MessageSquare, Send } from "lucide-react"

// const steps = [
//   {
//     number: "01",
//     tag: "CONNECT",
//     title: "Sign Up and Connect",
//     body: "Create your account in minutes and connect your log sources via API or our lightweight agent. No complex infrastructure needed. Get running in under 10 minutes.",
//     mockup: "welcome",
//   },
//   {
//     number: "02",
//     tag: "MONITOR",
//     title: "Monitor in Real Time",
//     body: "Watch threats, anomalies, and system health surface instantly on your live dashboard. Alerts reach you the moment something needs attention.",
//     mockup: "feed",
//   },
//   {
//     number: "03",
//     tag: "INVESTIGATE",
//     title: "Investigate with AI",
//     body: "Ask questions in plain language. The AI assistant summarizes incidents, suggests responses, and generates detailed reports automatically.",
//     mockup: "chat",
//   },
// ]

// function MockupWelcome() {
//   return (
//     <div className="rounded-[14px] p-6" style={{ backgroundColor: "#0D1526", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 24px 60px rgba(0,0,0,0.12)" }}>
//       {/* Window chrome */}
//       <div className="mb-4 flex items-center gap-1.5">
//         <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#EF4444" }} />
//         <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#F59E0B" }} />
//         <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#10B981" }} />
//       </div>
//       <div className="flex items-center gap-3 rounded-xl p-4" style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.15)" }}>
//         <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: "#2563EB" }}>
//           <Shield className="h-5 w-5 text-white" />
//         </div>
//         <div>
//           <p className="text-sm font-bold text-white">Welcome to Afric-Analyzer</p>
//           <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>Connect your first log source to get started</p>
//         </div>
//       </div>
//       <div className="mt-4 space-y-2">
//         {[{ label: "API Integration", icon: Link2 }, { label: "Lightweight Agent", icon: Activity }].map((item, i) => (
//           <div key={i} className="flex items-center gap-3 rounded-lg p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
//             <item.icon className="h-4 w-4" style={{ color: "#2563EB" }} />
//             <span className="text-[13px] text-white">{item.label}</span>
//             <span className="ml-auto text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>Configure &rarr;</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// function MockupFeed() {
//   const events = [
//     { label: "Brute Force Detected", time: "2m ago", color: "#EF4444" },
//     { label: "New Login from Nigeria", time: "5m ago", color: "#F59E0B" },
//     { label: "System Scan Complete", time: "12m ago", color: "#0D9488" },
//   ]
//   return (
//     <div className="rounded-[14px] p-6" style={{ backgroundColor: "#0D1526", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 24px 60px rgba(0,0,0,0.12)" }}>
//       <div className="mb-4 flex items-center gap-1.5">
//         <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#EF4444" }} />
//         <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#F59E0B" }} />
//         <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#10B981" }} />
//       </div>
//       <div className="mb-3 flex items-center justify-between">
//         <span className="text-sm font-bold text-white">Threat Feed</span>
//         <div className="flex items-center gap-1.5">
//           <div className="h-1.5 w-1.5 rounded-full animate-pulse-dot" style={{ backgroundColor: "#10B981" }} />
//           <span className="text-[11px]" style={{ color: "#0D9488" }}>Live</span>
//         </div>
//       </div>
//       <div className="space-y-2">
//         {events.map((e, i) => (
//           <div key={i} className="flex items-center gap-3 rounded-lg p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
//             <Bell className="h-3.5 w-3.5" style={{ color: "#2563EB" }} />
//             <div className="flex-1">
//               <span className="text-[13px] text-white">{e.label}</span>
//             </div>
//             <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: e.color }} />
//             <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>{e.time}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// function MockupChat() {
//   return (
//     <div className="rounded-[14px] p-6" style={{ backgroundColor: "#0D1526", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 24px 60px rgba(0,0,0,0.12)" }}>
//       <div className="mb-4 flex items-center gap-1.5">
//         <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#EF4444" }} />
//         <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#F59E0B" }} />
//         <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#10B981" }} />
//       </div>
//       <div className="mb-3 flex items-center gap-2">
//         <Bot className="h-4 w-4" style={{ color: "#2563EB" }} />
//         <span className="text-sm font-bold text-white">AI Security Assistant</span>
//       </div>
//       <div className="space-y-3">
//         <div className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
//           <p className="text-[13px] text-white/60">
//             {"Summarize the security events from the last 24 hours"}
//           </p>
//         </div>
//         <div className="rounded-lg p-3" style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.15)" }}>
//           <div className="flex items-start gap-2">
//             <MessageSquare className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "#2563EB" }} />
//             <p className="text-[13px] text-white/70">
//               {"In the last 24h, there were 3 critical alerts: 2 brute force attempts and 1 suspicious login. All were automatically blocked..."}
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center gap-2 rounded-lg p-2.5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
//           <input
//             readOnly
//             placeholder="Ask about your security..."
//             className="flex-1 bg-transparent text-[13px] text-white/40 placeholder:text-white/25 focus:outline-none"
//           />
//           <Send className="h-3.5 w-3.5" style={{ color: "#2563EB" }} />
//         </div>
//       </div>
//     </div>
//   )
// }

// const mockupComponents: Record<string, React.FC> = {
//   welcome: MockupWelcome,
//   feed: MockupFeed,
//   chat: MockupChat,
// }

// const sectionVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
// }

// export default function HowItWorks() {
//   return (
//     <section id="how-it-works" style={{ backgroundColor: "#F2F5FA" }} className="py-24 lg:py-[100px]">
//       <div className="mx-auto max-w-[1200px] px-6">
//         {/* Section divider label */}
//         <motion.div
//           className="flex items-center gap-4"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="h-px flex-1" style={{ background: "rgba(0,0,0,0.12)" }} />
//           <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: "#6B7280" }}>
//             Our workflow
//           </span>
//           <div className="h-px flex-1" style={{ background: "rgba(0,0,0,0.12)" }} />
//         </motion.div>

//         {/* Headline */}
//         <motion.h2
//           className="mx-auto mt-8 mb-16 max-w-[640px] text-center text-balance"
//           style={{
//             fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
//             fontWeight: 800,
//             letterSpacing: "-0.03em",
//             lineHeight: 1.05,
//             color: "#0A0F1F",
//           }}
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//         >
//           How our platform makes security easier
//         </motion.h2>

//         {/* Steps */}
//         <div className="space-y-20 lg:space-y-24">
//           {steps.map((step, i) => {
//             const Mockup = mockupComponents[step.mockup]
//             const isEven = i % 2 === 1
//             return (
//               <motion.div
//                 key={i}
//                 className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${isEven ? "" : ""}`}
//                 variants={sectionVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-80px" }}
//               >
//                 <div className={isEven ? "lg:order-2" : ""}>
//                   <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: "#2563EB" }}>
//                     {step.number} — {step.tag}
//                   </p>
//                   <h3 className="mb-3.5" style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0A0F1F", letterSpacing: "-0.025em" }}>
//                     {step.title}
//                   </h3>
//                   <p style={{ fontSize: "1rem", color: "#6B7280", lineHeight: 1.75 }} className="max-w-[400px]">
//                     {step.body}
//                   </p>
//                 </div>
//                 <div className={isEven ? "lg:order-1" : ""}>
//                   <Mockup />
//                 </div>
//               </motion.div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { Link2, Activity, Bot, Shield, Bell, MessageSquare, Send } from "lucide-react"

const steps = [
  {
    number: "01",
    tag: "CONNECT",
    title: "Sign up and connect your first log source",
    body: "Create your account and send logs via our HTTPS API or lightweight agent. Connect firewalls, Windows servers, and cloud apps in under 30 minutes — no hardware, no VPN tunnels.",
    mockup: "welcome",
  },
  {
    number: "02",
    tag: "MONITOR",
    title: "See threats appear in real time",
    body: "Watch failed logins, firewall blocks, and suspicious activity appear on your live dashboard. Alerts reach your inbox the moment something serious needs attention.",
    mockup: "feed",
  },
  {
    number: "03",
    tag: "INVESTIGATE",
    title: "Let AI explain what's going on",
    body: 'Ask questions in plain language: "Show me brute-force attacks from last night." AfricAnalyzer summarises incidents, shows the chain of events, and suggests next steps you can take.',
    mockup: "chat",
  },
]

function MockupWelcome() {
  return (
    <div className="rounded-[14px] p-6" style={{ backgroundColor: "#0D1526", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 24px 60px rgba(0,0,0,0.12)" }}>
      {/* Window chrome */}
      <div className="mb-4 flex items-center gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#EF4444" }} />
        <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#F59E0B" }} />
        <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#10B981" }} />
      </div>
      <div className="flex items-center gap-3 rounded-xl p-4" style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.15)" }}>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: "#2563EB" }}>
          <Shield className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-sm font-bold text-white">Welcome to Afric-Analyzer</p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>Connect your first log source — ready in 30 minutes</p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {[{ label: "API Integration", icon: Link2 }, { label: "Lightweight Agent", icon: Activity }].map((item, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <item.icon className="h-4 w-4" style={{ color: "#2563EB" }} />
            <span className="text-[13px] text-white">{item.label}</span>
            <span className="ml-auto text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>Configure &rarr;</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockupFeed() {
  const events = [
    { label: "Brute Force Detected", time: "2m ago", color: "#EF4444" },
    { label: "New Login from Nigeria", time: "5m ago", color: "#F59E0B" },
    { label: "System Scan Complete", time: "12m ago", color: "#0D9488" },
  ]
  return (
    <div className="rounded-[14px] p-6" style={{ backgroundColor: "#0D1526", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 24px 60px rgba(0,0,0,0.12)" }}>
      <div className="mb-4 flex items-center gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#EF4444" }} />
        <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#F59E0B" }} />
        <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#10B981" }} />
      </div>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-bold text-white">Threat Feed</span>
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full animate-pulse-dot" style={{ backgroundColor: "#10B981" }} />
          <span className="text-[11px]" style={{ color: "#0D9488" }}>Live</span>
        </div>
      </div>
      <div className="space-y-2">
        {events.map((e, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <Bell className="h-3.5 w-3.5" style={{ color: "#2563EB" }} />
            <div className="flex-1">
              <span className="text-[13px] text-white">{e.label}</span>
            </div>
            <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: e.color }} />
            <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>{e.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockupChat() {
  return (
    <div className="rounded-[14px] p-6" style={{ backgroundColor: "#0D1526", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 24px 60px rgba(0,0,0,0.12)" }}>
      <div className="mb-4 flex items-center gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#EF4444" }} />
        <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#F59E0B" }} />
        <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#10B981" }} />
      </div>
      <div className="mb-3 flex items-center gap-2">
        <Bot className="h-4 w-4" style={{ color: "#2563EB" }} />
        <span className="text-sm font-bold text-white">AI Security Assistant</span>
      </div>
      <div className="space-y-3">
        <div className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <p className="text-[13px] text-white/60">
            {"Summarize the security events from the last 24 hours"}
          </p>
        </div>
        <div className="rounded-lg p-3" style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.15)" }}>
          <div className="flex items-start gap-2">
            <MessageSquare className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "#2563EB" }} />
            <p className="text-[13px] text-white/70">
              {"In the last 24h, there were 3 critical alerts: 2 brute force attempts and 1 suspicious login. All were automatically blocked..."}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg p-2.5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <input
            readOnly
            placeholder="Ask about your security..."
            className="flex-1 bg-transparent text-[13px] text-white/40 placeholder:text-white/25 focus:outline-none"
          />
          <Send className="h-3.5 w-3.5" style={{ color: "#2563EB" }} />
        </div>
      </div>
    </div>
  )
}

const mockupComponents: Record<string, React.FC> = {
  welcome: MockupWelcome,
  feed: MockupFeed,
  chat: MockupChat,
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ backgroundColor: "#F2F5FA" }} className="py-24 lg:py-[100px]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section divider label */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px flex-1" style={{ background: "rgba(0,0,0,0.12)" }} />
          <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: "#6B7280" }}>
            Our workflow
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(0,0,0,0.12)" }} />
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="mx-auto mt-8 mb-16 max-w-[640px] text-center text-balance"
          style={{
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "#0A0F1F",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          How our platform makes security easier
        </motion.h2>

        {/* Steps */}
        <div className="space-y-20 lg:space-y-24">
          {steps.map((step, i) => {
            const Mockup = mockupComponents[step.mockup]
            const isEven = i % 2 === 1
            return (
              <motion.div
                key={i}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${isEven ? "" : ""}`}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                <div className={isEven ? "lg:order-2" : ""}>
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: "#2563EB" }}>
                    {step.number} — {step.tag}
                  </p>
                  <h3 className="mb-3.5" style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0A0F1F", letterSpacing: "-0.025em" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "1rem", color: "#6B7280", lineHeight: 1.75 }} className="max-w-[400px]">
                    {step.body}
                  </p>
                </div>
                <div className={isEven ? "lg:order-1" : ""}>
                  <Mockup />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}