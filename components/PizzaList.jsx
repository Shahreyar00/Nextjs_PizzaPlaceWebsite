import Link from "next/link";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";


const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus obcaecati ducimus corporis, saepe qui sequi dolor placeat atque fuga, sit architecto minus at omnis enim pariatur iure? Deserunt, ullam!
            </p>
            <div className={styles.wrapper}>
                    <PizzaCard/>
                    <PizzaCard/>
                    <PizzaCard/>
                    <PizzaCard/>
                    <PizzaCard/>
                    <PizzaCard/>
                    <PizzaCard/>
                    <PizzaCard/>
                
            </div>
        </div>
    )
}

export default PizzaList






