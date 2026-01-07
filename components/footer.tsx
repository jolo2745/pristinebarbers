import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <h3 className={styles.logo}>Pristine Barbers</h3>

                <div className={styles.info}>
                    <p>📍 164 Charminster Rd, Bournemouth BH8 8UX, United Kingdom</p>
                    <p>📞 +44 12020 96887</p>
                </div>

                <div className={styles.socials}>
                    <a href="#" aria-label="Instagram">
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

            <p className={styles.copy}>
                © {new Date().getFullYear()} Pristine Barbers — All Rights Reserved
            </p>
        </footer>
    );
}
