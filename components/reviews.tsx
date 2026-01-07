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
                    href="https://www.google.com/search?sca_esv=189c82b39954af99&rlz=1CAVUMJ_enGB1078&sxsrf=ANbL-n7EixKPWqKsTXXtkZik57v8WVZEsQ:1767829150826&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOU7Ca7-2HNOJPTv3KykL_3GOm0c4XH_2PdcUbDvwInEjMoem--LwEpktRxXuXlQqZaAF51k_uoA9lvPoaRDsFSwM5Z83YHyKdedLHjCNgWP4HMjE-g%3D%3D&q=Pristine+barbers+Reviews&sa=X&ved=2ahUKEwjb3bvkzPqRAxV-YEEAHXF0DiwQ0bkNegQIIRAD&biw=1616&bih=909&dpr=1.19&aic=0"
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
