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

    icons: {
        icon: [
            {
                url: "/favicon.png",
                type: "image/png",
                sizes: "64x64",
            },
        ],
    },

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

                {/* Local Business + Reviews Schema */}
                <Script
                    id="local-business-schema"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BarberShop",
                            "@id": "https://pristinebarbers.co.uk/#barbershop",
                            name: "Pristine Barbers",
                            url: "https://pristinebarbers.co.uk",
                            telephone: "+441202096887",
                            priceRange: "££",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "164 Charminster Road",
                                addressLocality: "Bournemouth",
                                addressRegion: "Dorset",
                                postalCode: "BH8 8UX",
                                addressCountry: "GB"
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
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "4.9",
                                reviewCount: "80"
                            },
                            review: [
                                {
                                    "@type": "Review",
                                    author: {
                                        "@type": "Person",
                                        name: "Sam"
                                    },
                                    reviewRating: {
                                        "@type": "Rating",
                                        ratingValue: "5",
                                        bestRating: "5"
                                    },
                                    reviewBody: "Erdi does a great job every time."
                                },
                                {
                                    "@type": "Review",
                                    author: {
                                        "@type": "Person",
                                        name: "Aaron"
                                    },
                                    reviewRating: {
                                        "@type": "Rating",
                                        ratingValue: "5",
                                        bestRating: "5"
                                    },
                                    reviewBody:
                                        "10/10 taper fade, easy to book, fast and efficient. Highly recommend."
                                }
                            ]
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
