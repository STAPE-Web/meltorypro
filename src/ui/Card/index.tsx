import { ICard } from "@/types"
import { FC } from "react"
import styles from "./style.module.css"

interface Props {
    card: ICard
}

const Card: FC<Props> = ({ card }) => {
    return (
        <div className={styles.Cards}>
            <h3><span>{card.icon}</span> {card.title}</h3>
            <p>{card.description}</p>
        </div>
    )
}

export default Card