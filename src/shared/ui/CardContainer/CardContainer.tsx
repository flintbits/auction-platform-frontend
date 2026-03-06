import styles from './CardContainer.module.css';


type CardContainerProps = {
  children: React.ReactNode;
  onClick?: (...args: any[]) => void
}

export default function CardContainer({ children, onClick }: CardContainerProps) {
  return <div onClick={onClick} className={styles.card}>{children}</div>;
}
