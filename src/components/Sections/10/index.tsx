import styles from "./style.module.css"
import Image from "@/assets/Section_10_1.png"
import MobileImage from "@/assets/Mobile/Section_10_1.png"

const Section10 = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Textbox}>
                <div>
                    <h2>Title</h2>
                    <p>of the subscription of your users.</p>
                </div>
                <img src={MobileImage} alt="" />
                <button>Registration</button>
            </div>

            <img src={Image} className={styles.Image} alt="" />
        </section>
    )
}

export default Section10