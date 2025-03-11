"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CertificationsPage() {
  const achievements = [
    {
      title: "Formal Appreciation on Workday",
      organization: "Vanderlande Industries",
      date: "2022",
      details: "Received formal appreciation on Workday by the HR Manager for exceptional performance",
    },
    {
      title: "Candidate Appreciation",
      organization: "Vanderlande Industries",
      date: "2021-2023",
      details:
        "Received multiple appreciations from candidates for providing excellent support during the recruitment process",
    },
    {
      title: "Best Performer Award",
      organization: "APAC Customer Care Team",
      date: "2020",
      details: "Awarded as the Best Performer in APAC customer care team for outstanding contributions",
    },
    {
      title: "Quick Hire Achievement",
      organization: "Talent Acquisition Team",
      date: "2021",
      details: "Successfully closed a job position in the first week after joining the Talent Acquisition team",
    },
  ]

  return (
    <div className="container px-4 py-16 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <section className="space-y-8">
          <h1 className="text-4xl font-bold">Achievements & Recognition</h1>
          <p className="text-lg text-muted-foreground">
            Throughout my career, I've been recognized for my dedication, efficiency, and excellence in talent
            acquisition.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium">{achievement.organization}</p>
                    <p className="text-sm text-muted-foreground">{achievement.date}</p>
                    <p className="mt-2 text-sm">{achievement.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}

