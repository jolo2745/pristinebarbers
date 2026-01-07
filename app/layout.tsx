import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import type { ReactNode } from "react";

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
            <body suppressHydrationWarning={true}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
