import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import { ADDRESS, INSTAGRAM_URL, PHONE_DISPLAY } from "@/app/lib/site";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>

                {/* LEFT */}
                <div className={styles.left}>

                    <div className={styles.info}>
                        <p>📍 {ADDRESS}</p>
                        <p>📞 {PHONE_DISPLAY}</p>
                    </div>

                    <div className={styles.socials}>
                        <a
                            href={INSTAGRAM_URL}
                            aria-label="Instagram"
                        >
                            <Image src="/Instagram.webp" alt="Instagram" width={32} height={32} />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <Image src="/Facebook.webp" alt="Facebook" width={32} height={32} />
                        </a>
                        <a href="#" aria-label="TikTok">
                            <Image src="/TikTok.webp" alt="TikTok" width={32} height={32} />
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
