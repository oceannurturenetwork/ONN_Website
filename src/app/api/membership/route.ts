import { NextResponse } from "next/server";
import { client } from "@/lib/sanity-client";
import { Resend } from "resend";
import {
  renderToBuffer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import React from "react";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY!);

// Utility to generate a PDF from member data
const styles = StyleSheet.create({
  page: { padding: 30 },
  title: { fontSize: 18, marginBottom: 20 },
  member: { marginBottom: 10 },
});

function createPDFDocument(members: any[]) {
  return React.createElement(
    Document,
    null,
    React.createElement(
      Page,
      { size: "A4", style: styles.page },
      React.createElement(
        Text,
        { style: styles.title },
        "Membership Directory",
      ),
      ...members.map((m, i) =>
        React.createElement(
          View,
          { key: i, style: styles.member },
          React.createElement(
            Text,
            null,
            `${i + 1}. ${m.name} (${m.email}) – ${m.affiliation}, ${m.country}`,
          ),
        ),
      ),
    ),
  );
}

// Export the POST handler for the API route
export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 },
    );
  }

  try {
    const formData = await req.formData();
    const body = Object.fromEntries(formData);
    const file = (body.photo as Blob) || null;
    const buffer = Buffer.from(await file.arrayBuffer());

    // Upload image to Sanity
    const asset = await client.assets.upload("image", buffer, {
      filename: `${body.title}-${new Date()}`,
    });

    // Create a document in Sanity with the form data
    const doc = {
      _type: "member",
      title: body.title,
      name: body.name,
      email: body.email,
      affiliation: body.affiliation,
      designation: body.designation,
      country: body.country,
      degree: body.degree,
      subject: body.subject,
      yearOfPassing: Number(body.yearOfPassing),
      indianOceanRegionResearch:
        body.indianOceanRegionResearch === "false" ? false : true,
      researchArea: body.researchArea,
      photo: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: asset._id,
        },
      },
    };

    const created = await client.create(doc);

    // Fetch updated members list
    const allMembers = await client.fetch(
      `*[_type == "member"] | order(_createdAt desc)`,
    );

    // 3. Generate PDF buffer
    const pdfDoc = createPDFDocument(allMembers);
    const pdfBuffer = await renderToBuffer(pdfDoc);

    // Convert buffer to base64
    const base64PDF = pdfBuffer.toString("base64");

    // Send PDF via Resend
    await resend.emails.send({
      from: "Members <noreply@resend.dev>",
      to: "communications@oceannurturenetwork.org",
      subject: "Membership Directory",
      html: `<p>The updated membership directory is attached as a PDF.</p>`,
      attachments: [
        {
          filename: "membership-directory.pdf",
          content: base64PDF,
        },
      ],
    });

    return NextResponse.json({ success: true, membershipId: created._id });
  } catch (error: any) {
    console.error("Error creating document:", error);
    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 },
    );
  }
}
