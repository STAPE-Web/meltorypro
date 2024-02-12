import Logo from '@/assets/Logo';
import ButtonBrandPrimary from '@/ui/Buttons/Brand/Primary';
import ButtonBrandTertiary from '@/ui/Buttons/Brand/Tertiary';
import IconButton from '@/ui/IconButton';
import { GlobeIcon, MenuIcon } from '@/ui/Icons';
import styles from "./style.module.css"
import LogoMobile from "@/assets/LogoMobile.png"
import useGlobalStore from '@/store';

const Header = () => {
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
        <header className={styles.Header}>
            <div className={styles.Container}>
                <div className={styles.LogoBox}>
                    <Logo className={styles.Logo} />
                    <img src={LogoMobile} className={styles.LogoMobile} alt='' />
                </div>

                <ul>
                    {navList.map((nav, index) => (
                        <li key={index} onClick={() => anchorNavigate(nav.link)}>{nav.name}</li>
                    ))}
                </ul>

                <div className={styles.Buttons}>
                    <IconButton onClick={() => ({})}>
                        <GlobeIcon className={styles.Icon} />
                    </IconButton>

                    <ButtonBrandTertiary onClick={() => ({})}>Sign in</ButtonBrandTertiary>
                    <ButtonBrandPrimary onClick={() => ({})}>Get started</ButtonBrandPrimary>

                    <div className={styles.IconButtonBox}>
                        <IconButton onClick={() => changeMobileMenu(true)}>
                            <MenuIcon className={styles.MenuIcon} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
