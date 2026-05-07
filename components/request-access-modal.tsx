"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, User, Mail, Building2, Loader2, CheckCircle, AlertCircle, ArrowRight } from "lucide-react"
import { toast } from "sonner"
import { submitFullAccessRequest } from "@/lib/supabase"

interface RequestAccessModalProps {
  open: boolean
  onClose: () => void
}

export default function RequestAccessModal({ open, onClose }: RequestAccessModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [organization, setOrganization] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !organization) return
    setLoading(true)
    setError("")
    try {
      await submitFullAccessRequest(email, name, organization)
      setSuccess(true)
      toast.success("Demo request submitted successfully!")
    } catch {
      setError("Failed to submit demo request. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setName("")
      setEmail("")
      setOrganization("")
      setError("")
      setSuccess(false)
    }, 300)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
          onClick={handleClose}
        >
          <motion.div
            className="relative w-full max-w-[440px] overflow-hidden rounded-[18px]"
            style={{
              backgroundColor: "#0D1526",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
            }}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {/* Header */}
                  <div className="relative px-7 pt-6 pb-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <h3 className="text-xl font-bold text-white">Request a Demo</h3>
                    <p className="mt-1.5 text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                      Share a few details and we will schedule a walkthrough.
                    </p>
                    <button
                      onClick={handleClose}
                      className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <X className="h-4 w-4" style={{ color: "rgba(255,255,255,0.5)" }} />
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-[18px] p-7">
                    {/* Name */}
                    <div>
                      <label className="mb-[7px] block text-[13px] font-semibold" style={{ color: "rgba(255,255,255,0.8)" }}>
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: "rgba(255,255,255,0.35)" }} />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          required
                          className="w-full rounded-[10px] py-3 pl-[42px] pr-3.5 text-sm text-white placeholder:text-white/30 transition-colors focus:outline-none"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-[7px] block text-[13px] font-semibold" style={{ color: "rgba(255,255,255,0.8)" }}>
                        Work Email
                      </label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: "rgba(255,255,255,0.35)" }} />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@company.com"
                          required
                          className="w-full rounded-[10px] py-3 pl-[42px] pr-3.5 text-sm text-white placeholder:text-white/30 transition-colors focus:outline-none"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                        />
                      </div>
                    </div>

                    {/* Organization */}
                    <div>
                      <label className="mb-[7px] block text-[13px] font-semibold" style={{ color: "rgba(255,255,255,0.8)" }}>
                        Organization
                      </label>
                      <div className="relative">
                        <Building2 className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: "rgba(255,255,255,0.35)" }} />
                        <input
                          type="text"
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          placeholder="Your University or Company"
                          required
                          className="w-full rounded-[10px] py-3 pl-[42px] pr-3.5 text-sm text-white placeholder:text-white/30 transition-colors focus:outline-none"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                        />
                      </div>
                    </div>

                    {/* Error */}
                    {error && (
                      <div
                        className="flex items-center gap-2 rounded-lg px-3.5 py-2.5"
                        style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" style={{ color: "#EF4444" }} />
                        <span className="text-[13px]" style={{ color: "#FCA5A5" }}>{error}</span>
                      </div>
                    )}

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="flex w-full items-center justify-center gap-2 rounded-[10px] py-3.5 text-[15px] font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
                      style={{
                        backgroundColor: "#2563EB",
                        boxShadow: "0 4px 16px rgba(37,99,235,0.35)",
                      }}
                      whileHover={{
                        boxShadow: "0 0 40px rgba(37,99,235,0.55), 0 0 80px rgba(37,99,235,0.2)",
                        scale: 1.02,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Request Demo"
                      )}
                    </motion.button>

                    <p className="text-center text-[11px]" style={{ color: "rgba(255,255,255,0.25)" }}>
                      We respect your privacy. Your info will never be shared.
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-9 text-center"
                >
                  {/* Success circle */}
                  <motion.div
                    className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full"
                    style={{
                      background: "rgba(13,148,136,0.15)",
                      border: "1px solid rgba(13,148,136,0.3)",
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.05 }}
                  >
                    <CheckCircle className="h-7 w-7" style={{ color: "#0D9488" }} />
                  </motion.div>

                  <h3 className="text-[22px] font-extrabold text-white">Request Received</h3>
                  <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                    We will reach out to schedule your demo at{" "}
                    <span className="text-white">{email}</span>.
                  </p>

                  {/* Info box */}
                  <div
                    className="mx-auto mt-5 max-w-[320px] rounded-[10px] p-4"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {[
                      "Confirmation email sent shortly",
                      "We will confirm a time that works",
                      "Tailored demo based on your environment",
                    ].map((text, i) => (
                      <div key={i} className="flex items-center gap-2.5 py-1.5">
                        <ArrowRight className="h-3 w-3 shrink-0" style={{ color: "#2563EB" }} />
                        <span className="text-[13px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.55)" }}>
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleClose}
                    className="mt-6 w-full rounded-[10px] py-3 text-sm font-semibold text-white transition-colors"
                    style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
