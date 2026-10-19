import { ReactElement } from "react";
import styles from "./page.module.css";
import FilterComponent from "./components/filter/filter.component";

export default function SearchPage(): ReactElement {
  const items = Array(100)
    .fill(null)
    .map((_, i) => i + 1);

  return (
    <div className={styles.page}>
      <FilterComponent
        title="زوج یا فرد"
        options={[
          { title: "زوج", value: "even" },
          { title: "فرد", value: "odd" },
        ]}
      />

      <ul className={styles.results}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
