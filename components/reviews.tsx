"use client";

import styles from "./reviews.module.css";
import { GOOGLE_BUSINESS_URL } from "@/app/lib/site";

const reviewList = [
    "“Erdi does a great job every time” – Sam",
    "“Outstanding barbers, great lads, good vibes and unreal trims. Five stars all round.” – Brook",
    "“10/10 taper fade. Easy to book, fast and efficient. Highly recommend!” – Aaron",
    "“Couldn’t ask for a better service.” – Dave",
    "“Best barber about, been coming to Erdi for years” – Theo",
];

const Reviews = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>What Our Clients Say</h2>

            <div className={styles.scroller}>
                <div className={styles.inner}>
                    {reviewList.map((text, i) => (
                        <div key={i} className={styles.review}>
                            <span className={styles.reviewStars}>★★★★★</span> {text}
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.summaryBox}>
                <p className={styles.average}>
                    ⭐ <strong>4.9</strong> average rating
                </p>
                <a
                    href={GOOGLE_BUSINESS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.googleLink}
                >
                    View all Google reviews →
                </a>
            </div>
        </section>
    );
};

export default Reviews;
