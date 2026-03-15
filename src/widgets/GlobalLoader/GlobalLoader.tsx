import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import styles from "./GlobalLoader.module.css";

export function GlobalLoader() {
  const fetching = useIsFetching();
  const mutating = useIsMutating();

  const loading = fetching > 0 || mutating > 0;

  if (!loading) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.loader}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div >
  );
}
