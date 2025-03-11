"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  const education = [
    {
      degree: "Bachelor of Technology (B. Tech.)",
      institution: "Electronics & Communication",
      year: "2010",
      grade: "",
    },
  ]

  const skills = [
    {
      category: "Recruitment",
      items: ["Technical Recruiting", "Sourcing Strategies", "Candidate Assessment", "ATS Management"],
    },
    {
      category: "Communication",
      items: ["Stakeholder Management", "Candidate Engagement", "Offer Negotiation", "Employer Branding"],
    },
    { category: "Technical", items: ["LinkedIn Recruiter", "Workday", "Boolean Search", "HR Analytics"] },
  ]

  return (
    <div className="container px-4 py-16 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg text-muted-foreground">
            With over 8 years in technical recruitment, I've developed expertise in identifying and securing top talent
            for product companies. My approach combines strategic sourcing, relationship building, and deep
            understanding of technical roles to connect organizations with exceptional candidates.
          </p>
          <p className="text-lg text-muted-foreground">
            I'm passionate about creating positive candidate experiences and helping companies build diverse,
            high-performing teams. My background in Electronics & Communication gives me unique insight into technical
            roles, while my HR expertise ensures compliance and best practices throughout the hiring process.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">Skills & Expertise</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {skillGroup.items.map((item, i) => (
                        <li key={i} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm">{edu.year}</p>
                    {edu.grade && <p className="font-medium">{edu.grade}</p>}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

