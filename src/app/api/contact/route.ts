import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, projectType, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please provide your full name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please write a brief description of your project." },
        { status: 400 }
      );
    }

    // Successfully received
    // In production, send email via Resend / SendGrid / Nodemailer, or log to database
    console.log("[API /api/contact] Received inquiry:", {
      name,
      email,
      subject: subject || "New Inquiry",
      projectType: projectType || "General",
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: `Thank you, ${name}! Your inquiry regarding ${projectType || "your project"} has been received. Our Kathmandu team will respond within 24 hours.`,
    });
  } catch (error) {
    console.error("[API /api/contact] Error processing submission:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred. Please try again." },
      { status: 500 }
    );
  }
}
