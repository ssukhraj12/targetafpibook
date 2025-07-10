'use client';
import ImageUploader from "@/components/admin/ImageUploader";
import {useState} from "react";
import { InputChips } from "react-input-chips";
import "react-input-chips/dist/index.css";

async function generateMetadata(){
    const title = 'Add Blog';
    return {
        title:title,
        alternates:{
            canonical: 'admin/blog/add',
        },
    }
}
export default function AddBlogPage(){
    const [form, setForm] = useState({
        title: '',
        slug: '',
        image_url: '',
        short_content: '',
        blog_content: '',
        tags: '',
        category: '',
        published: false,
        created_by: '',
        siteid: '',
    });
    const [chips, setChips] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const handleImageUpload = (url) => {
        setForm(prev => ({ ...prev, image_url: url }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);
        try {
           const res = await fetch('/api/blog', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({
                   ...form,
                   tags: form.tags.split(',').map(tag => tag.trim()),
               }),
           });
            const data = await res.json();
            if (!res.ok || !data.success) {
                throw new Error(data.message || 'Something went wrong');
            }
            setSuccess(true);
            setForm({
                title: '',
                slug: '',
                image_url: '',
                short_content: '',
                blog_content: '',
                tags: '',
                category: '',
                published: false,
                created_by: '',
                siteid: '',
            });
        } catch (err){
            setError(err.message);
        }
    }

    return (
        <>
            <div className="container">
                <h2>Add New Blog</h2>
                {success && <div className="alert alert-success">Blog saved successfully!</div>}
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <InputChips chips={chips} setChips={setChips} inputValue={inputValue} setInputValue={setInputValue}/>
                        <label className="form-label">Title</label>
                        <input type="text" name="title" className="form-control" value={form.title} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" name="title" className="form-control" value={form.title} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Slug</label>
                        <input type="text" name="slug" className="form-control" value={form.slug} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Short Content</label>
                        <textarea name="short_content" className="form-control" value={form.short_content} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Blog Content</label>
                        <textarea name="blog_content" className="form-control" rows={5} value={form.blog_content} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Tags (comma separated)</label>
                        <input type="text" name="tags" className="form-control" value={form.tags} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image Upload</label>
                        <ImageUploader onUpload={handleImageUpload} />
                        {form.image_url && (
                            <div className="mt-2">
                                <img src={form.image_url} alt="Uploaded" width={200} />
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </>
    )
}