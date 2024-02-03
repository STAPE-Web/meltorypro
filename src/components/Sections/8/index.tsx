import Card from "@/ui/Card"
import { cards } from "./constants"
import styles from "./style.module.css"

const Section8 = () => {
    return (
        <section className={styles.Section}>
            <h2>Our functionality</h2>
            <p>Set up payment options for clients for connecting to the signal: by <br /> subscription or for a share of the income</p>

            <div className={styles.Cards}>
                {cards.map((card, index) => (
                    <Card key={index} card={card} />
                ))}
            </div>
        </section>
    )
}

export default Section8