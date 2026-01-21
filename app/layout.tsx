import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import type { ReactNode } from "react";
import Script from "next/script";

export const metadata = {
    title: "Barber Website",
    description: "Professional barber website",
    themeColor: "#000000",
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
