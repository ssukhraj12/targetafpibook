import clientPromise from '@/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db();
        const galleries = await db.collection('galleries').find({}).sort({ created_at: -1 }).toArray();

        return Response.json({ success: true, galleries });
    } catch (error) {
        console.error('Public Galleries Error:', error);
        return Response.json({ success: false, message: 'Error fetching galleries' }, { status: 500 });
    }
}
