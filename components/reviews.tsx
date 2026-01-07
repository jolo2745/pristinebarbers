import styles from "./reviews.module.css";

const reviewList = [
    "“Best fade I’ve ever had.” – James",
    "“Super clean shop, amazing service.” – Amir",
    "“My go-to barber every month.” – Lewis",
    "“Perfect skin fade every single time.” – Daniel",
    "“Friendly staff and great atmosphere.” – Ruben",
];

const Reviews = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>What Our Clients Say</h2>

            {/* DESKTOP SCROLLER */}
            <div className={styles.scroller}>
                <div className={styles.inner}>
                    {reviewList.map((text, i) => (
                        <div key={i} className={styles.review}>
                            <span className={styles.reviewStars}>★★★★★</span> {text}
                        </div>
                    ))}

                    {reviewList.map((text, i) => (
                        <div key={`dup-${i}`} className={styles.review}>
                            <span className={styles.reviewStars}>★★★★★</span> {text}
                        </div>
                    ))}
                </div>
            </div>

            {/* MOBILE STACKED REVIEWS */}
            <div className={styles.mobileReviews}>
                {reviewList.map((text, i) => (
                    <div key={i} className={styles.mobileReviewCard}>
                        <p className={styles.mobileStars}>★★★★★</p>
                        <p className={styles.mobileText}>{text}</p>
                    </div>
                ))}
            </div>

            <div className={styles.summaryBox}>
                <p className={styles.average}>
                    ⭐ <strong>4.9</strong> average rating
                </p>
                <a
                    href="https://www.google.com"
                    target="_blank"
                    className={styles.googleLink}
                >
                    View all Google reviews →
                </a>
            </div>
        </section>
    );
};

export default Reviews;
