'use client';

import { useEffect, useState } from 'react';
import { fetchGalleries } from '@/lib/api/admin';

export default function AdminGalleryPage() {
    const [galleries, setGalleries] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchGalleries()
            .then(setGalleries)
            .catch(err => console.error('Error fetching galleries', err))
            .finally(() => setLoading(false));
    }, []);
    return (
        <>
            <div className="container mt-4">
                <h2>All Galleries</h2>

                {loading ? (
                    <p>Loading...</p>
                ) : galleries.length === 0 ? (
                    <p>No gallery items found.</p>
                ) : (
                    <div className="row">
                        {galleries.map((gallery) => (
                            <div className="col-md-4 mb-3" key={gallery._id}>
                                <div className="card">
                                    {gallery.image_url && (
                                        <img src={gallery.image_url} className="card-img-top" alt={gallery.title || 'Gallery'} />
                                    )}
                                    <div className="card-body">
                                        <h5 className="card-title">{gallery.title || 'Untitled'}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}