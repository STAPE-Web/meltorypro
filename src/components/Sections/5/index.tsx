import PieChart from "@/ui/PieChart"
import styles from "./style.module.css"
import Image1 from "@/assets/Section_5_1.png"
import Image2 from "@/assets/Section_5_2.png"

const Section5 = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Box}>
                <img src={Image1} className={styles.Image1} alt="" />
                <img src={Image2} className={styles.Image2} alt="" />
                <PieChart percentage="91.66" className={styles.PieChart} />
            </div>

            <div className={styles.Textbox}>
                <h2>Mobile App</h2>
                <p>Vitae elit placerat quis quis. Nec sed id et <br /> ut neque aliquam massa mattis amet.</p>
                <p>Vitae elit placerat quis quis. Nec sed id et <br /> ut neque aliquam massa mattis amet.</p>
            </div>
        </section>
    )
}

export default Section5