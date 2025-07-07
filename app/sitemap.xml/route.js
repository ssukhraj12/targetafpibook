
import {NextResponse} from "next/server";

export async function GET(){
    // const baseUrl = 'http://localhost:3000';
    const baseUrl = 'https://targetafpibook.vercel.app';
    const now = new Date().toISOString();
    // const staticRoutes = [
    //     { url: '', lastmod: new Date() },
    //     { url: '/about', lastmod: new Date() },
    //     { url: '/about/councelling', lastmod: new Date() },
    //     { url: '/about/mission-and-vision', lastmod: new Date() },
    //     { url: '/about/procedure', lastmod: new Date() },
    //     { url: '/about/prospectus', lastmod: new Date() },
    //     { url: '/blog', lastmod: new Date() },
    //     { url: '/gallery', lastmod: new Date() },
    //     { url: '/contact', lastmod: new Date() },
    //     { url: '/online-store', lastmod: new Date() },
    //     { url: '/online-course', lastmod: new Date() },
    //     { url: '/online-course/airforce-common-admission-test', lastmod: new Date() },
    //     { url: '/online-course/combined-defence-services-cds', lastmod: new Date() },
    //     { url: '/online-course/maharaj-ranjit-singh-academy', lastmod: new Date() },
    //     { url: '/online-course/mai-bhago-academy-mohali-mbafpi', lastmod: new Date() },
    //     { url: '/online-course/national-defence-academy-nda', lastmod: new Date() },
    //     { url: '/online-course/service-selection-board-ssb', lastmod: new Date() },
    //     { url: '/online-course/technical-entry-scheme-tes-10-2', lastmod: new Date() },
    //     { url: '/privacy-policy', lastmod: new Date() },
    //     { url: '/terms-conditions', lastmod: new Date() },
    //     { url: '/testimonials', lastmod: new Date() },
    // ];
    const staticRoutes = [
        '', '/about', '/about/councelling', '/about/mission-and-vision',
        '/about/procedure', '/about/prospectus', '/blog', '/gallery',
        '/contact', '/online-store', '/online-course',
        '/online-course/airforce-common-admission-test',
        '/online-course/combined-defence-services-cds',
        '/online-course/maharaj-ranjit-singh-academy',
        '/online-course/mai-bhago-academy-mohali-mbafpi',
        '/online-course/national-defence-academy-nda',
        '/online-course/service-selection-board-ssb',
        '/online-course/technical-entry-scheme-tes-10-2',
        '/privacy-policy', '/terms-conditions', '/testimonials',
    ];
    const urls = staticRoutes.map(
        (path) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
    ).join('');
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls}
      </urlset>`;
    // const allRoutes = [...staticRoutes];
    // const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    // <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    //         ${allRoutes.map(({ url, lastmod }) =>
    //         `<url>
    //             <loc>${baseUrl}${url}</loc>
    //             <lastmod>${new Date(lastmod).toISOString()}</lastmod>
    //             <changefreq>weekly</changefreq>
    //             <priority>0.8</priority>
    //           </url>`).join('')}
    // </urlset>`;

    return new NextResponse(sitemap,{
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}