import clientPromise from '@/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db();
        const website = await db.collection('websites').findOne();

        return Response.json({ success: true, website });
    } catch (error) {
        console.error('Public Website Error:', error);
        return Response.json({ success: false, message: 'Error fetching website info' }, { status: 500 });
    }
}
