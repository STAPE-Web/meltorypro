import Calculator from "@/components/Calculator"
import styles from "./style.module.css"
import Image from "@/assets/Section_3_1.png"

const Section3 = () => {
    return (
        <section className={styles.Section}>
            <img src={Image} className={styles.Image} alt="" />
            <h2>Calculate your income</h2>
            <p>Select the type of payment received from your clients</p>
            <Calculator />
        </section>
    )
}

export default Section3