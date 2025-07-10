import {S3Client,PutObjectCommand} from "@aws-sdk/client-s3";
import {NextResponse} from "next/server";
import { randomUUID } from "crypto";

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    endpoint: `https://s3.${process.env.AWS_REGION}.amazonaws.com`, // ← add this line
    forcePathStyle: false, // ← required for regional buckets
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

export async function POST(req) {
    console.log("Upload route called");

    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !file.type.startsWith("image/")) {
        return NextResponse.json({ success: false, message: "Invalid image" }, { status: 400 });
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    if (buffer.length > 2 * 1024 * 1024) {
        return NextResponse.json({ success: false, message: "File too large. Max 2MB" }, { status: 400 });
    }
    const fileName = `${Date.now()}-${randomUUID()}-${file.name}`;

    const uploadParams = {
        Bucket:process.env.AWS_BUCKET_NAME,
        Key: fileName,
        Body: buffer,
        ContentType: file.type,
    };
    console.log("Uploading to S3:", uploadParams);
    try {
        await s3.send(new PutObjectCommand(uploadParams));
        const url = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
        return NextResponse.json({
            success: true,
            url,
            message: "File uploaded successfully",
        });
    } catch (err) {
        console.log("Uploading to:", uploadParams.Bucket, uploadParams.Key);
        console.log("File type:", file.type, "File size:", buffer.length);
        console.log("S3 Upload Error", JSON.stringify(err, null, 2));
        // console.error("S3 Upload Error", err);
        return NextResponse.json({ success: false, message: "Failed to upload file" }, { status: 500 });
    }
}