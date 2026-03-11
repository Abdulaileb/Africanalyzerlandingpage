// "use client"

// import { useState, useEffect, useRef } from "react"
// import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion"
// import { ShieldCheck, TrendingUp, Bot, Loader2, CheckCircle } from "lucide-react"
// import { toast } from "sonner"
// import { submitWaitlistEmail } from "@/lib/supabase"

// interface HeroProps {
//   onRequestAccess: () => void
// }

// function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
//   const ref = useRef<HTMLSpanElement>(null)
//   const isInView = useInView(ref, { once: true })
//   const [display, setDisplay] = useState("0")

//   useEffect(() => {
//     if (!isInView) return
//     const controls = animate(0, value, {
//       duration: 1.5,
//       ease: "easeOut",
//       onUpdate: (v) => setDisplay(Math.floor(v).toLocaleString()),
//     })
//     return controls.stop
//   }, [isInView, value])

//   return (
//     <span ref={ref}>
//       {prefix}{display}{suffix}
//     </span>
//   )
// }

// const stats = [
//   { value: 38, prefix: "$", suffix: " billion", label: "24h log volume equivalent" },
//   { value: 350, prefix: "", suffix: "+", label: "Log sources supported" },
//   { value: 120, prefix: "", suffix: " million", label: "Events processed" },
//   { value: 0, prefix: "<0.10", suffix: "%", label: "False positive rate", isStatic: true },
// ]

// const barHeights = [40, 65, 45, 80, 55, 90, 70]

// const threatRows = [
//   { label: "Suspicious Login", ip: "192.168.1.x", status: "Flagged", color: "#F59E0B", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.18)" },
//   { label: "Brute Force Attempt", ip: "203.45.12.x", status: "Blocked", color: "#EF4444", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.18)" },
//   { label: "Security Scan", ip: "Internal", status: "Resolved", color: "#0D9488", bg: "rgba(13,148,136,0.08)", border: "rgba(13,148,136,0.18)" },
// ]

// export default function Hero({ onRequestAccess }: HeroProps) {
//   const [email, setEmail] = useState("")
//   const [loading, setLoading] = useState(false)
//   const [success, setSuccess] = useState(false)

//   const mouseX = useMotionValue(0)
//   const mouseY = useMotionValue(0)

//   const bgX = useTransform(mouseX, [0, typeof window !== "undefined" ? window.innerWidth : 1400], [-12, 12])
//   const bgY = useTransform(mouseY, [0, typeof window !== "undefined" ? window.innerHeight : 900], [-8, 8])
//   const cardX = useTransform(mouseX, [0, typeof window !== "undefined" ? window.innerWidth : 1400], [8, -8])
//   const cardY = useTransform(mouseY, [0, typeof window !== "undefined" ? window.innerHeight : 900], [5, -5])

//   const handleMouseMove = (e: React.MouseEvent) => {
//     mouseX.set(e.clientX)
//     mouseY.set(e.clientY)
//   }

//   const handleEmailSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!email) return
//     setLoading(true)
//     try {
//       await submitWaitlistEmail(email)
//       setSuccess(true)
//       toast.success("Successfully joined the waitlist!")
//       setEmail("")
//       setTimeout(() => setSuccess(false), 3000)
//     } catch {
//       toast.error("Failed to submit. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <section
//       className="relative overflow-hidden"
//       style={{ backgroundColor: "#03070F" }}
//       onMouseMove={handleMouseMove}
//     >
//       {/* Background layers */}
//       <motion.div
//         className="pointer-events-none absolute inset-0"
//         style={{ x: bgX, y: bgY }}
//       >
//         <div
//           className="absolute inset-0"
//           style={{
//             background: "radial-gradient(ellipse 60% 50% at 75% 10%, rgba(37,99,235,0.18) 0%, transparent 70%)",
//           }}
//         />
//         <div
//           className="absolute inset-0"
//           style={{
//             background: "radial-gradient(ellipse 40% 40% at 20% 90%, rgba(13,148,136,0.08) 0%, transparent 65%)",
//           }}
//         />
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
//             backgroundSize: "28px 28px",
//           }}
//         />
//       </motion.div>

