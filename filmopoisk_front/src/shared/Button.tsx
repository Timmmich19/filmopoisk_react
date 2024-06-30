import styles from "./Button.module.css";
import { type FC } from "react";

interface IButtonProps {
  buttonText: string;
}

const Button: FC<IButtonProps> = ({ buttonText }) => {
  return <button className={styles.button}>{buttonText}</button>;
};

export default Button;
