import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/MainHeader";
import Script from "next/script";
import MainFooter from "@/components/MainFooter";
import {mediaUrl, publicName, siteUrl} from "@/lib/config";
import LayoutWrapper from "@/components/LayoutWrapper";
import {fetchWebsite} from "@/lib/api/admin";
import {getDynamicCanonical} from "@/lib/seo";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
    weight:['200','300','400','500','600','700','800'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
function stripTitleHtmlAndLimit(html, limit = 60) {
    if (!html) return "";
    const stripped = html.replace(/<[^>]+>/g, ""); // Remove HTML tags
    return stripped.length > limit ? stripped.slice(0, limit).trim() + "" : stripped.trim();
}
function stripHtmlAndLimit(html, limit = 160) {
    if (!html) return "";
    const stripped = html.replace(/<[^>]+>/g, ""); // Remove HTML tags
    return stripped.length > limit ? stripped.slice(0, limit).trim() + "" : stripped.trim();
}
export async function generateMetadata(){
    const wmeta = await fetchWebsite();
    const canonical = await getDynamicCanonical();
    const siteName = wmeta?.site_name || publicName;
    const defaultTitle = wmeta?.site_title + ` - ` +  siteName || 'Target AFPI Book for Maharaja Ranjit Singh Academy Entrance Exam';
    const description = wmeta?.site_description + ` ` + siteName || 'Mohali Defence Academy boasts a team of highly experienced professionals. Team is dedicated to providing result-oriented courses for aspirants';
    return {
        title: {
            default: stripTitleHtmlAndLimit(defaultTitle),
            template: `%s | ${siteName}`,
        },
        description: stripHtmlAndLimit(description),
        authors: [{ name: "Prabhjot Sir" }],
        applicationName: siteName,
        robots: {
            index: true,
            follow: true,
        },
        icons: [
            { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { rel: "icon", url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
            { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { rel: "apple-touch-icon", url: "/apple-icon-57x57.png", sizes: "57x57" },
            { rel: "apple-touch-icon", url: "/apple-icon-60x60.png", sizes: "60x60" },
            { rel: "apple-touch-icon", url: "/apple-icon-72x72.png", sizes: "72x72" },
            { rel: "apple-touch-icon", url: "/apple-icon-76x76.png", sizes: "76x76" },
            { rel: "apple-touch-icon", url: "/apple-icon-114x114.png", sizes: "114x114" },
            { rel: "apple-touch-icon", url: "/apple-icon-120x120.png", sizes: "120x120" },
            { rel: "apple-touch-icon", url: "/apple-icon-144x144.png", sizes: "144x144" },
            { rel: "apple-touch-icon", url: "/apple-icon-152x152.png", sizes: "152x152" },
            { rel: "apple-touch-icon", url: "/apple-icon-180x180.png", sizes: "180x180" },
            { rel: "icon", url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
        ],
        alternates:{
            canonical: canonical,
        },
        openGraph:{
            title:defaultTitle,
            type:'website',
            siteName: publicName,
            url:canonical,
            images:[{
                url: `${mediaUrl}targetafpi_book_1.png`,
                secureUrl: `${mediaUrl}targetafpi_book_1.png`,
                alt:siteName,
                width:1200,
                height:630,
            }]
        },
    }
}
export default async function RootLayout({ children }) {
    const wmeta = await fetchWebsite();
  return (
    <html lang="en">
    <head>
        <script type={'application/ld+json'} dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: publicName,
                url: wmeta.site_url,
                logo:`${mediaUrl}mdalogo.png`,
                description: wmeta.site_description,
            })
        }}></script>
    </head>
      <body className={`${poppins.className} ${geistMono.variable} antialiased`}>
      <LayoutWrapper
          wmeta={wmeta}
          header={<MainHeader />}
          footer={<MainFooter />}
      >
          {children}
      </LayoutWrapper>
      <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          strategy="afterInteractive"
      />
      </body>
    </html>
  );
}
