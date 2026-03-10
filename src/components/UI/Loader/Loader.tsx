import styles from "./Loader.module.css";
import loaderVideo from "../../../assets/loader.mp4";

export default function Loader() {
  return (
    <section className={styles.loader}>
      <video autoPlay loop muted playsInline className={styles.loaderVideo}>
        <source src={loaderVideo} type="video/mp4" />
      </video>
      <p className={styles.searchingText}>
        Searching<span className={styles.searchingDots}></span>
      </p>
    </section>
  );
}
