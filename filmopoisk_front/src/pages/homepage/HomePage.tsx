import React from "react";
import styles from "./HomePage.module.css";
import FilmsList from "@/widgets/filmsList/FilmsList";

const HomePage: React.FC = () => {
  return (
    <div className={styles.homepage}>
      <FilmsList />
    </div>
  );
};
export default HomePage;
