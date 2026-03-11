// "use client"

// import { useState, useEffect, useRef } from "react"
// import { motion } from "framer-motion"
// import { Mail, Loader2, CheckCircle } from "lucide-react"
// import { toast } from "sonner"
// import { submitWaitlistEmail } from "@/lib/supabase"

// function useCountdown(targetISO: string) {
//   const targetRef = useRef(new Date(targetISO).getTime())
//   const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

//   useEffect(() => {
//     const calc = () => {
//       const now = Date.now()
//       const diff = Math.max(0, targetRef.current - now)
//       setTime({
//         days: Math.floor(diff / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((diff / (1000 * 60)) % 60),
//         seconds: Math.floor((diff / 1000) % 60),
//       })
//     }
//     calc()
//     const id = setInterval(calc, 1000)
//     return () => clearInterval(id)
//   }, []) // no dependency on target — ref is stable

//   return time
// }

// export default function EmailCapture() {
//   const countdown = useCountdown("2026-04-01")
//   const [email, setEmail] = useState("")
//   const [loading, setLoading] = useState(false)
//   const [success, setSuccess] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
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

//   const units = [
//     { value: countdown.days, label: "Days" },
//     { value: countdown.hours, label: "Hours" },
//     { value: countdown.minutes, label: "Minutes" },
//     { value: countdown.seconds, label: "Seconds" },
//   ]

//   return (
//     <section style={{ background: "linear-gradient(180deg, #070D1A 0%, #03070F 100%)" }} className="py-24 lg:py-[100px]">
//       <div className="mx-auto max-w-[1200px] px-6">
//         {/* Countdown */}
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <p className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>
//             Launching Public Beta
//           </p>
//           <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
//             April 1, 2026
//           </p>

//           <div className="mt-6 flex justify-center gap-3">
//             {units.map((u, i) => (
//               <div
//                 key={i}
//                 className="flex h-[76px] w-[76px] flex-col items-center justify-center rounded-xl"
//                 style={{
//                   background: "rgba(255,255,255,0.04)",
//                   border: "1px solid rgba(255,255,255,0.08)",
//                 }}
//               >
//                 <span className="text-white" style={{ fontSize: "1.9rem", fontWeight: 900, letterSpacing: "-0.04em" }}>
//                   {String(u.value).padStart(2, "0")}
//                 </span>
//                 <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.07em]" style={{ color: "rgba(255,255,255,0.3)" }}>
//                   {u.label}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* CTA card */}
//         <motion.div
//           className="mx-auto mt-14 max-w-[600px] rounded-[20px] p-10 text-center lg:p-[52px_48px]"
//           style={{
//             backgroundColor: "#0D1526",
//             border: "1px solid rgba(37,99,235,0.2)",
//             boxShadow: "0 0 80px rgba(37,99,235,0.06)",
//           }}
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <h2 className="mb-3 text-balance" style={{ fontSize: "1.9rem", fontWeight: 800, color: "white", letterSpacing: "-0.03em" }}>
//             Be among the first to experience{" "}
//             <span style={{ color: "#2563EB" }}>Afric-Analyzer</span>
//           </h2>
//           <p className="mb-8 text-[15px]" style={{ color: "rgba(255,255,255,0.5)" }}>
//             Request early access and we{"'"}ll contact you within 24 hours to activate your dashboard.
//           </p>

//           <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
//             <div className="relative flex-1">
//               <Mail
//                 className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2"
//                 style={{ color: "rgba(255,255,255,0.3)" }}
//               />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email address"
//                 className="w-full rounded-[10px] py-3.5 pl-11 pr-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
//                 style={{
//                   background: "rgba(255,255,255,0.06)",
//                   border: "1px solid rgba(255,255,255,0.12)",
//                 }}
//                 onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
//                 onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
//               />
//             </div>
//             <motion.button
//               type="submit"
//               disabled={loading || success}
//               className="flex items-center justify-center gap-2 rounded-[10px] px-6 py-3.5 text-[15px] font-bold text-white disabled:opacity-50"
//               style={{
//                 backgroundColor: "#2563EB",
//                 boxShadow: "0 0 24px rgba(37,99,235,0.35)",
//               }}
//               whileHover={{
//                 boxShadow: "0 0 40px rgba(37,99,235,0.55), 0 0 80px rgba(37,99,235,0.2)",
//                 scale: 1.03,
//               }}
//               whileTap={{ scale: 0.97 }}
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="h-4 w-4 animate-spin" />
//                   Submitting...
//                 </>
//               ) : success ? (
//                 <>
//                   <CheckCircle className="h-4 w-4" style={{ color: "#0D9488" }} />
//                   Submitted!
//                 </>
//               ) : (
//                 "Request Access"
//               )}
//             </motion.button>
//           </form>

