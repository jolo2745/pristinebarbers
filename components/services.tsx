import Image from "next/image";
import styles from "./services.module.css";

const Services: React.FC = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Our Services</h2>

            <div className={styles.grid}>

                <div className={styles.serviceCard}>
                    <div className={styles.iconBox}>
                        <Image
                            src="/skinfade_v4.webp"
                            alt="Skin Fade"
                            width={70}
                            height={70}
                            className={styles.icon}
                        />
                    </div>
                    <div className={styles.text}>
                        <p className={styles.name}>Skin Fade £20</p>
                    </div>
                </div>

                <div className={styles.serviceCard}>
                    <div className={styles.iconBox}>
                        <Image
                            src="/beardtrim_v4.webp"
                            alt="Beard Trim"
                            width={70}
                            height={70}
                            className={styles.icon}
                        />
                    </div>
                    <div className={styles.text}>
                        <p className={styles.name}>Beard Trim £10</p>
                    </div>
                </div>

                <div className={styles.serviceCard}>
                    <div className={styles.iconBox}>
                        <Image
                            src="/scissorcut_v4.webp"
                            alt="Scissor Cut"
                            width={70}
                            height={70}
                            className={styles.icon}
                        />
                    </div>
                    <div className={styles.text}>
                        <p className={styles.name}>BU Hair Cut £17</p>
                    </div>
                </div>

                <div className={styles.serviceCard}>
                    <div className={styles.iconBox}>
                        <Image
                            src="/kidcut_v4.webp"
                            alt="Kids Cut"
                            width={70}
                            height={70}
                            className={styles.icon}
                        />
                    </div>
                    <div className={styles.text}>
                        <p className={styles.name}>Kids Cut £15</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
