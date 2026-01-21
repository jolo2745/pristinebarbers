import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import type { ReactNode } from "react";
import Script from "next/script";

export const metadata = {
    title: {
        default: "Pristine Barbers | Bournemouth",
        template: "%s | Pristine Barbers",
    },
    description:
        "Pristine Barbers is a modern barbershop in Bournemouth offering haircuts, fades, beard trims and professional grooming.",
    themeColor: "#000000",
    openGraph: {
        title: "Pristine Barbers | Barber Shop in Bournemouth",
        description:
            "Modern barbershop in Bournemouth specialising in precision cuts, skin fades and grooming.",
        url: "https://pristinebarbers.co.uk",
        siteName: "Pristine Barbers",
        images: [
            {
                url: "/og-image.webp",
                width: 1200,
                height: 630,
                alt: "Pristine Barbers Bournemouth barbershop",
            },
        ],
        type: "website",
    },
};


export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-4L0XPHN2FH"
                    strategy="afterInteractive"
                />
                <Script id="ga" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4L0XPHN2FH');
          `}
                </Script>
            </head>

            <body suppressHydrationWarning={true}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
