import clientPromise from '@/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db();
        const blogs = await db
            .collection('blogs')
            .find({ published: true })
            .sort({ created_at: -1 })
            .toArray();

        return Response.json({ success: true, blogs });
    } catch (error) {
        console.error('Public Blogs Error:', error);
        return Response.json({ success: false, message: 'Error fetching blogs' }, { status: 500 });
    }
}
