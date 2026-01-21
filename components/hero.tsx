import styles from "./hero.module.css";
import Link from "next/link";

export default function Hero() {
    return (
        <section className={styles.hero}>
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
