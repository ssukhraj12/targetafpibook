'use client';
import  {useState} from "react";
import Image from "next/image";

export default function ImageUploader({ onUpload }) {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const selected = e.target.files[0];
        if(!selected) return;
        setSuccess(false);
        if(!selected.type.startsWith("image/")) {
            setError("Only image files are allowed.");
            return;
        }
        if (selected.size > 2 * 1024 * 1024) {
            setError("Image must be under 2MB.");
            return;
        }
        setError('');
        setFile(selected);
        setPreviewUrl(URL.createObjectURL(selected));
    };

    const handleUpload = async () => {
        if(!file) return;
        setUploading(true);
        setError(null);
        try {
            const formData = new FormData();
            formData.append("file",file);

            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();
            if (res.ok && data?.url) {
                onUpload(data.url);
                setSuccess(true);
            } else {
                setError(data.message || "Upload failed");
            }
        } catch (error) {
            setError("Network error or server issue.");
            console.error(err);
        } finally {
            setUploading(false);
        }

    }
    return (
        <div className="mb-4">
            <input type="file" accept="image/*" onChange={handleChange} className="form-control" />
            {previewUrl && (
                <div className="mt-2">
                    <Image src={previewUrl} alt="Preview" width={200} height={120} />
                </div>
            )}
            {error && <p className="text-danger mt-1">{error}</p>}
            <button
                className="btn btn-primary mt-2"
                onClick={handleUpload}
                disabled={uploading || !file}
            >
                {uploading ? 'Uploading...' : 'Upload'}
            </button>
            {success && <p className="text-success mt-2">✅ Image uploaded successfully!</p>}
        </div>
    )
}