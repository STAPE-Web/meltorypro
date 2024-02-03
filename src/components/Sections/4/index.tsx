import Message from "@/ui/Message"
import styles from "./style.module.css"
import Image1 from "@/assets/Section_4_1.png"
import Image2 from "@/assets/Section_4_2.png"
import Image3 from "@/assets/Section_4_3.png"

import MobileImage1 from "@/assets/Mobile/Section_4_1.png"
import MobileImage2 from "@/assets/Mobile/Section_4_2.png"
import MobileImage3 from "@/assets/Mobile/Section_4_3.png"
import MobileImage4 from "@/assets/Mobile/Section_4_4.png"

const Section4 = () => {
    return (
        <section className={styles.Section}>
            <h2>Features of our White Label</h2>
            <p>Eget in non egestas luctus. Sit sed netus nunc sollicitudin porta <br /> blandit. Amet at tempor turpis elit et vulputate condimentum sed id.</p>

            <div className={styles.Box}>
                <h2>Your own copytrade website</h2>
                <h3>Nexo decentraland stellar BitTorrent golem THETA terra. Velas fantom <br /> digibyte polymath cosmos aave cosmos amp vechain.</h3>

                <div className={styles.Images}>
                    <Message text="Your custom domain" className={styles.Message1} />
                    <img src={Image1} className={styles.Image1} alt="" />

                    <Message text="Your signals" className={styles.Message2} />
                    <img src={Image2} className={styles.Image2} alt="" />

                    <Message text="Mobile Version" className={styles.Message3} />
                    <img src={Image3} className={styles.Image3} alt="" />
                </div>
            </div>

            <div className={styles.Slider}>
                <div className={styles.Slide}>
                    <div>
                        <h3>Your own copytrade website</h3>
                        <p>Nexo decentraland stellar BitTorrent golem THETA terra. Velas fantom digibyte polymath cosmos aave cosmos amp vechain.</p>
                    </div>

                    <img src={MobileImage1} alt="" />
                </div>

                <div className={styles.Slide}>
                    <div>
                        <h3>Mobile App</h3>
                        <p>Vitae elit placerat quis quis. Nec sed id et ut neque aliquam massa mattis amet.</p>
                        <p>Vitae elit placerat quis quis. Nec sed id et ut neque aliquam massa mattis amet.</p>
                    </div>

                    <img src={MobileImage2} alt="" />
                </div>

                <div className={styles.Slide}>
                    <div>
                        <h3>Add your signal</h3>
                        <p>Vitae elit placerat quis quis. Nec sed id et ut neque aliquam massa mattis amet.</p>
                        <p>Vitae elit placerat quis quis. Nec sed id et ut neque aliquam massa mattis amet.</p>
                    </div>

                    <img src={MobileImage3} alt="" />
                </div>

                <div className={styles.Slide}>
                    <div>
                        <h3>Convenient registration</h3>
                        <p>Convenient registration via Telegram and Discord</p>
                    </div>

                    <img src={MobileImage4} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Section4