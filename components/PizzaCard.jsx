import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";
import Link from "next/link";


const PizzaCard = () => {
    return (
        <Link href="/product/123" passHref>
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="" width="500" height="500" />
            <h1 className={styles.title}>FIORI DI ZUCCA</h1>
            <span className={styles.price}>Rs.480</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
        </div>
        </Link>
    )
}

export default PizzaCard



