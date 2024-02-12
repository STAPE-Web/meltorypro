import styles from "./style.module.css"

const Section9 = () => {
    return (
        <section className={styles.Section}>
            <div id="Pricing" className={styles.AnchorBox} />

            <h2>Pricing</h2>

            <div>
                <h3>Сommission</h3>
                <h4>10%</h4>
                <p>of the subscription of your users.</p>
                <div>First 30 days free</div>
            </div>

            <button>lets start</button>
        </section>
    )
}

export default Section9