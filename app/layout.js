import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/MainHeader";
import Script from "next/script";
import MainFooter from "@/components/MainFooter";
import {mediaUrl} from "@/lib/config";
import AOSInit from "@/components/AOSInit";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
    weight:['200','300','400','500','600','700','800'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: "Target AFPI Book for Maharaja Ranjit Singh Academy Entrance Exam",
    description: "Mohali Defence Academy boasts a team of highly experienced professionals dedicated to providing result-oriented courses for aspirants prepar..",
    authors: [{ name: "Prabhjot Sir" }],
    applicationName: "Target AFPI Book",
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
        canonical:'/',
    },
    openGraph:{
        title: "Target AFPI Book for Maharaja Ranjit Singh Academy Entrance Exam",
        type: "website",
        url: "https://targetafpibook.com",
        siteName: "Target AFPI Book",
        images: [
            {
                url: `${mediaUrl}targetafpi_book_1.png`,
                secureUrl: `${mediaUrl}targetafpi_book_1.png`,
                alt: "Target AFPI Book for Maharaja Ranjit Singh Academy Entrance Exam",
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter:{
        card: "summary_large_image",
        title: "Target AFPI Book for Maharaja Ranjit Singh Academy Entrance Exam",
        description: "Target AFPI Book for Maharaja Ranjit Singh Academy Entrance Exam",
        images: [`${mediaUrl}targetafpi_book_1.png`],
    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${geistMono.variable} antialiased`}>
      <AOSInit/>
      <MainHeader/>
        {children}
      <MainFooter/>
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
