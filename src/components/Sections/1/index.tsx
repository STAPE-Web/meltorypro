import ButtonBrandPrimary from "@/ui/Buttons/Brand/Primary"
import ButtonOutline from "@/ui/Buttons/Outline"
import { ArrowLeftIcon } from "@/ui/Icons"
import styles from "./style.module.css"
import Image1 from "@/assets/Section_1_1.png"
import Image2 from "@/assets/Section_1_2.png"

const Section1 = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Box}>
                <h1>White label copy trading solution <br /> for community owners and traders</h1>
                <h3>Promote your copy trading services and earn money while maintaining full control over your brand.</h3>

                <div className={styles.Buttons}>
                    <ButtonOutline onClick={() => ({})}>Demo view</ButtonOutline>
                    <ButtonBrandPrimary onClick={() => ({})}>
                        Create your own copy trading
                        <ArrowLeftIcon />
                    </ButtonBrandPrimary>
                </div>
            </div>

            <div className={styles.Images}>
                <img src={Image1} className={styles.Image1} alt="" />
                <img src={Image2} className={styles.Image2} alt="" />
            </div>
        </section>
    )
}

export default Section1