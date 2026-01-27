import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>

                {/* LEFT */}
                <div className={styles.left}>

                    <div className={styles.info}>
                        <p>📍 164 Charminster Rd, Bournemouth BH8 8UX, United Kingdom</p>
                        <p>📞 +44 12020 96887</p>
                    </div>

                    <div className={styles.socials}>
                        <a
                            href="https://www.instagram.com/pristinebarbers_/"
                            aria-label="Instagram"
                        >
                            <img src="/Instagram.webp" alt="Instagram" />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <img src="/Facebook.webp" alt="Facebook" />
                        </a>
                        <a href="#" aria-label="TikTok">
                            <img src="/TikTok.webp" alt="TikTok" />
                        </a>
                    </div>
                </div>

                {/* RIGHT */}
                <div className={styles.right}>
                    <Link href="/privacy-policy">Privacy Policy</Link>

                    <a
                        href="https://launchset.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Website by <span className={styles.launchset}>Launchset</span>
                    </a>


                    <p className={styles.copy}>
                        © {new Date().getFullYear()} Pristine Barbers — All Rights Reserved
                    </p>
                </div>

            </div>
        </footer>
    );
}
