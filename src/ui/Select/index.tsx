import { FC, useState } from "react"
import styles from "./style.module.css"
import { ArrowDownIcon } from "../Icons"

interface Props {
    array: string[]
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const Select: FC<Props> = ({ array, setValue, value }) => {
    const [active, setActive] = useState(false)

    function selectValue(i: string) {
        setValue(i)
        setActive(false)
    }

    return (
        <div className={`${styles.Select} ${active ? styles.Active : ""}`}>
            <div onClick={() => setActive(!active)} className={styles.Touchabe}>
                <p>{value}</p>
                <ArrowDownIcon />
            </div>

            {active && <div className={styles.List}>
                {array.map((i, index) => (
                    <div key={index} className={styles.Item} onClick={() => selectValue(i)}>
                        {i}
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default Select