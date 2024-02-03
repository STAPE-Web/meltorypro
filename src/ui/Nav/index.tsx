import { FC } from "react"
import styles from "./style.module.css"

type ILink = {
    name: string
    link: string
}

interface Props {
    title: string
    array: ILink[]
}

const Nav: FC<Props> = ({ title, array }) => {
    return (
        <div className={styles.Nav}>
            <h4>{title}</h4>

            <ul>
                {array.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Nav