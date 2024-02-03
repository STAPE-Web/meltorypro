import { FC } from "react"
import styles from "./style.module.css"

interface Props {
    array: string[]
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const Tabs: FC<Props> = ({ array, setValue, value }) => {
    return (
        <div className={styles.Tabs}>
            {array.map((item, index) => (
                <div
                    key={index}
                    onClick={() => setValue(item)}
                    className={value === item ? styles.Active : ""}
                >
                    {item}
                </div>
            ))}
        </div>
    )
}

export default Tabs