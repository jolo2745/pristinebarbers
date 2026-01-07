import styles from "./blog.module.css";

export default function BlogPage() {
    return (
        <main className={styles.blogPage}>
            <section className={styles.hero}>
                <h1>The Blog</h1>
                <p>
                    Thoughts, updates, and observations from the shop — written as we go,
                    based on what we see every day.
                </p>
            </section>

            <section className={styles.posts}>
                <article className={styles.post}>
                    <h2>Keeping standards consistent</h2>
                    <p>
                        One of the biggest things we focus on is consistency. It doesn’t
                        matter if it’s a quiet weekday or a busy Saturday — the standard
                        should never change. Every client deserves the same level of care,
                        attention, and time, regardless of how full the shop is.
                    </p>
                </article>

                <article className={styles.post}>
                    <h2>Why small details matter</h2>
                    <p>
                        Most people won’t point out the small things, but they notice them.
                        Clean lines, even fades, taking an extra minute to check the finish —
                        those details add up. They’re the difference between a decent cut
                        and one you feel confident walking out with.
                    </p>
                </article>

                <article className={styles.post}>
                    <h2>More than just a haircut</h2>
                    <p>
                        For a lot of clients, the barbershop is one of the few places they
                        slow down. It’s a chance to reset, have a proper conversation, and
                        leave feeling sharper than when they walked in. That atmosphere is
                        just as important as the cut itself.
                    </p>
                </article>
            </section>
        </main>
    );
}
