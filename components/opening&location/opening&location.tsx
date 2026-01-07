import styles from "./opening&location.module.css";

export default function OpeningAndLocation() {
    return (
        <section className={styles.container} id="opening-times">

            {/* OPENING TIMES */}
            <h2 className={styles.title}>Opening Times</h2>

            {/* Desktop Table */}
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Sun</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>9am – 7pm</td>
                            <td>9am – 7pm</td>
                            <td>9am – 7pm</td>
                            <td>9am – 7pm</td>
                            <td>9am – 8pm</td>
                            <td>9am – 7pm</td>
                            <td>10am – 5pm</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Mobile List */}
            <div className={styles.mobileList}>
                <div className={styles.mobileRow}><span>Mon</span><span>9am – 6pm</span></div>
                <div className={styles.mobileRow}><span>Tue</span><span>9am – 6pm</span></div>
                <div className={styles.mobileRow}><span>Wed</span><span>9am – 6pm</span></div>
                <div className={styles.mobileRow}><span>Thu</span><span>9am – 7pm</span></div>
                <div className={styles.mobileRow}><span>Fri</span><span>9am – 7pm</span></div>
                <div className={styles.mobileRow}><span>Sat</span><span>9am – 5pm</span></div>
                <div className={styles.mobileRow}><span>Sun</span><span>Closed</span></div>
            </div>

            {/* FIND US SECTION */}
            <h2 className={styles.title} id="location">Find Us</h2>

            <div className={styles.mapCard}>
                <iframe
                    className={styles.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36500.63939934252!2d-1.8574144789505662!3d50.75923032163861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4873a11c797d0443%3A0x9bf97e433b124ebc!2sPristine%20barbers!5e0!3m2!1sen!2sat!4v1766434670193!5m2!1sen!2sat"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />

            </div>

        </section>
    );
}
