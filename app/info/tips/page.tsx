import styles from "./tips.module.css";

export default function TipsPage() {
    return (
        <main className={styles.tipsPage}>
            <section className={styles.hero}>
                <h1>Hair & Grooming Tips</h1>
                <p>
                    Simple, practical advice we give every day in the shop — no trends,
                    no overcomplication, just what actually works.
                </p>
            </section>

            <section className={styles.content}>
                <article className={styles.tip}>
                    <h2>Don’t over-wash your hair</h2>
                    <p>
                        Washing your hair every day can dry it out and make it harder to
                        manage. For most people, two to three times a week is enough.
                        Rinsing with water on off days is fine.
                    </p>
                </article>

                <article className={styles.tip}>
                    <h2>Use less product than you think</h2>
                    <p>
                        Too much product weighs the hair down and makes styles look greasy.
                        Start with a small amount, work it in properly, and only add more if
                        you need it.
                    </p>
                </article>

                <article className={styles.tip}>
                    <h2>Timing your next haircut matters</h2>
                    <p>
                        Most styles look best when maintained regularly. Leaving it too long
                        makes even a good cut hard to manage. Booking in before it grows out
                        completely keeps things looking sharp.
                    </p>
                </article>

                <article className={styles.tip}>
                    <h2>Beards need maintenance too</h2>
                    <p>
                        Beards benefit from trimming, brushing, and the right products just
                        like hair. A little upkeep goes a long way in keeping it looking
                        clean rather than unkempt.
                    </p>
                </article>
            </section>
        </main>
    );
}
