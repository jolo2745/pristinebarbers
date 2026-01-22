import styles from "./hero.module.css";
import Link from "next/link";
import Image from "next/image";


export default function Hero() {
    return (
        <section className={styles.hero}>

            <Image
                src="/hero.webp"
                alt="Pristine Barbers Bournemouth barbershop interior"
                fill
                priority
                sizes="100vw"
                className={styles.heroImage}
            />

            <div className={styles.overlay}>
                <h1 className={styles.title}>Pristine Barbers in Bournemouth</h1>
                <p className={styles.subtitle}>
                    A friendly environment, with experience in all hair types.
                </p>

                <a
                    href="https://booksy.com/en-gb/128944_pristine-barbers_barber_1029122_bournemouth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                >
                    Book Now
                </a>

            </div>
        </section>
    );
}
