import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <section className={styles.loader}>
      <video autoPlay loop muted playsInline className={styles.loaderVideo}>
        <source src="/loader.mp4" type="video/mp4" />
      </video>
      <p className={styles.searchingText}>
        Searching<span className={styles.searchingDots}></span>
      </p>
    </section>
  );
}