//       {/* Main content */}
//       <div className="relative mx-auto grid max-w-[1200px] gap-12 px-6 pt-36 pb-0 lg:grid-cols-2 lg:items-center lg:gap-8 lg:pt-[140px]">
//         {/* Left column */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         >
//           {/* Eyebrow */}
//           <div
//             className="mb-7 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
//             style={{
//               border: "1px solid rgba(37,99,235,0.35)",
//               background: "rgba(37,99,235,0.08)",
//             }}
//           >
//             <ShieldCheck className="h-3.5 w-3.5" style={{ color: "#2563EB" }} />
//             <span className="text-xs font-semibold tracking-[0.03em]" style={{ color: "rgba(255,255,255,0.75)" }}>
//               Security Intelligence Platform
//             </span>
//           </div>

//           {/* Headline */}
//           <h1
//             className="mb-6 text-balance"
//             style={{
//               fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
//               fontWeight: 900,
//               letterSpacing: "-0.045em",
//               lineHeight: 0.92,
//               color: "white",
//             }}
//           >
//             Unlock Your
//             <br />
//             <span style={{ color: "#2563EB" }}>Security</span>
//             <br />
//             Potential
//           </h1>

//           {/* Sub-headline */}
//           <p
//             className="mb-9 max-w-[440px]"
//             style={{
//               fontSize: "1.05rem",
//               color: "rgba(255,255,255,0.52)",
//               lineHeight: 1.75,
//             }}
//           >
//             With real-time log analysis and AI-powered threat detection, you can
//             monitor your infrastructure and quickly respond to threats — built
//             for African institutions.
//           </p>

//           {/* CTA block */}
//           <div className="flex flex-col gap-3">
//             <motion.button
//               onClick={onRequestAccess}
//               className="w-fit rounded-[10px] border-none px-7 py-3.5 text-[15px] font-bold text-white"
//               style={{
//                 backgroundColor: "#2563EB",
//                 boxShadow: "0 0 24px rgba(37,99,235,0.35)",
//               }}
//               whileHover={{
//                 boxShadow: "0 0 40px rgba(37,99,235,0.55), 0 0 80px rgba(37,99,235,0.2)",
//                 scale: 1.03,
//               }}
//               whileTap={{ scale: 0.97 }}
//               transition={{ duration: 0.15 }}
//             >
//               Request Early Access
//             </motion.button>

//             {/* Inline email form */}
//             <form onSubmit={handleEmailSubmit} className="flex max-w-[400px]">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your work email"
//                 className="w-[260px] rounded-l-[10px] rounded-r-none px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none"
//                 style={{
//                   background: "rgba(255,255,255,0.07)",
//                   border: "1px solid rgba(255,255,255,0.14)",
//                   borderRight: "none",
//                 }}
//                 onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
//                 onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.14)")}
//               />
//               <button
//                 type="submit"
//                 disabled={loading || success}
//                 className="flex items-center gap-1.5 rounded-r-[10px] rounded-l-none px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.18]"
//                 style={{
//                   background: "rgba(255,255,255,0.12)",
//                   border: "1px solid rgba(255,255,255,0.14)",
//                   borderLeft: "none",
//                 }}
//               >
//                 {loading ? (
//                   <Loader2 className="h-4 w-4 animate-spin" />
//                 ) : success ? (
//                   <>
//                     <CheckCircle className="h-4 w-4" style={{ color: "#0D9488" }} />
//                     <span>Done</span>
//                   </>
//                 ) : (
//                   "Get Access \u2192"
//                 )}
//               </button>
//             </form>

//             <p className="mt-1 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
//               No credit card required &middot; Limited early-access seats available
//             </p>
//           </div>
//         </motion.div>

//         {/* Right column - Card stack */}
//         <motion.div
//           className="relative hidden h-[480px] lg:block"
//           style={{ x: cardX, y: cardY }}
//         >
//           {/* Card A - back */}
//           <motion.div
//             className="absolute right-12 top-0 w-[200px] rounded-[14px] p-4"
//             style={{
//               backgroundColor: "#0D1526",
//               border: "1px solid rgba(255,255,255,0.08)",
//             }}
//             initial={{ opacity: 0, rotate: -6, y: 48, scale: 0.92 }}
//             animate={{ opacity: 0.4, rotate: -5, y: 32, scale: 0.92 }}
//             transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>
//               Total Threats Blocked
//             </p>
//             <p className="mt-1 text-[28px] font-black text-white">1,247</p>
//             <div className="mt-1 flex items-center gap-1">
//               <TrendingUp className="h-3 w-3" style={{ color: "#0D9488" }} />
//               <span className="text-[11px]" style={{ color: "#0D9488" }}>
//                 +12% this week
//               </span>
//             </div>
//           </motion.div>