//           <p className="mt-3.5 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
//             We respect your privacy. No spam — ever.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Mail, Loader2, CheckCircle } from "lucide-react"
import { toast } from "sonner"
import { submitWaitlistEmail } from "@/lib/supabase"

function useCountdown(targetISO: string) {
  const targetRef = useRef(new Date(targetISO).getTime())
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calc = () => {
      const now = Date.now()
      const diff = Math.max(0, targetRef.current - now)
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, []) // no dependency on target — ref is stable

  return time
}

export default function EmailCapture() {
  const countdown = useCountdown("2026-04-01")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
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

  const units = [
    { value: countdown.days, label: "Days" },
    { value: countdown.hours, label: "Hours" },
    { value: countdown.minutes, label: "Minutes" },
    { value: countdown.seconds, label: "Seconds" },
  ]

  return (
    <section style={{ background: "linear-gradient(180deg, #070D1A 0%, #03070F 100%)" }} className="py-24 lg:py-[100px]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Countdown */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>
            Launching Public Beta
          </p>
          <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
            April 1, 2026
          </p>

          <div className="mt-6 flex justify-center gap-3">
            {units.map((u, i) => (
              <div
                key={i}
                className="flex h-[76px] w-[76px] flex-col items-center justify-center rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span className="text-white" style={{ fontSize: "1.9rem", fontWeight: 900, letterSpacing: "-0.04em" }}>
                  {String(u.value).padStart(2, "0")}
                </span>
                <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.07em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {u.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA card */}
        <motion.div
          className="mx-auto mt-14 max-w-[600px] rounded-[20px] p-10 text-center lg:p-[52px_48px]"
          style={{
            backgroundColor: "#0D1526",
            border: "1px solid rgba(37,99,235,0.2)",
            boxShadow: "0 0 80px rgba(37,99,235,0.06)",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="mb-3 text-balance" style={{ fontSize: "1.9rem", fontWeight: 800, color: "white", letterSpacing: "-0.03em" }}>
            Be among the first to secure your logs with{" "}
            <span style={{ color: "#2563EB" }}>AfricAnalyzer</span>
          </h2>
          <p className="mb-8 text-[15px]" style={{ color: "rgba(255,255,255,0.5)" }}>
            Request early access and we{"'"}ll contact you within 24 hours to set up a pilot for your SME or university.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Mail
                className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2"
                style={{ color: "rgba(255,255,255,0.3)" }}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full rounded-[10px] py-3.5 pl-11 pr-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
              />
            </div>
            <motion.button
              type="submit"
              disabled={loading || success}
              className="flex items-center justify-center gap-2 rounded-[10px] px-6 py-3.5 text-[15px] font-bold text-white disabled:opacity-50"
              style={{
                backgroundColor: "#2563EB",
                boxShadow: "0 0 24px rgba(37,99,235,0.35)",
              }}
              whileHover={{
                boxShadow: "0 0 40px rgba(37,99,235,0.55), 0 0 80px rgba(37,99,235,0.2)",
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : success ? (
                <>
                  <CheckCircle className="h-4 w-4" style={{ color: "#0D9488" }} />
                  Submitted!
                </>
              ) : (
                "Request Access"
              )}
            </motion.button>
          </form>

          <p className="mt-3.5 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            We{"'"}re in the validation phase — limited pilot slots available for 2026.
          </p>
        </motion.div>
      </div>
    </section>
  )
}