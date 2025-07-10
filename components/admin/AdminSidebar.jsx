"use client"
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function AdminSidebar() {
    const pathname = usePathname();
    return (
        <>
            {/* Sidebar */}
            <nav className="bg-dark text-white vh-100 p-3 overflow-y-auto" style={{ width: '250px' }}>
                <div className={'nav flex-column justify-content-between h-100'}>
                    <ul className="nav flex-column">
                        <h5 className="mb-4">Admin Panel</h5>
                        <li className="nav-item">
                            <Link href="/admin/dashboard" className={`nav-link text-white ${pathname === '/admin/dashboard' ? 'fw-bold' : ''}`}>
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/admin/blog" className={`nav-link text-white ${pathname === '/admin/blog' ? 'fw-bold' : ''}`}>
                                Blogs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/admin/gallery" className={`nav-link text-white ${pathname === '/admin/gallery' ? 'fw-bold' : ''}`}>
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/admin/website" className={`nav-link text-white ${pathname === '/admin/website' ? 'fw-bold' : ''}`}>
                                Web Settings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/" className={`nav-link text-white ${pathname === '/' ? 'fw-bold' : ''}`}>
                                Home
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <button className="btn btn-sm btn-outline-danger fw-semibold w-100"
                                    onClick={() => {
                                        localStorage.removeItem('token');
                                        window.location.href = '/admin/login';
                                    }}>Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}