import LogoMobile from "@/assets/LogoMobile.png"
import ButtonBrandPrimary from "@/ui/Buttons/Brand/Primary"
import ButtonBrandTertiary from "@/ui/Buttons/Brand/Tertiary"
import IconButton from "@/ui/IconButton"
import styles from "./style.module.css"
import useGlobalStore from "@/store"
import { CloseIcon } from "@/ui/Icons"

const MobileMenu = () => {
    const mobileMenu = useGlobalStore(state => state.mobileMenu)
    const changeMobileMenu = useGlobalStore(state => state.changeMobileMenu)

    const navList = [
        { name: "About signals ", link: "" },
        { name: "Calculate your income", link: "" },
        { name: "Features of our White Label", link: "" },
        { name: "Our functionality", link: "" },
        { name: "Pricing", link: "" },
    ]

    return (
        <div className={`${styles.MobileMenu} ${mobileMenu ? styles.Active : ""}`}>
            <div className={styles.Top}>
                <img src={LogoMobile} alt="" />
                <IconButton onClick={() => changeMobileMenu(false)}>
                    <CloseIcon className={styles.CloseIcon} />
                </IconButton>
            </div>

            <ul>
                {navList.map((nav, index) => (
                    <li key={index}>{nav.name}</li>
                ))}
            </ul>

            <div className={styles.Buttons}>
                <ButtonBrandPrimary onClick={() => ({})}>Get started</ButtonBrandPrimary>
                <ButtonBrandTertiary onClick={() => ({})}>Sign in</ButtonBrandTertiary>
            </div>
        </div>
    )
}

export default MobileMenu