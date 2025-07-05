'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { useInView } from "react-intersection-observer";

export default function ElfsightWidget() {
    const {ref, inView} = useInView({triggerOnce: true});
    useEffect(() => {
        if (inView) {
            const interval = setInterval(() => {
                if (window.Elfsight) {
                    window.Elfsight.init();
                    clearInterval(interval);
                }
            }, 500);
        }
    }, [inView]);

    return (
        <>
            <Script
                src="https://static.elfsight.com/platform/platform.js"
                data-use-service-core
                strategy="lazyOnload"
            />
            <div ref={ref}
                className="elfsight-app-7af3a70d-07c8-4bd9-9d16-740286be4e04"
                data-elfsight-app-lazy
            ></div>
        </>
    );
}
