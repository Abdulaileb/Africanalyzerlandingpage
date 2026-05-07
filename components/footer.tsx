"use client"

import Image from "next/image"
import { Twitter, Linkedin, Github } from "lucide-react"

const footerLinks = {
  Product: ["Features", "How It Works", "Use Cases", "Pricing"],
  Company: ["About", "Contact", "Security", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#03070F", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-8">
        {/* Top */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo col */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-[15px] font-bold tracking-[-0.02em] text-white">
                VIGIL
              </span>
            </div>
            <p className="mt-3.5 max-w-[200px] text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Modern security for the organizations that need it most.
            </p>
            <div className="mt-5 flex gap-2">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-lg transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Icon className="h-4 w-4" style={{ color: "rgba(255,255,255,0.45)" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4
                className="mb-4 text-[11px] font-bold uppercase tracking-[0.09em]"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {heading}
              </h4>
              <ul className="space-y-0">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] leading-[2.2] transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            {"© 2025 Vigil. All rights reserved."}
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