//           {/* Card B - mid */}
//           <motion.div
//             className="absolute right-0 top-10 w-[260px] rounded-[14px] p-[18px]"
//             style={{
//               backgroundColor: "#0D1526",
//               border: "1px solid rgba(255,255,255,0.1)",
//             }}
//             initial={{ opacity: 0, rotate: -3, y: 24, scale: 0.96 }}
//             animate={{ opacity: 0.65, rotate: -2.5, y: 16, scale: 0.96 }}
//             transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <div className="flex items-center justify-between">
//               <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>Log Activity</span>
//               <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>Last 7 days</span>
//             </div>
//             <div className="mt-3 flex items-end gap-1" style={{ height: 48 }}>
//               {barHeights.map((h, i) => (
//                 <div
//                   key={i}
//                   className="w-2 rounded-t-[3px]"
//                   style={{
//                     height: `${h}%`,
//                     backgroundColor: "#2563EB",
//                   }}
//                 />
//               ))}
//             </div>
//             <p className="mt-2 text-lg font-bold text-white">89.2K events</p>
//           </motion.div>

//           {/* Card C - front */}
//           <motion.div
//             className="absolute right-[-20px] top-[60px] z-10 w-[320px] rounded-2xl p-[22px]"
//             style={{
//               backgroundColor: "#0D1526",
//               border: "1px solid rgba(255,255,255,0.1)",
//               boxShadow: "0 48px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.07)",
//             }}
//             initial={{ opacity: 0, y: 32, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <div className="mb-4 flex items-center justify-between">
//               <span className="text-sm font-bold text-white">Live Threat Monitor</span>
//               <div className="flex items-center gap-1.5">
//                 <div
//                   className="h-1.5 w-1.5 rounded-full animate-pulse-dot"
//                   style={{ backgroundColor: "#10B981" }}
//                 />
//                 <span className="text-[11px]" style={{ color: "#0D9488" }}>Live</span>
//               </div>
//             </div>
//             <div className="flex flex-col gap-2.5">
//               {threatRows.map((row, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-2.5 rounded-lg px-3 py-2.5"
//                   style={{
//                     backgroundColor: row.bg,
//                     border: `1px solid ${row.border}`,
//                   }}
//                 >
//                   <div className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: row.color }} />
//                   <span className="flex-1 text-[13px] text-white">{row.label}</span>
//                   <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>{row.ip}</span>
//                   <span className="text-[10px] font-medium" style={{ color: row.color }}>{row.status}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Floating badge */}
//           <motion.div
//             className="absolute bottom-[-20px] left-5 z-20 flex items-center gap-3 rounded-xl px-4 py-3"
//             style={{
//               backgroundColor: "#2563EB",
//               boxShadow: "0 8px 24px rgba(37,99,235,0.4), 0 0 0 1px rgba(255,255,255,0.12)",
//             }}
//             initial={{ opacity: 0, y: 20, scale: 0.85 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ type: "spring", stiffness: 160, damping: 18, delay: 1.2 }}
//           >
//             <div
//               className="flex h-9 w-9 items-center justify-center rounded-full"
//               style={{ background: "rgba(255,255,255,0.15)" }}
//             >
//               <Bot className="h-[18px] w-[18px] text-white" />
//             </div>
//             <div>
//               <p className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: "rgba(255,255,255,0.65)" }}>
//                 AI Assistant
//               </p>
//               <p className="text-[13px] font-bold text-white">Ready to analyze</p>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Stats bar */}
//       <div
//         className="mt-12 lg:mt-0"
//         style={{
//           backgroundColor: "#070D1A",
//           borderTop: "1px solid rgba(255,255,255,0.07)",
//         }}
//       >
//         <div className="mx-auto grid max-w-[1200px] grid-cols-2 lg:grid-cols-4">
//           {stats.map((stat, i) => (
//             <div
//               key={i}
//               className="py-9 text-center"
//               style={{
//                 borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
//               }}
//             >
//               <p
//                 className="text-white"
//                 style={{
//                   fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
//                   fontWeight: 900,
//                   letterSpacing: "-0.04em",
//                 }}
//               >
//                 {stat.isStatic ? (
//                   <>{stat.prefix}{stat.suffix}</>
//                 ) : (
//                   <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
//                 )}
//               </p>
//               <p className="mt-1 text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion"
import { ShieldCheck, TrendingUp, Bot, Loader2, CheckCircle } from "lucide-react"
import { toast } from "sonner"
import { submitWaitlistEmail } from "@/lib/supabase"

