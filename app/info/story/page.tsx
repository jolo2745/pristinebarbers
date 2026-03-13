import styles from "./story.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Story",
    description:
        "Read the story behind Pristine Barbers and the standards that shape the shop in Bournemouth.",
    alternates: {
        canonical: "/info/story",
    },
};

export default function StoryPage() {
    return (
        <main className={styles.storyPage}>
            <section className={styles.hero}>
                <h1>Our Story</h1>
                <p>
                    Pristine Barbers was built with a simple goal in mind: to offer
                    consistently high-quality grooming in a space where people feel
                    comfortable, respected, and looked after.
                </p>
            </section>

            <section className={styles.content}>
                <p>
                    What started as a small idea quickly grew into something more
                    meaningful. From day one, the focus has always been on the details —
                    clean fades, sharp lines, and taking the time to get things right.
                    Every cut is approached with care, precision, and pride in the craft.
                </p>

                <p>
                    We believe a barbershop should be more than just a place to get a
                    haircut. It should be a space where standards matter, where
                    consistency is expected, and where every client leaves feeling
                    confident in their appearance.
                </p>

                <p>
                    Over time, Pristine Barbers has grown through word of mouth, trust,
                    and repeat customers. That trust is something we don’t take lightly.
                    Whether it’s your first visit or your fiftieth, the aim is always the
                    same — a professional service, delivered properly.
                </p>

                <p>
                    As the shop continues to grow, the values stay the same. Quality over
                    shortcuts. Craftsmanship over trends. A barbershop built to last.
                </p>
            </section>
        </main>
    );
}
