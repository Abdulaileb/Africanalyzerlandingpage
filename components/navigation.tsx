"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShieldCheck } from "lucide-react"

interface NavigationProps {
  onRequestAccess: () => void
}

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
]

export default function Navigation({ onRequestAccess }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100] h-16"
        style={{
          backgroundColor: scrolled ? "rgba(3,7,15,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "linear-gradient(135deg, #2563EB, #0D9488)" }}>
              <ShieldCheck className="h-[18px] w-[18px] text-white" />
            </div>
            <span className="text-[15px] font-bold tracking-[-0.02em] text-white">
              AFRIC-ANALYZER
            </span>
          </a>

          {/* Center links (desktop) */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 transition-colors duration-150 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side (desktop) */}
          <div className="hidden items-center gap-4 md:flex">
            <motion.button
              onClick={onRequestAccess}
              className="rounded-full px-5 py-2 text-[13px] font-semibold text-white"
              style={{ backgroundColor: "#2563EB" }}
              whileHover={{
                boxShadow: "0 0 32px rgba(37,99,235,0.45)",
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              Request Access
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg md:hidden"
            style={{ background: "rgba(255,255,255,0.06)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-[18px] w-[18px] text-white" />
            ) : (
              <Menu className="h-[18px] w-[18px] text-white" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-[99] border-b md:hidden"
            style={{
              backgroundColor: "rgba(3,7,15,0.96)",
              backdropFilter: "blur(20px)",
              borderColor: "rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm text-white/60 transition-colors hover:text-white"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t pt-3" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                <button className="rounded-lg px-4 py-3 text-left text-sm text-white/50">
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setMobileOpen(false)
                    onRequestAccess()
                  }}
                  className="rounded-[10px] py-3 text-sm font-semibold text-white"
                  style={{ backgroundColor: "#2563EB" }}
                >
                  Request Access
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
