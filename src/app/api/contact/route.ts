import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.APP_EMAIL_USER,
        pass: process.env.APP_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.APP_EMAIL,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    console.log("Received contact form submission:", { name, email, message });

    return NextResponse.json(
      { message: "Message received successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return NextResponse.json(
      { message: "Failed to process message." },
      { status: 500 }
    );
  }
}
