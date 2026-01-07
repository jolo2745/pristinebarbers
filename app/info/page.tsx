import Link from "next/link";
import styles from "./info.module.css";
import Image from "next/image";

export default function InfoPage() {
    return (
        <main className={styles.infoPage}>
            {/* Top section */}
            <section className={styles.hero}>
                <div className={styles.heroImage}>
                    <Image
                        src="/hero_image_info.webp"
                        alt="Barber grooming a client"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 1100px"
                        style={{
                            objectFit: "cover",
                            objectPosition: "center 1%",
                        }}
                    />

                </div>

                <h1>More than a barbershop</h1>
                <p>
                    Our barbershop is built on craftsmanship and community. Learn about
                    our story, stay updated through our blog, and get expert advice on
                    hair care and styling.
                </p>
            </section>

            {/* Card section */}
            <section className={styles.cards}>
                <Link href="/info/story" className={styles.card}>
                    <h2>Our Story</h2>
                    <p>
                        Learn about our beginnings, our values, and what makes our
                        barbershop unique.
                    </p>
                    <span>Read our story →</span>
                </Link>

                <Link href="/info/blog" className={styles.card}>
                    <h2>Blog</h2>
                    <p>
                        Stay up to date with the latest news, styles, and updates from the
                        shop.
                    </p>
                    <span>Visit the blog →</span>
                </Link>

                <Link href="/info/tips" className={styles.card}>
                    <h2>Hair Tips</h2>
                    <p>
                        Get expert barber advice on hair care, styling, and the best
                        products.
                    </p>
                    <span>Read tips & advice →</span>
                </Link>
            </section>
        </main>
    );
}
