import styles from "./Loader.module.scss";

interface LoaderProps {
  text?: string;
}

export const Loader = ({
  text = "Loading...",
}: LoaderProps) => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner} />

      <p className={styles.text}>
        {text}
      </p>
    </div>
  );
};