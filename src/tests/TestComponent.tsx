import { useTheme } from '../app/providers/Theme';
import styles from './TestComponent.module.css';


export default function TestComponent() {
    const { setTheme } = useTheme();

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Theme Test Card</h2>

            <p className={styles.text}>
                This component is fully theme-aware using CSS tokens.
            </p>

            {/* Typography test */}
            <section>
                <h3>Typography</h3>
                <p>Primary text</p>
                <p style={{ color: "var(--color-text-secondary)" }}>
                    Secondary text
                </p>
                <p style={{ color: "var(--color-text-muted)" }}>
                    Muted text
                </p>
            </section>

            {/* Surface + border test */}
            <section
                style={{
                    marginTop: "24px",
                    padding: "16px",
                    background: "var(--color-bg)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                }}
            >
                <strong>Surface container</strong>
                <p style={{ marginTop: "8px" }}>
                    Background + border contrast test
                </p>
            </section>

            {/* Status colors */}
            <section style={{ marginTop: "24px" }}>
                <p style={{ color: "var(--color-success)" }}>
                    ✔ Success message
                </p>
                <p style={{ color: "var(--color-danger)" }}>
                    ✖ Error message
                </p>
            </section>

            {/* Accent + highlight test */}
            <section style={{ marginTop: "24px" }}>
                <h3>Accent & Highlight</h3>

                <div
                    style={{
                        padding: "12px",
                        borderRadius: "var(--radius-md)",
                        background: "var(--color-highlight-bg)",
                        border: "1px solid var(--color-border)",
                    }}
                >
                    <p>
                        <strong style={{ color: "var(--color-accent)" }}>
                            Highlighted row
                        </strong>{" "}
                        using highlight background
                    </p>
                </div>

                <p style={{ marginTop: "8px", color: "var(--color-accent)" }}>
                    Accent text example
                </p>
            </section>

            {/* Form test */}
            <section style={{ marginTop: "32px" }}>
                <h3>Form Elements</h3>

                <form className={styles.form}>
                    <div className={styles.field}>
                        <label className={styles.label}>Bid Amount</label>
                        <input
                            type="number"
                            placeholder="Enter amount"
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Team Name</label>
                        <input
                            type="text"
                            placeholder="Team Alpha"
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.fieldInline}>
                        <input type="checkbox" id="autoBid" />
                        <label htmlFor="autoBid">Enable auto-bid</label>
                    </div>

                    <button type="submit" className={styles.button}>
                        Place Bid
                    </button>
                </form>
            </section>

            {/* Actions */}
            <div className={styles.actions}>
                <button className={styles.button} onClick={() => setTheme("white")}>
                    Light
                </button>
                {/* <button className={styles.button} onClick={() => setTheme("black")}>
                    Black
                </button> */}
                <button className={styles.button} onClick={() => setTheme("dark")}>
                    Dark
                </button>
            </div>
        </div>
    );
}

