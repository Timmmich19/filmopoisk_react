import React from "react";
import styles from "./HomePage.module.css";
import Header from "@/widgets/Header";
import Button from "@/shared/Button";

const HomePage: React.FC = () => {
  return (
    <div className={styles.homepage}>
      <Header logoText="Фильмопоиск">
        <Button buttonText="Войти" />
      </Header>
    </div>
  );
};
export default HomePage;
