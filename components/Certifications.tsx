export default function Certifications() {
  const achievements = [
    "Formal appreciation on Workday by the HR Manager",
    "Appreciation from Candidates for providing excellent support during recruitment process",
    "Awarded as the Best Performer in APAC customer care team",
    "Closed a job position in the First week after joining the Talent Acquisition team",
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Achievements & Recognition</h2>
        <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-lg text-gray-700">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

