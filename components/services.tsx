import Image from "next/image";
import styles from "./services.module.css";
import { formatPrice, popularServices } from "@/app/lib/services";

const Services: React.FC = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Our Popular Services</h2>

            <div className={styles.grid}>

                {popularServices.map((service) => (
                    <div key={service.id} className={styles.serviceCard}>
                        <div className={styles.iconBox}>
                            <Image
                                src={service.image}
                                alt={service.label}
                                width={70}
                                height={70}
                                className={styles.icon}
                            />
                        </div>
                        <div className={styles.text}>
                            <p className={styles.name}>
                                {service.label} {formatPrice(service.price)}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Services;
