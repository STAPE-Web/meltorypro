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

    return (
        <header className={styles.Header}>
            <Logo className={styles.Logo} />
            <img src={LogoMobile} className={styles.LogoMobile} alt='' />

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
        </header>
    );
};

export default Header;
