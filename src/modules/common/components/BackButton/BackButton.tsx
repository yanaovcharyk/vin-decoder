import { Link } from "react-router-dom";
import arrowLeftIcon from "@assets/icons/arrow-left.svg";
import styles from "./BackButton.module.scss";

interface BackButtonProps {
  to: string;
  children?: React.ReactNode;
}

export const BackButton = ({ to, children = "Back" }: BackButtonProps) => (
  <Link to={to} className={styles.backButton}>
    <img
      src={arrowLeftIcon}
      alt="arrow Left Icon"
      aria-hidden="true"
      className={styles.icon}
    />

    <span>{children}</span>
  </Link>
);
