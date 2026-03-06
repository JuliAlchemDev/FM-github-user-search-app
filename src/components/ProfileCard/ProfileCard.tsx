import { mockUser } from "../../mocks/github.mock";
import styles from "./ProfileCard.module.css";
import NoResultsFound from "./NoResults";
import ProfileLinks from "./ProfileLinks/ProfileLinks";
import ProfileStats from "./ProfileStats/ProfileStats";

const ProfileCard = () => {
  const {
    name,
    login,
    bio,
    created_at,
    avatar_url,
    location,
    blog,
    twitter_username,
    company,
    public_repos,
    followers,
    following,
  } = mockUser;

  return (
    <main className={styles.profileSection}>
      <img
        src={avatar_url}
        alt="user's avatar"
        className={styles.userAvatar}
        width={70}
        height={70}
      />
      <header className={styles.profileHeader}>
        <h2 className={styles.profileName}>{name}</h2>
        <p className={styles.profileLogin}>@{login}</p>
        <p className={styles.profileJoinDate}>{created_at}</p>
      </header>
      <section className={styles.profileInfo}>
        <p className={styles.profileBio}>
          {bio ? bio : "This profile has no bio"}
        </p>
        <ProfileStats
          public_repos={public_repos}
          followers={followers}
          following={following}
        />
        <ProfileLinks
          location={location}
          blog={blog}
          twitter_username={twitter_username}
          company={company}
        />
      </section>
    </main>
    // <NoResultsFound />
  );
};
export default ProfileCard;
