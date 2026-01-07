import styles from "./prices.module.css";
import Image from "next/image";

const pricesItems = [
    { title: "Skinfade/taper fade, cut and style", price: "£20" },
    { title: "Skingfade/taper and beard trim/shape", price: "£30" },
    { title: "Standard haircut and style", price: "£16" },
    { title: "BU student fade", price: "£17" },
    { title: "Standard haircut with beard trim/shape", price: "£26" },

    { title: "Beard trim and shape up", price: "£10" },
    { title: "Full works", price: "£37" },
    { title: "Hot towel wet shave", price: "£15" },
    { title: "Nose and ears waxed", price: "£5" },
    { title: "One grade all over/head shave", price: "£10" },

    { title: "OAP clipper cut", price: "£10" },
    { title: "Scissor cut", price: "£17" },
    { title: "OAP scissor cut", price: "£12" },
    { title: "Restyle", price: "£25" },
    { title: "Kids skin fade under 12", price: "£15" },

    { title: "Kids standard haircut under 12", price: "£12" },
    { title: "Head shave and beawrd trim/shape", price: "£22" },
];

const images = [
    "/blond.webp",
    "/brunet.webp",
    "/blackfade.webp",
];

// utility
const chunkArray = (arr: typeof pricesItems, size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );

export default function PricesPage() {
    const mainBlocks = chunkArray(pricesItems.slice(0, 15), 5);
    const extras = pricesItems.slice(15);

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
                                    {item.price}
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
                            {item.price}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
