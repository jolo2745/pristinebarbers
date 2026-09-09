import styles from "./prices.module.css";
import Image from "next/image";
import type { Metadata } from "next";
import { formatPrice, servicePrices } from "../lib/services";

export const metadata: Metadata = {
    title: "Prices",
    description:
        "See haircut, skin fade, beard trim and grooming prices at Pristine Barbers in Bournemouth before you book.",
    alternates: {
        canonical: "/prices",
    },
};

const images = [
    "/blond.webp",
    "/brunet.webp",
    "/blackfade.webp",
];

// utility
const chunkArray = (arr: readonly (typeof servicePrices)[number][], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );

export default function PricesPage() {
    const mainBlocks = chunkArray(servicePrices.slice(0, 15), 5);
    const extras = servicePrices.slice(15);

    return (
        <section className={styles.pricesSection}>
            <h1 className={styles.heading}>Our Prices</h1>
            <div className={styles.divider} />

            {/* MAIN BLOCKS */}
            {mainBlocks.map((group, index) => (
                <div
                    key={index}
                    className={`${styles.pricesLayout} ${index % 2 !== 0 ? styles.reverse : ""
                        }`}
                >
                    {/* PRICES */}
                    <div className={styles.priceList}>
                        {group.map((item, i) => (
                            <div key={i} className={styles.priceRow}>
                                <span className={styles.service}>
                                    {item.title}
                                </span>
                                <span className={styles.price}>
                                    {formatPrice(item.price)}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* IMAGE */}
                    <div className={styles.imageWrap}>
                        <Image
                            src={images[index]}
                            alt="Barber service"
                            fill
                            priority={index === 0}
                            className={styles.image}
                        />
                    </div>
                </div>
            ))}

            {/* FINAL TWO SERVICES */}
            <div className={styles.finalServices}>
                {extras.map((item, index) => (
                    <div key={index} className={styles.priceRow}>
                        <span className={styles.service}>
                            {item.title}
                        </span>
                        <span className={styles.price}>
                            {formatPrice(item.price)}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
