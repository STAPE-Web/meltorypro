import { FC } from "react"
import styles from "./style.module.css"

interface Props {
    children: any
    onClick: () => void
}

const IconButton: FC<Props> = ({ children, onClick }) => {
    return (
        <button
            className={styles.IconButton}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default IconButton