import styles from "./style.module.css"
import Image from "@/assets/Section_7_1.png"
import DiscordImage from "@/assets/Discord.png"
import TelegramImage from "@/assets/Telegram.png"

const Section7 = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Textbox}>
                <h2>Convenient <br /> registration</h2>
                <p>Convenient registration <br /> via Telegram and Discord</p>
            </div>

            <div className={styles.Images}>
                <img src={Image} className={styles.Image1} alt="" />
                <img src={DiscordImage} className={styles.Image2} alt="" />
                <img src={TelegramImage} className={styles.Image3} alt="" />
            </div>
        </section>
    )
}

export default Section7