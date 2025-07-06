import clientPromise from "@/lib/mongodb";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db(); // default database from URI

        const blogs = await db
            .collection('blogs')
            .find()
            .sort({ created_at: -1 })
            .toArray();

        return Response.json({ success: true, blogs });

    } catch (error){
        console.error('GET /api/blog error:', error);
        return Response.json({ success: false, message: 'Failed to fetch blogs' }, { status: 500 });
    }
}