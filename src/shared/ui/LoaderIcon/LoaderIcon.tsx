import { Loader2 } from "lucide-react";
import styles from "./LoaderIcon.module.css";

type LoaderSize = "sm" | "md" | "lg";
type LoaderVariant = "primary" | "secondary" | "tertiary";

type Props = {
  size?: LoaderSize;
  variant?: LoaderVariant;
  className?: string;
};

export default function LoaderIcon({
  size,
  variant = "primary",
  className = "",
}: Props) {
  const classes = [
    styles.loader,
    styles[`variant-${variant}`],
    size ? styles[`size-${size}`] : "",
    className,
  ].join(" ");

  return (
    <span className={classes}>
      <Loader2 className={styles.icon} />
    </span>
  );
}
