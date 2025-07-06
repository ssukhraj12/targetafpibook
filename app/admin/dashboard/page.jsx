'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from "@/lib/axiosInstance";
import {fetchBlogs, fetchGalleries, fetchWebsite} from "@/lib/api/admin";

export default function AdminDashboard() {
    const [blogs, setBlogs] = useState([]);
    const [galleries, setGalleries] = useState([]);
    const [website, setWebsite] = useState(null);

    useEffect(() => {
        async function loadData(){
            try {
                const blogsData = await fetchBlogs();
                setBlogs(blogsData);
                const galleriesData = await fetchGalleries();
                setGalleries(galleriesData);
                const websiteData = await fetchWebsite();
                setWebsite(websiteData);
            } catch (error) {
                console.error('Error loading data:',error);
            }
        }
        loadData();
    },[]);

    const [admin, setAdmin] = useState(null);
    const router = useRouter();
    useEffect(() => {
        axiosInstance.get("/admin/me")
            .then((res) => setAdmin(res.data))
    },[])
    if (!admin) return <section className={'py-5'}><p className="p-4">Loading...</p></section> ;
    return (
        <>
            <section className={'py-4'}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4>Total Blogs: {blogs.length}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4>Total Galleries: {galleries.length}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    {website && <h4>Website: {website.site_name}</h4>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">Welcome, {admin.email}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}