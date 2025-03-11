"use client"

import { Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dixitshalini/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:shalini.dixit@outlook.com",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-md">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <p className="text-center text-sm leading-loose md:text-left">Built with passion by Shalini</p>
          </motion.div>
        </div>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 hover:bg-accent"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </a>
            )
          })}
        </motion.div>
      </div>
    </footer>
  )
}

