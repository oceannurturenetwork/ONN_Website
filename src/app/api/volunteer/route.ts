import { NextResponse } from "next/server";
import { client } from "@/lib/sanity-client";

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

    // Get all files under "documents" key (may be empty array if none)
    const files = formData.getAll("documents") as Blob[];

    let uploadedFiles = [];

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());

      const asset = await client.assets.upload("file", buffer, {
        filename: `${body.fullName || "unknown"}-${new Date().toISOString()}`,
      });

      uploadedFiles.push({
        _type: "file",
        asset: {
          _type: "reference",
          _ref: asset._id,
        },
      });
    }

    const doc = {
      _type: "volunteer",
      name: body.fullName,
      email: body.email,
      phone: body.phone,
      country: body.country,
      skills: (body.skills as string)?.split(",") || [],
      positionApplied: body.positionApplied,
      motivation: body.motivation,
      availableFrom: body.availableFrom,
      availableTo: body.availableTo,
      documents: uploadedFiles,
    };

    const created = await client.create(doc);

    return NextResponse.json({ success: true, volunteerId: created._id });
  } catch (error: any) {
    console.error("Error creating document:", error);
    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 },
    );
  }
}
