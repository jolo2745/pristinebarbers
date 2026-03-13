import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import type { ReactNode } from "react";
import Script from "next/script";
import type { Metadata } from "next";
import {
    ADDRESS,
    BOOKSY_URL,
    INSTAGRAM_URL,
    PHONE_E164,
    SITE_NAME,
    SITE_URL,
    defaultMetadata,
    defaultOpenGraphImage,
} from "./lib/site";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${SITE_NAME} | Bournemouth`,
        template: `%s | ${SITE_NAME}`,
    },
    description: defaultMetadata.description,
    themeColor: "#000000",
    alternates: {
        canonical: "/",
    },
    icons: {
        icon: [
            {
                url: "/favicon.ico",
                type: "image/x-icon",
            },
            {
                url: "/favicon.png",
                type: "image/png",
                sizes: "512x512",
            },
        ],
    },

    openGraph: {
        title: `${SITE_NAME} | Barber Shop in Bournemouth`,
        description: defaultMetadata.description,
        url: SITE_URL,
        siteName: SITE_NAME,
        images: [defaultOpenGraphImage],
        type: "website",
        locale: "en_GB",
    },
    twitter: {
        card: "summary_large_image",
        title: `${SITE_NAME} | Barber Shop in Bournemouth`,
        description: defaultMetadata.description,
        images: [defaultOpenGraphImage.url],
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
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-4L0XPHN2FH');
  `}
                </Script>

                {/* Local Business + Reviews Schema */}
                <Script
                    id="local-business-schema"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BarberShop",
                            "@id": `${SITE_URL}/#barbershop`,
                            name: SITE_NAME,
                            url: SITE_URL,
                            image: `${SITE_URL}${defaultOpenGraphImage.url}`,
                            telephone: PHONE_E164,
                            priceRange: "££",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "164 Charminster Road",
                                addressLocality: "Bournemouth",
                                addressRegion: "Dorset",
                                postalCode: "BH8 8UX",
                                addressCountry: "GB",
                            },
                            sameAs: [INSTAGRAM_URL],
                            areaServed: [
                                "Bournemouth",
                                "Charminster",
                                "Boscombe",
                                "Winton",
                            ],
                            makesOffer: [
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Skin Fade",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Haircut",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Beard Trim",
                                    },
                                },
                            ],
                            potentialAction: {
                                "@type": "ReserveAction",
                                target: BOOKSY_URL,
                            },
                            openingHoursSpecification: [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: [
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday"
                                    ],
                                    opens: "09:00",
                                    closes: "19:15"
                                },

                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: "Friday",
                                    opens: "09:00",
                                    closes: "20:15"
                                },

                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: "Saturday",
                                    opens: "09:00",
                                    closes: "19:15"
                                },

                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: "Sunday",
                                    opens: "10:00",
                                    closes: "17:00"
                                }

                            ],
                            description: defaultMetadata.description,
                            slogan: "Modern barbershop on Charminster Road in Bournemouth",
                            location: {
                                "@type": "Place",
                                address: ADDRESS,
                            },
                        })
                    }}
                />
            </head>


            <body suppressHydrationWarning={true}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
