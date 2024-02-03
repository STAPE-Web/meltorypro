import Nav from "@/ui/Nav"
import { navigation } from "./constants"
import styles from "./style.module.css"

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Container}>
                <div className={styles.Logo}>
                    <h3>meltory</h3>
                    <p>© 2023 MELTROY <br /> All rights reserved</p>
                </div>

                <div className={styles.Empty} />

                {navigation.map((nav, index) => (
                    <Nav array={nav.array} title={nav.title} key={index} />
                ))}
            </div>
        </footer>
    )
}

export default Footer