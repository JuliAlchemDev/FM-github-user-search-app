import styles from "./ProfileCard.module.css";

type ProfileStatsProps = {
    public_repos: number | null,
    followers: number | null,
    following: number | null,
}

const profileStats = ({public_repos,followers, following}: ProfileStatsProps) => {
  [];
  return (
    <dl className={styles.profileStats}>
      <div className={styles.statItem}>
        <dt className={styles.statLabel}>Repos</dt>
        <dd className={styles.statValue}>{public_repos}</dd>
      </div>
      <div className={styles.statItem}>
        <dt className={styles.statLabel}>Followers</dt>
        <dd className={styles.statValue}>{followers}</dd>
      </div>
      <div className={styles.statItem}>
        <dt className={styles.statLabel}>Following</dt>
        <dd className={styles.statValue}>{following}</dd>
      </div>
    </dl>
  );
};
export default profileStats;
