import { NextResponse } from 'next/server';

// Sanity client setup
import { client } from "@/lib/sanity-client"; 

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
  }

  try {
    const formData = await req.formData();
    const body = Object.fromEntries(formData);

    // Handle uploaded documents
    const uploadedDocuments = [];
    const documents = formData.getAll("documents") as File[];

    for (const doc of documents) {
      const buffer = Buffer.from(await doc.arrayBuffer());

      const uploaded = await client.assets.upload("file", buffer, {
        filename: `${body.fullName}-${doc.name}`,
      });

      uploadedDocuments.push({
        _type: "file",
        asset: {
          _type: "reference",
          _ref: uploaded._id,
        },
      });
    }

    // Build the internship document for Sanity
    const internshipDoc = {
      _type: "internship",
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      institution: body.institution,
      degree: body.degree,
      yearOfStudy: body.yearOfStudy,
      positionApplied: body.positionApplied,
      statementOfInterest: body.statementOfInterest,
      availableFrom: body.availableFrom || null,
      availableTo: body.availableTo || null,
      documents: uploadedDocuments.length > 0 ? uploadedDocuments : [],
    };

    const created = await client.create(internshipDoc);

    return NextResponse.json({ success: true, internshipId: created._id });
  } catch (error: any) {
    console.error("Error creating internship document:", error);
    return NextResponse.json({ message: "Something went wrong", error: error.message }, { status: 500 });
  }
}
