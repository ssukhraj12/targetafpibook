// lib/seo.js
import { headers } from 'next/headers';
import { NextResponse } from "next/server";

export function getDynamicCanonical() {
    const h = headers();
    const host = h.get('host');
    const proto = h.get('x-forwarded-proto');
    const path = h.get('x-pathname');
    return `${proto}://${host}${path}`;
}
