import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css";
import { Orbitron } from "next/font/google";
import Hero from "./components/hero";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
}
