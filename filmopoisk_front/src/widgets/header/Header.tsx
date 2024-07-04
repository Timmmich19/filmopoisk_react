import type { ReactNode, FC } from "react";
import styles from "./Header.module.css";

interface IHeader {
  logoText: string;
  children: ReactNode;
}

const Header: FC<IHeader> = ({ logoText, children }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>{logoText}</div>
      {children}
    </header>
  );
};

export default Header;
