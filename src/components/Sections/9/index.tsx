import styles from "./style.module.css"

const Section9 = () => {
    return (
        <section className={styles.Section}>
            <h2>Pricing</h2>

            <div>
                <h3>Сommission</h3>
                <h4>10%</h4>
                <p>of the subscription of your users.</p>
            </div>

            <button>First 30 days free</button>
        </section>
    )
}

export default Section9