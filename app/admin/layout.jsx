"use client";
import {useRouter,usePathname} from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import {useEffect, useState} from "react";

export default function AdminLayout({ children }) {
    const pathname = usePathname();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const isLoginPage  = pathname === "/admin" || pathname === "/admin/login";
    const [checkingAuth, setCheckingAuth] = useState(true);
    // if(noLayout) return <>{children}</>
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token && !isLoginPage) {
            router.push('/admin/login');
        }
        if (token && isLoginPage) {
            router.push('/admin');
        }
        setCheckingAuth(false);
    }, [pathname]);
    if (checkingAuth) return null;
    return (
        <>
            <section id={'admin'} className={'admin-layout'}>
                <div className={'d-flex'}>
                    {!isLoginPage && (<AdminSidebar/>)}
                    {/* Main Content */}
                    <div className="flex-grow-1 p-4">
                        {children}
                    </div>
                </div>
            </section>
        </>
    )
}