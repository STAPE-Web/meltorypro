import { ISignal } from "@/types"
import { FC } from "react"
import ButtonBrandSecondary from "../Buttons/Brand/Secondary"
import styles from "./style.module.css"

interface Props {
    signal: ISignal
}

const Signal: FC<Props> = ({ signal }) => {
    return (
        <div className={styles.Signal}>
            <div className={styles.Title}>
                <h3>{signal.name}</h3>
                <p>{signal.description}</p>
            </div>

            <div className={styles.PNL}>
                <div className={styles.PNL30D}>
                    <h4>+{signal.PNL30D}%</h4>
                    <p>PNL last 30D</p>
                </div>

                <div className={styles.PNL3M}>
                    <h4>+{signal.PNL3M}%</h4>
                    <p>PNL last 3M</p>
                </div>
            </div>

            <ButtonBrandSecondary onClick={() => ({})}>Get started</ButtonBrandSecondary>
        </div>
    )
}

export default Signal