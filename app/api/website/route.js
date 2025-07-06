import clientPromise from '@/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db();

        const website = await db.collection('websites').findOne({ siteid: 'targetafpibook' });

        return Response.json({ success: true, website });
    } catch (error) {
        console.error('GET /api/website error:', error);
        return Response.json({ success: false, message: 'Failed to fetch website' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const client = await clientPromise;
        const db = client.db();
        const body = await req.json();
        const filter = {siteid:'targetafpibook'};
        const update = {
            $set:{
                site_name: body.site_name,
                site_url: body.site_url,
                site_title: body.site_title,
                site_description: body.site_description,
                social_links: body.social_links || [],
                updated_at: new Date(),
            },
            $setOnInsert: {
                created_at: new Date(),
                siteid: 'targetafpibook',
            },
        };
        // Step 1: Update (upsert)
        await db.collection('websites').updateOne(filter, update, { upsert: true });
        // ✅ Step 2: Fetch updated record
        const updated = await db.collection('websites').findOne(filter);
        return Response.json({
            success: true,
            website:updated,
            message: 'Website updated successfully'
        });
    } catch (error) {
        console.error('POST /api/website error:', error);
        return Response.json({ success: false, message: 'Failed to update website' }, { status: 500 });
    }
}