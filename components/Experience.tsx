import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Executive – Talent Acquisition",
      company: "Vanderlande Industries Private Limited, Pune",
      date: "NOV 2021 – Till Date",
      description:
        "Responsible for full life cycle recruiting including sourcing, screening, interviewing, and closing. Leading the recruitment team with work allocation, planning, and vendor management. Using Workday ATS and generating reports of submissions and interview pipelines.",
    },
    {
      title: "Sr. IT Recruiter",
      company: "Nokia Solutions Networks, Pune",
      date: "OCT 2017 – SEP 2021",
      description:
        "Performed recruitment process including sourcing, screening and coordinating technical interviews. Coordinated with Branch and Account Managers and maintained database for employee referrals for future use.",
    },
    {
      title: "IT Recruiter",
      company: "Blue Ocean Personnel & Allied Services Pvt Ltd",
      date: "Mar 2015 – Sep 2017",
      description:
        "Recruited and interviewed consultants to determine skills, experience, salary, and fit for client environment. Worked with managers to define candidate qualifications and negotiated candidate salaries and rates.",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>
                  {exp.company} | {exp.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

