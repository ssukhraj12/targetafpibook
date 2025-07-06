'use client';

import { usePathname } from 'next/navigation';

export default function LayoutWrapper({ children,header,footer }) {
    const pathname = usePathname();
    const isAdmin = pathname.startsWith('/admin');

    return (
        <>
            {!isAdmin && header}
            {children}
            {!isAdmin && footer}
        </>
    );
}
