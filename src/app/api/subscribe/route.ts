// /app/api/subscribe/route.ts (Next.js 13/14 app router)
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email }: { email: string } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    // Replace with your Resend contact list ID if you're using lists
    const response = await resend.contacts.create({
      email,
      firstName: email.split("@")[0],
      lastName: "",
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID || "",
    });

    return NextResponse.json(
      { success: true, data: response },
      { status: 200 },
    );
  } catch (error) {
    console.error("[RESEND_SUBSCRIBE_ERROR]", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
