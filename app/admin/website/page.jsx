'use client';

import { useEffect, useState } from 'react';
import { fetchWebsite } from '@/lib/api/admin';
import axios from 'axios';

export default function WebsitePage() {
    const [form, setForm] = useState({
        site_name: '',
        site_url: '',
        site_title: '',
        site_description: '',
        social_links: [], // optional
    });
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    useEffect(() => {
        fetchWebsite()
            .then((data) => {
                setForm({
                    site_name: data.site_name || '',
                    site_url: data.site_url || '',
                    site_title: data.site_title || '',
                    site_description: data.site_description || '',
                    social_links: data.social_links || [],
                });
            })
            .catch(err => console.error('Error fetching website info', err))
            .finally(() => setLoading(false));
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/website', form);
            setMessage(res.data.message || 'Updated successfully');
        } catch (error) {
            console.error('Update error', error);
            setMessage('Failed to update website');
        }
    };

    return (
        <div className="container mt-4">
            <h2>Website Configuration</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <form onSubmit={handleSubmit} className="mt-3">
                    {message && <div className="alert alert-info">{message}</div>}

                    <div className="mb-3">
                        <label className="form-label">Site Name</label>
                        <input
                            type="text"
                            name="site_name"
                            className="form-control"
                            value={form.site_name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Site URL</label>
                        <input
                            type="text"
                            name="site_url"
                            className="form-control"
                            value={form.site_url}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Site Title</label>
                        <input
                            type="text"
                            name="site_title"
                            className="form-control"
                            value={form.site_title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Site Description</label>
                        <textarea
                            name="site_description"
                            className="form-control"
                            value={form.site_description}
                            onChange={handleChange}
                            rows={4}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            )}

            {/*{loading ? (*/}
            {/*    <p>Loading...</p>*/}
            {/*) : website ? (*/}
            {/*    <table className="table table-bordered">*/}
            {/*        <tbody>*/}
            {/*        <tr>*/}
            {/*            <th>Site Name</th>*/}
            {/*            <td>{website.site_name}</td>*/}
            {/*        </tr>*/}
            {/*        <tr>*/}
            {/*            <th>Site URL</th>*/}
            {/*            <td>{website.site_url}</td>*/}
            {/*        </tr>*/}
            {/*        <tr>*/}
            {/*            <th>Title</th>*/}
            {/*            <td>{website.site_title}</td>*/}
            {/*        </tr>*/}
            {/*        <tr>*/}
            {/*            <th>Description</th>*/}
            {/*            <td>{website.site_description}</td>*/}
            {/*        </tr>*/}
            {/*        <tr>*/}
            {/*            <th>Created At</th>*/}
            {/*            <td>{new Date(website.created_at).toLocaleString()}</td>*/}
            {/*        </tr>*/}
            {/*        </tbody>*/}
            {/*    </table>*/}
            {/*) : (*/}
            {/*    <p>No website data found.</p>*/}
            {/*)}*/}
        </div>
    );
}
