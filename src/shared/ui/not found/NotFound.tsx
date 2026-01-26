import { Link } from "@tanstack/react-router";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      {/* Background 404 */}
      <div className={styles.bgText}>404</div>

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.message}>
          The page you’re looking for does not exist.
        </p>

        <Link to="/" className={styles.homeBtn}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
