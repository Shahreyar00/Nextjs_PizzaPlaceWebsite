import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" objectFit="cover" layout="fill" alt=""/>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        YOUR OWN SLICE OF BEST ITALIAN PIZZA.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND YOUR RESTRAUNT</h1>
                    <p className={styles.text}>
                        34/E. Main Road
                        <br/>Ranchi, 834001
                        <br/>+91 23456 65432
                    </p>
                    <p className={styles.text}>
                        146 E. Sadar Bazar 
                        <br/>Ranchi, 834001
                        <br/>+91 23456 65432
                    </p>
                    <p className={styles.text}>
                        21/C Club Complex 
                        <br/>Ranchi, 834001
                        <br/>+91 23456 65432
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY - FRIDAY 
                        <br/> 9:00 - 22:00 
                    </p>
                    <p className={styles.text}>
                        WEEKENDS 
                        <br/> 11:00 - 24:00 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
