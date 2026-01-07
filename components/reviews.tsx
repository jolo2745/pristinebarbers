import styles from "./reviews.module.css";

const reviewList = [
    "“Erdi does a great job every time ” – Sam ",
    "“Outstanding barbers great lads and good vibes and unreal trims 5 stars all round” – Brook ",
    "“10/10 taper fade, easy to book fast and efficient. Highly recommend!” – Aaron ",
    "“Couldn’t ask for a better service.” – Dave",
    "“Best barber about, been coming to Erdi for years” – Theo",
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
