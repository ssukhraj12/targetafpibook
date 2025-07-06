import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        const client = await clientPromise;
        const db = client.db("mdadb");
        const admin = await db.collection('admins').findOne({ email });

        if (!admin) {
            return NextResponse.json({ error: 'Email not found' }, { status: 401 });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
        }

        const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });

        return NextResponse.json({ token });
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
