import { FC } from "react"
import styles from "./style.module.css"

interface Props {
    text: string
    className: string
}

const Message: FC<Props> = ({ text, className }) => {
    return (
        <div className={`${className} ${styles.Box}`}>
            <div className={styles.Message}>{text}</div>
            <div className={styles.Triangle}></div>
        </div>
    )
}

export default Message