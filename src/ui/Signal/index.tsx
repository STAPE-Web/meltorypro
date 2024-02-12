import { ISignal } from "@/types"
import { FC } from "react"
import styles from "./style.module.css"
import Chart from "@/assets/Chart"
import Avatar from "@/assets/Avatar.png"

interface Props {
    signal: ISignal
}

const Signal: FC<Props> = ({ signal }) => {
    return (
        <div className={styles.Signal}>
            <div className={styles.Title}>
                <img src={Avatar} alt="" />

                <div>
                    <h3>{signal.name}</h3>
                    <p>{signal.owner}</p>
                </div>
            </div>

            <Chart className={styles.Chart} />

            <div className={styles.InfoBox} >
                <div className={styles.Row}>
                    <div className={styles.Start}>
                        <h3>+{signal.ROI7D}%</h3>
                        <p>7D ROI</p>
                    </div>

                    <div className={styles.End}>
                        <h3>{signal.maxDrowdown}%</h3>
                        <p>Max Drowdown</p>
                    </div>
                </div>

                <div className={styles.Row}>
                    <div className={styles.Start}>
                        <h3>+{signal.ROI7D}%</h3>
                        <p>30D ROI</p>
                    </div>

                    <div className={styles.End}>
                        <h3>{signal.copiers}</h3>
                        <p>Copiers</p>
                    </div>
                </div>
            </div>

            <button>More</button>
        </div>
    )
}

export default Signal