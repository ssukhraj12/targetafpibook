import { NextResponse } from 'next/server';

export function middleware(request) {
    const response = NextResponse.next();
    response.headers.set('x-pathname', request.nextUrl.pathname);
    return response;
}

// This matcher will apply middleware to all routes (excluding static assets)
export const config = {
    matcher: ['/((?!_next|.*\\..*|favicon.ico).*)'],
};
