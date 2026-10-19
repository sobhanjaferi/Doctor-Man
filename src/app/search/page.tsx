import { ReactElement } from "react";
import styles from "./page.module.css";
import CardComponent from "@/components/card/card.component";

export default function SearchPage(): ReactElement {
  const items = Array(100)
    .fill(null)
    .map((_, i) => i + 1);

  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <CardComponent>
          <div className="title">زوج یا فرد</div>
          <button>فرد</button>
          <button>زوج</button>
        </CardComponent>
      </div>

      <ul className={styles.results}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
