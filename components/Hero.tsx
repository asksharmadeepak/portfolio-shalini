import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <Image
          src="/placeholder.svg?height=150&width=150"
          alt="Shalini - HR Professional"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">Shalini</h1>
        <p className="text-xl mb-8">Senior Technical Recruiter | Talent Acquisition Specialist</p>
        <a
          href="/resume.pdf"
          download
          className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}

