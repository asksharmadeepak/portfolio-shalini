"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { toast } from "sonner"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "shalini.hr@example.com",
      link: "mailto:shalini.hr@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/shalini-hr",
      link: "https://linkedin.com/in/shalini-hr",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hyderabad, India",
      link: "#",
    },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      // Log the form submission for now
      console.log("Contact form submission:", data)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast.success("Message sent successfully!")
      e.currentTarget.reset()
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container px-4 py-16 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 md:grid-cols-2"
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              I'm always open to discussing new opportunities, recruitment strategies, or HR challenges.
            </p>
          </div>
          <div className="grid gap-4">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Card className="group transition-colors hover:bg-accent">
                      <CardContent className="flex items-center gap-4 p-4">
                        <Icon className="h-5 w-5" />
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>I'll try to get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Input name="email" type="email" placeholder="Your email" required />
                </div>
                <div className="space-y-2">
                  <Textarea name="message" placeholder="Your message" className="min-h-[150px]" required />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

