// "use client";

import axiosInstance from "@/lib/axiosInstance";

// Get Blogs
export async function fetchBlogs(){
    const response = await axiosInstance.get("/admin/blogs");
    return response.data.blogs;
}

// Get Galleries
export async function fetchGalleries() {
    const response = await axiosInstance.get('/admin/galleries');
    return response.data.galleries;
}

// Get Website Details
// export async function fetchWebsite() {
//     const response = await axiosInstance.get('/admin/website');
//     return response.data.website;
// }

export async function fetchWebsite(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/website`, {
        method: 'GET',
        cache: 'no-store', // ensure fresh fetch in dev
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to fetch');
    return data.website;
}