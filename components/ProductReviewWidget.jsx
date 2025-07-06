'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { useInView } from "react-intersection-observer";

export default function ProductReviewWidget() {
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
                className="elfsight-app-451b6337-314a-4f36-8af9-796e8997ddb6"
                data-elfsight-app-lazy
            ></div>
        </>
    );
}
