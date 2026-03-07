
import styles from './Divider.module.css';

type DividerProps = {
  orientation?: "vertical" | "horizontal"
}
export default function Divider({ orientation = "horizontal" }: DividerProps) {
  return (
    <hr
      className={
        orientation === "horizontal"
          ? styles.dividerHorizontal
          : styles.dividerVertical
      }
    />
  );
}
