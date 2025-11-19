import { NextRequest, NextResponse } from "next/server";
import { contactInfo } from "@/data/contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Here you can integrate with an email service like:
    // - Resend (https://resend.com)
    // - SendGrid
    // - Nodemailer
    // - Formspree
    // For now, we'll return success and log the data
    // In production, you should send the email here
    
    console.log("Contact form submission:", {
      name,
      email,
      message,
      to: contactInfo.email,
    });

    // TODO: Integrate with your email service here
    // Example with a service:
    // await sendEmail({
    //   to: contactInfo.email,
    //   from: email,
    //   subject: `Contact from ${name}`,
    //   text: message,
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: "Message sent successfully! I'll get back to you soon." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

