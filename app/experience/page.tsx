"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Senior Executive – Talent Acquisition",
      company: "Vanderlande Industries Private Limited, Pune",
      date: "NOV 2021 – Till Date",
      description: [
        "Responsible for full life cycle recruiting and management of process, including posting of positions, sourcing, screening, interviewing, reference checking, document validation, tracking, salary/rate negotiations, and closing.",
        "Perform in depth sourcing of passive candidates by using creative forms of online search (Boolean, Social Networking, LinkedIn, etc.)",
        "Hands-on experience in Contract, Permanent, Contract to Hire positions.",
        "Short listing candidates according to the skills, experience, rate, location, etc.",
        "Pre-interview preparation and post-interview follow-up.",
        "Self-motivated professional who achieves results and has superior ability to coordinate and perform several tasks simultaneously.",
        "Leading the Recruitment team - Work allocation, planning and prioritisation, People and performance management and vendor management activities.",
        "Reviewing the daily submissions and updating the same to the Manager.",
        "Generating the daily and weekly reports of Submissions & Interview Pipelines.",
        "Having an excellent track record of consultants who have been submitted to the clients, and have good experience in creating an excel database of available consultants and clients and maintaining complete information of the consultants and clients.",
        "Maintaining an excellent track record database for the internal process of training.",
      ],
      achievements: ["ATS Used: Workday", "Team Leadership", "Process Management"],
    },
    {
      title: "Sr. IT Recruiter",
      company: "Nokia Solutions Networks, Pune",
      date: "OCT 2017 – SEP 2021",
      description: [
        "Performed recruitment process including sourcing, screening and coordinating technical interviews, negotiation and follow ups etc.",
        "Provided quality resumes for the IT industry requirements.",
        "Coordinate with Branch and Account Managers to perform Recruitment process including Sourcing, Screening and conducting Technical Interviews, negotiating on the Pay Rate and following up with the candidates.",
        "Screen the candidates by checking their Communication & Technical Skills, negotiating on the rate and their availability for the project and submit them to the Account Manager.",
        "Worked on different types of technologies Maintain database for employee referrals for future use.",
        "Interact with the candidates based on the requirements.",
        "Storing Database of candidates sourced and keeps it for future requirements.",
      ],
      achievements: ["Technical Recruitment", "Stakeholder Management", "Candidate Screening"],
    },
    {
      title: "IT Recruiter",
      company: "Blue Ocean Personnel & Allied Services Pvt Ltd",
      date: "Mar 2015 – Sep 2017",
      description: [
        "Recruit, interview consultants to determine skills, experience, salary, and fit for client environment.",
        "Extensive experience with multiple recruiting systems and online search tools.",
        "Screening of profile, taking preliminary phone interviews and perform reference checks of the candidates.",
        "Ability to strategically source and mine for unique skill sets.",
        "Worked with managers to define candidate qualifications.",
        "Negotiate candidate annual salaries and hourly rates as per company bill rates.",
      ],
      achievements: ["Candidate Sourcing", "Salary Negotiation", "Skill Assessment"],
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
          <h1 className="text-4xl font-bold">Professional Experience</h1>
          <p className="text-lg text-muted-foreground">
            With over 8 years in technical recruitment across various organizations, I've developed expertise in
            identifying and securing top talent for challenging technical roles.
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>
                      {exp.company} | {exp.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Responsibilities:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Key Skills:</h3>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <Badge key={i} variant="secondary">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
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

