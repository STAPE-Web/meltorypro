import { FC } from "react"
import styles from "./style.module.css"

interface Props {
    type: "text" | "number"
    label: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<Props> = ({ type, label, onChange, value }) => {
    return (
        <div className={styles.Input}>
            <label>{label}</label>
            <input
                type={type}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default Input