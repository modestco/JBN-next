import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={orbitron.className}>JAYBONATION</h1>
    </div>
  );
}
