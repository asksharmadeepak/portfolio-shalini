import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology (B. Tech.)",
      institution: "Electronics & Communication",
      year: "2010",
      grade: "",
    },
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <CardDescription>{edu.institution}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{edu.year}</p>
                {edu.grade && <p>{edu.grade}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

