import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    // Log the contact form submission
    console.log("Contact form submission received:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

    // In a real application, you would send an email here
    // For now, we're just logging the submission and returning success

    return NextResponse.json({
      success: true,
      message: "Message received successfully! We'll get back to you soon.",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process your message. Please try again.",
      },
      { status: 500 },
    )
  }
}

