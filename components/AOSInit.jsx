'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
    useEffect(() => {
        AOS.init({
            duration: 800, // animation duration in ms
            once: false,    // whether animation should happen only once
        });
    }, []);

    return null;
}
