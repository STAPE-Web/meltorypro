import { FC } from "react"
import styles from "./style.module.css"

interface Props {
    percentage: string
    className: string
}

const PieChart: FC<Props> = ({ percentage, className }) => {
    return (
        <div className={`${className} ${styles.Chart}`}>
            <h3>{percentage}%</h3>
            <p>AUDUSD</p>
        </div>
    )
}

export default PieChart