"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { BOOKSY_URL } from "@/app/lib/site";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleBookClick = () => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "book_click", {
                event_category: "engagement",
                event_label: "Navbar Book Now",
            });
        }
    };

    return (
        <>
            {/* NAVBAR */}
            <nav className={styles.navbar}>
                <div className={styles.navContainer}>
                    <Link href="/" className={styles.logo}>
                        Pristine barbers
                    </Link>

                    {/* DESKTOP MENU */}
                    <div className={styles.menu}>
                        <Link href="/">Home</Link>
                        <Link href="/info">Info</Link>
                        <Link href="/prices">Prices</Link>

                        {/* BOOK NOW BUTTON (DESKTOP) */}
                        <a
                            href={BOOKSY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.bookBtn}
                            onClick={handleBookClick}
                        >
                            Book Now
                        </a>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className={styles.mobileMenuButton}
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open Menu"
                    >
                        <div className={styles.hamburger}></div>
                        <div className={styles.hamburger}></div>
                        <div className={styles.hamburger}></div>
                    </button>
                </div>
            </nav>

            {/* MOBILE SLIDE-IN MENU */}
            <div
                className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}
            >
                <Link href="/" onClick={() => setMenuOpen(false)}>
                    Home
                </Link>
                <Link href="/info" onClick={() => setMenuOpen(false)}>
                    Info
                </Link>
                <Link href="/prices" onClick={() => setMenuOpen(false)}>
                    Prices
                </Link>
            </div>

            <div
                className={`${styles.mobileMenuOverlay} ${menuOpen ? styles.show : ""
                    }`}
                onClick={() => setMenuOpen(false)}
            />

            {/* FLOATING BOOK NOW BUTTON (MOBILE ONLY) */}
            <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.floatingBookBtn}
                onClick={handleBookClick}
            >
                Book Now
            </a>
        </>
    );
}
