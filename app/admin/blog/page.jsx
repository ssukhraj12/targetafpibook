'use client';

import { useEffect, useState } from 'react';
import { fetchBlogs } from '@/lib/api/admin';
import Link from 'next/link';
export default function AdminBlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchBlogs()
            .then(data => setBlogs(data))
            .catch(err => console.error('Failed to fetch blogs:', err))
            .finally(() => setLoading(false));
    }, []);
    return (
        <>
            <div className="container mt-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2>All Blogs</h2>
                    <Link href="/admin/blog/add" className="btn btn-primary">+ Add Blog</Link>
                </div>
                {loading ? (
                    <p>Loading...</p>
                ) : blogs.length === 0 ? (
                    <p>No blogs found.</p>
                ) : (
                    <table className={'table table-striped'}>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Slug</th>
                                <th>Published</th>
                                <th>Tags</th>
                                <th>Created</th>
                            </tr>
                        </thead>
                        <tbody>
                        {blogs.map((blog, index) => (
                            <tr key={blog._id}>
                                <td>{blog.title}</td>
                                <td>
                                    <span className={`badge ${blog.published ? 'bg-success' : 'bg-secondary'}`}>
                                        {blog.published ? 'Yes' : 'No'}
                                    </span>
                                </td>
                                <td>{Array.isArray(blog.tags) ? blog.tags.join(', ') : '-'}</td>
                                <td>{new Date(blog.created_at).toLocaleString()}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )

                }
            </div>
            <h1>Blog List</h1>
        </>
    )
}