interface HeroProps {
  onRequestAccess: () => void
}

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState("0")

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v).toLocaleString()),
    })
    return controls.stop
  }, [isInView, value])

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  )
}

const stats = [
  { value: 0, prefix: "", suffix: "", label: "Live pilot running with a West African university", isStatic: true, staticDisplay: "🟢 Live" },
  { value: 1000, prefix: "", suffix: "+", label: "Security events analysed in first week" },
  { value: 0, prefix: "", suffix: "", label: "Built by MSc AI & Cybersecurity engineers in Austria & Italy", isStatic: true, staticDisplay: "🎓 MSc" },
  { value: 0, prefix: "<30", suffix: " min", label: "Average setup time from signup to first alert", isStatic: true },
]

const barHeights = [40, 65, 45, 80, 55, 90, 70]

const threatRows = [
  { label: "Suspicious Login", ip: "192.168.1.x", status: "Flagged", color: "#F59E0B", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.18)" },
  { label: "Brute Force Attempt", ip: "203.45.12.x", status: "Blocked", color: "#EF4444", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.18)" },
  { label: "Security Scan", ip: "Internal", status: "Resolved", color: "#0D9488", bg: "rgba(13,148,136,0.08)", border: "rgba(13,148,136,0.18)" },
]

export default function Hero({ onRequestAccess }: HeroProps) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const bgX = useTransform(mouseX, [0, typeof window !== "undefined" ? window.innerWidth : 1400], [-12, 12])
  const bgY = useTransform(mouseY, [0, typeof window !== "undefined" ? window.innerHeight : 900], [-8, 8])
  const cardX = useTransform(mouseX, [0, typeof window !== "undefined" ? window.innerWidth : 1400], [8, -8])
  const cardY = useTransform(mouseY, [0, typeof window !== "undefined" ? window.innerHeight : 900], [5, -5])

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      await submitWaitlistEmail(email)
      setSuccess(true)
      toast.success("Successfully joined the waitlist!")
      setEmail("")
      setTimeout(() => setSuccess(false), 3000)
    } catch {
      toast.error("Failed to submit. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#03070F" }}
      onMouseMove={handleMouseMove}
    >
      {/* Background layers */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ x: bgX, y: bgY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 75% 10%, rgba(37,99,235,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 40% 40% at 20% 90%, rgba(13,148,136,0.08) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </motion.div>

      {/* Main content */}
      <div className="relative mx-auto grid max-w-[1200px] gap-12 px-6 pt-36 pb-0 lg:grid-cols-2 lg:items-center lg:gap-8 lg:pt-[140px]">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
            style={{
              border: "1px solid rgba(37,99,235,0.35)",
              background: "rgba(37,99,235,0.08)",
            }}
          >
            <ShieldCheck className="h-3.5 w-3.5" style={{ color: "#2563EB" }} />
            <span className="text-xs font-semibold tracking-[0.03em]" style={{ color: "rgba(255,255,255,0.75)" }}>
              Security Intelligence Platform
            </span>
          </div>

          {/* Headline */}
          <h1
            className="mb-6 text-balance"
            style={{
              fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: "white",
            }}
          >
            Security visibility,
            <br />
            finally built for
            <br />
            <span style={{ color: "#2563EB" }}>SMEs & universities</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="mb-9 max-w-[440px]"
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.52)",
              lineHeight: 1.75,
            }}
          >
            AfricAnalyzer collects your firewall, Windows, and cloud logs into one
            dashboard and uses AI to highlight real attacks — so SMEs and universities can
            detect threats in minutes, not weeks.
          </p>

          {/* CTA block */}
          <div className="flex flex-col gap-3">
            <motion.button
              onClick={onRequestAccess}
              className="w-fit rounded-[10px] border-none px-7 py-3.5 text-[15px] font-bold text-white"
              style={{
                backgroundColor: "#2563EB",
                boxShadow: "0 0 24px rgba(37,99,235,0.35)",
              }}
              whileHover={{
                boxShadow: "0 0 40px rgba(37,99,235,0.55), 0 0 80px rgba(37,99,235,0.2)",
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              Request Early Access
            </motion.button>

            {/* Inline email form */}
            <form onSubmit={handleEmailSubmit} className="flex max-w-[400px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="w-[260px] rounded-l-[10px] rounded-r-none px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRight: "none",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.14)")}
              />
              <button
                type="submit"
                disabled={loading || success}
                className="flex items-center gap-1.5 rounded-r-[10px] rounded-l-none px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.18]"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderLeft: "none",
                }}
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : success ? (
                  <>
                    <CheckCircle className="h-4 w-4" style={{ color: "#0D9488" }} />
                    <span>Done</span>
                  </>
                ) : (
                  "Get a 30-Minute Demo →"
                )}
              </button>
            </form>

            <p className="mt-1 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              No credit card required · Limited early-access seats for pilots
            </p>
          </div>
        </motion.div>

        {/* Right column - Card stack */}
        <motion.div
          className="relative hidden h-[480px] lg:block"
          style={{ x: cardX, y: cardY }}
        >
          {/* Card A - back */}
          <motion.div
            className="absolute right-12 top-0 w-[200px] rounded-[14px] p-4"
            style={{
              backgroundColor: "#0D1526",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            initial={{ opacity: 0, rotate: -6, y: 48, scale: 0.92 }}
            animate={{ opacity: 0.4, rotate: -5, y: 32, scale: 0.92 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>
              Total Threats Blocked
            </p>
            <p className="mt-1 text-[28px] font-black text-white">1,247</p>
            <div className="mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" style={{ color: "#0D9488" }} />
              <span className="text-[11px]" style={{ color: "#0D9488" }}>
                +12% this week
              </span>
            </div>
          </motion.div>

          {/* Card B - mid */}
          <motion.div
            className="absolute right-0 top-10 w-[260px] rounded-[14px] p-[18px]"
            style={{
              backgroundColor: "#0D1526",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            initial={{ opacity: 0, rotate: -3, y: 24, scale: 0.96 }}
            animate={{ opacity: 0.65, rotate: -2.5, y: 16, scale: 0.96 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>Log Activity</span>
              <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>Last 7 days</span>
            </div>
            <div className="mt-3 flex items-end gap-1" style={{ height: 48 }}>
              {barHeights.map((h, i) => (
                <div
                  key={i}
                  className="w-2 rounded-t-[3px]"
                  style={{
                    height: `${h}%`,
                    backgroundColor: "#2563EB",
                  }}
                />
              ))}
            </div>
            <p className="mt-2 text-lg font-bold text-white">89.2K events</p>
          </motion.div>

          {/* Card C - front */}
          <motion.div
            className="absolute right-[-20px] top-[60px] z-10 w-[320px] rounded-2xl p-[22px]"
            style={{
              backgroundColor: "#0D1526",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 48px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.07)",
            }}
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-bold text-white">Live Threat Monitor</span>
              <div className="flex items-center gap-1.5">
                <div
                  className="h-1.5 w-1.5 rounded-full animate-pulse-dot"
                  style={{ backgroundColor: "#10B981" }}
                />
                <span className="text-[11px]" style={{ color: "#0D9488" }}>Live</span>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              {threatRows.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2.5"
                  style={{
                    backgroundColor: row.bg,
                    border: `1px solid ${row.border}`,
                  }}
                >
                  <div className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: row.color }} />
                  <span className="flex-1 text-[13px] text-white">{row.label}</span>
                  <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>{row.ip}</span>
                  <span className="text-[10px] font-medium" style={{ color: row.color }}>{row.status}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            className="absolute bottom-[-20px] left-5 z-20 flex items-center gap-3 rounded-xl px-4 py-3"
            style={{
              backgroundColor: "#2563EB",
              boxShadow: "0 8px 24px rgba(37,99,235,0.4), 0 0 0 1px rgba(255,255,255,0.12)",
            }}
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 160, damping: 18, delay: 1.2 }}
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <Bot className="h-[18px] w-[18px] text-white" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: "rgba(255,255,255,0.65)" }}>
                AI Assistant
              </p>
              <p className="text-[13px] font-bold text-white">Ready to analyze</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div
        className="mt-12 lg:mt-0"
        style={{
          backgroundColor: "#070D1A",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="py-9 text-center px-4"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <p
                className="text-white"
                style={{
                  fontSize: "clamp(1.2rem, 2.5vw, 1.9rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                }}
              >
                {stat.isStatic ? (
                  <>{stat.staticDisplay ?? `${stat.prefix}${stat.suffix}`}</>
                ) : (
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                )}
              </p>
              <p className="mt-1 text-[12px] leading-snug" style={{ color: "rgba(255,255,255,0.4)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}