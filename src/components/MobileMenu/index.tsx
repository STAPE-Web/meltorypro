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
        { name: "White label", link: "#AboutSignals" },
        { name: "Calculate your income", link: "#CalculateIncome" },
        { name: "Features", link: "#FeaturesWhiteLabel" },
        { name: "Functionality", link: "#OurFunctionality" },
        { name: "Pricing", link: "#Pricing" },
    ]

    function anchorNavigate(link: string) {
        const anchor = document.querySelector(link)
        anchor?.scrollIntoView({ behavior: 'smooth' })
        changeMobileMenu(false)
    }

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
                    <li key={index} onClick={() => anchorNavigate(nav.link)}>{nav.name}</li>
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