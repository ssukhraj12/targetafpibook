'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminLogin from "@/app/admin/login/page";
export default function AdminPage(){
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            router.push('/admin/dashboard');
        } else {
            router.push('/admin/login');
        }
    }, []);

    return null;
}