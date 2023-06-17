import logo from "../../assets/investment-calculator-logo.jpg";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" loading="lazy" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
