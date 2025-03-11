"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-8 md:py-0">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4 order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hi, I&apos;m Shalini</h1>
              <p className="text-base sm:text-lg text-muted-foreground md:text-xl">
                Senior Technical Recruiter with 10+ years of experience in full-cycle recruitment for product companies.
                Specialized in hiring top-tier technical talent across various domains.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
              <Button asChild size="lg">
                <a href="/experience">
                  View My Experience <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href="/contact">Get in Touch</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Shalini - HR Professional"
                fill
                className="object-cover rounded-full border-4 border-background shadow-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

