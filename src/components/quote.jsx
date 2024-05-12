import styles from "./quote.module.css"

export default function Quote({quote}){
    return (
        <article className={styles.quote}>
            <p><strong>{quote.text}</strong></p>
            <p><small>{quote.author}</small></p>
            <p><small>{quote.id}</small></p>
        </article>
    )
}
