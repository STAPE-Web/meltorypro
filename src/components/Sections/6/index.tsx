import styles from "./style.module.css"
import Image from "@/assets/Section_6_1.png"

const Section6 = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Textbox}>
                <h2>Add your signal </h2>
                <p>Vitae elit placerat quis quis. Nec sed id et <br /> ut neque aliquam massa mattis amet.</p>
                <p>Vitae elit placerat quis quis. Nec sed id et <br /> ut neque aliquam massa mattis amet.</p>
            </div>

            <img src={Image} alt="" />
        </section>
    )
}

export default Section6