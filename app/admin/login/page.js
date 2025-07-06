// app/admin/login/page.js or any component file
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from "@/lib/axiosInstance";

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState('admin@example.com');
    const [password, setPassword] = useState('admin123');
    const [error, setError] = useState('');
    const [token, setToken] = useState('');

    const handleLogin = async () => {
        try {
            const res = await axiosInstance.post('/login', {email, password});
            localStorage.setItem('token', res.data.access_token);
            router.push('/admin/dashboard');
        } catch (err) {
            setError('Invalid login credentials');
        }
    };
    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     setError('');
    //     try {
    //         const res = await fetch('/api/admin/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ email, password })
    //         });
    //
    //         const data = await res.json();
    //
    //         if (!res.ok) {
    //             setError(data.error || 'Login failed');
    //         } else {
    //             setToken(data.token);
    //             localStorage.setItem('admin_token', data.token); // Optional: Store token
    //         }
    //     } catch (err) {
    //         console.error('Login error:', err);
    //         setError('Something went wrong');
    //     }
    // };

    return (
        <>
            <section className={'py-5'}>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4 className="card-title text-center mb-4">Admin Login</h4>

                                    {error && (
                                        <div className="alert alert-danger" role="alert">
                                            {error}
                                        </div>
                                    )}

                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter email"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                        />
                                    </div>

                                    <button className="btn btn-primary w-100" onClick={handleLogin}>
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div style={{ maxWidth: 400, margin: '0 auto' }}>*/}
                {/*    <h2>Admin Login</h2>*/}
                {/*    <form onSubmit={handleLogin}>*/}
                {/*        <input*/}
                {/*            type="email"*/}
                {/*            placeholder="Email"*/}
                {/*            value={email}*/}
                {/*            required*/}
                {/*            onChange={(e) => setEmail(e.target.value)}*/}
                {/*            className="form-control mb-2"*/}
                {/*        />*/}
                {/*        <input*/}
                {/*            type="password"*/}
                {/*            placeholder="Password"*/}
                {/*            value={password}*/}
                {/*            required*/}
                {/*            onChange={(e) => setPassword(e.target.value)}*/}
                {/*            className="form-control mb-2"*/}
                {/*        />*/}
                {/*        <button type="submit" className="btn btn-primary w-100">Login</button>*/}
                {/*        {error && <p className="text-danger mt-2">{error}</p>}*/}
                {/*        {token && <p className="text-success mt-2">Token: {token}</p>}*/}
                {/*    </form>*/}
                {/*</div>*/}
            </section>
        </>

    );
}
