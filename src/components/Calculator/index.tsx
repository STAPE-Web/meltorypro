import { useState } from "react"
import Tabs from "@/components/Tabs"
import Input from "@/ui/Input"
import ButtonBig from "@/ui/Buttons/Big"
import styles from "./style.module.css"
import Image from "@/assets/Section_3_1.png"
import Select from "@/ui/Select"

const Calculator = () => {
    const [state, setState] = useState("Payment for a share of income")
    const [clients, setClients] = useState("1000")
    const [accountSize, setAccoutSize] = useState("10 000$")
    const [income, setIcome] = useState("25%")
    const [commission, setCommission] = useState("30%")
    const earnings = "750 000"

    const tabs = ["Payment for a share of income", "Fixed monthly subscription fee"]

    return (
        <div className={styles.Calculator}>
            <div className={styles.Title}>
                <h3>Select the type of payment received from your clients</h3>
                <div className={styles.TabsBox}>
                    <Tabs array={tabs} setValue={setState} value={state} />
                </div>

                <div className={styles.SelectBox}>
                    <Select array={tabs} setValue={setState} value={state} />
                </div>
            </div>

            <Input
                label="Enter the number of your clients connected to the signal"
                onChange={e => setClients(e.target.value)}
                type="text"
                value={clients}
            />

            <div className={styles.Box}>
                <Input
                    label="Average customer account size"
                    onChange={e => setAccoutSize(e.target.value)}
                    type="text"
                    value={accountSize}
                />
                <Input
                    label="Average income per month"
                    onChange={e => setIcome(e.target.value)}
                    type="text"
                    value={income}
                />
                <Input
                    label="Your commission on income"
                    onChange={e => setCommission(e.target.value)}
                    type="text"
                    value={commission}
                />
            </div>

            <div className={styles.Result}>
                <p>Possible earnings</p>

                <div>
                    <h3>{earnings}$</h3>
                    <ButtonBig onClick={() => ({})}>Start your copytrade</ButtonBig>
                </div>
            </div>

            <img src={Image} className={styles.Image} alt="" />
        </div>
    )
}

export default Calculator