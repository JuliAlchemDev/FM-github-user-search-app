import styles from "./NoResults.module.css";
const NoResultsFound = () => {
    return (
        <section className={styles.noResultsSection}>
        <h1 className={styles.noResultsTitle}>No results found!</h1>
        <p className={styles.noResultsText}>We couldn’t find any GitHub users matching your search. Please double-check the username and try again.</p>
        </section>
    )
}
export default NoResultsFound;