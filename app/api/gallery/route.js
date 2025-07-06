import clientPromise from '@/lib/mongodb';

export async function GET() {
    const client = await clientPromise;
    const db = client.db();
    const galleries = await db.collection('galleries').find().toArray();
    return Response.json({ success: true, galleries });
}