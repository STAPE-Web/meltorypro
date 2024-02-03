import { FC } from "react"
import styles from "./style.module.css"

interface Props {
    children: any
    onClick: () => void
}


const ButtonBrandTertiary: FC<Props> = ({ children, onClick }) => {
    return (
        <button
            className={styles.Button}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonBrandTertiary