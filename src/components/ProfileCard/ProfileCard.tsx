import { GitHubUser } from "../../types/github";
import { mockUser } from "../../mocks/github.mock";
import styles from "./ProfileCard.module.css";
import NoResultsFound from "./NoResults";
import ProfileLinks from "./ProfileLinks/ProfileLinks";
import ProfileStats from "./ProfileStats/ProfileStats";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const formatDate = (date: string) => {
  const newDate = new Date(date);
  return `${newDate.getDate()} ${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}`;
};
type ProfileCardProps = {
  user?: GitHubUser | null;
};
const ProfileCard = ({ user = mockUser }: ProfileCardProps) => {
  if (!user) return <NoResultsFound />;
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

  const joinDate = formatDate(created_at);

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
        <p className={styles.profileJoinDate}>Joined {joinDate}</p>
      </header>
      <section className={styles.profileInfo}>
        <p className={styles.profileBio}>
          {bio ?? <span className={styles.muted}>This profile has no bio</span>}
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
  );
};
export default ProfileCard;
