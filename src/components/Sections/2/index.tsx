import Signal from "@/ui/Signal"
import { signals } from "./constants"
import ButtonBrandSecondary from "@/ui/Buttons/Brand/Secondary"
import styles from "./style.module.css"
import Image from "@/assets/Section_2_1.png"

const Section2 = () => {
    return (
        <section className={styles.Section}>
            <h2>Сhoose one of our <span>ready-made <br /> signals</span> or You can run your own signal </h2>

            <div className={styles.Box}>
                <div className={styles.Signals}>
                    {signals.map((signal, index) => (
                        <Signal signal={signal} key={index} />
                    ))}
                </div>

                <div className={styles.OR}>or</div>

                <div className={styles.Signal}>
                    <img src={Image} className={styles.Image} alt="" />

                    <div className={styles.Info}>
                        <h3>Add your own signal</h3>
                        <p>You can rename it and present it as your signal <br /> to your subscribers</p>
                        <ButtonBrandSecondary onClick={() => ({})}>Get started</ButtonBrandSecondary>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2