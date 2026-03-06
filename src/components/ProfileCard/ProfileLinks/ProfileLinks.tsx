import BlogIcon from "./Icons/BlogIcon";
import CompanyIcon from "./Icons/CompanyIcon";
import LocationIcon from "./Icons/LocationIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import styles from "./ProfileLinks.module.css";

type ProfileLinksProps = {
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
  company: string | null;
};
const NotAvailable = () => <span className={styles.muted}>Not available</span>;
const linkClass = (value: string | null) =>
  `${styles.linkIcon} ${!value ? styles.muted : ""}`;
const ProfileLinks = ({
  location,
  blog,
  twitter_username,
  company,
}: ProfileLinksProps) => {
  const locationCleaner = location?.split(",")[0]; 
  return (
    <ul className={styles.profileLinks}>
      <li className={styles.profileLinkItem}>
        <LocationIcon className={linkClass(location)} />
        {locationCleaner ?? <NotAvailable />}
      </li>
      <li className={styles.profileLinkItem}>
        <TwitterIcon className={linkClass(twitter_username)} />
        {twitter_username ? `@${twitter_username}` : <NotAvailable />}
      </li>
      <li className={styles.profileLinkItem}>
        <BlogIcon className={linkClass(blog)} />
        {blog ? (
          <a
            href={blog}
            className={styles.blogLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit blog: ${blog}`}
          >
            {blog}
          </a>
        ) : (
          <NotAvailable />
        )}
      </li>
      <li className={styles.profileLinkItem}>
        <CompanyIcon className={linkClass(company)} />
        {company ?? <NotAvailable />}
      </li>
    </ul>
  );
};
export default ProfileLinks;
