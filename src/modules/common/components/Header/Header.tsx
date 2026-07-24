import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import menuIcon from "@assets/icons/burger-menu.svg";
import closeIcon from "@assets/icons/close-white.svg";

import styles from "./Header.module.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link
          to="/"
          className={styles.logo}
        >
          VIN Decoder
        </Link>

        <button
          className={styles.burger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <img
            src={isOpen ? closeIcon : menuIcon}
            className={styles.burgerIcon}
            alt="burgerIcon "
          />
        </button>

        <nav className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link
                to="/"
                className={`${styles.menuLink} ${
                  isActive("/")
                    ? styles.active
                    : ""
                }`}
              >
                Decode VIN
              </Link>
            </li>

            <li className={styles.menuItem}>
              <Link
                to="/variables"
                className={`${styles.menuLink} ${
                  isActive("/variables")
                    ? styles.active
                    : ""
                }`}
              >
                Dictionary
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
