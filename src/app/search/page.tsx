import { ReactElement } from "react";
import styles from "./page.module.css";
import FilterComponent from "./components/filter/filter.component";

export default function SearchPage(): ReactElement {
  const items = Array(100)
    .fill(null)
    .map((_, i) => i + 1);

  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <FilterComponent
          title="زوج یا فرد"
          options={[
            { label: "زوج", value: "even" },
            { label: "فرد", value: "odd" },
          ]}
        />

        <FilterComponent
          title="بخش پذیری"
          options={[
            { label: "two", value: "بخش پذیر بر ۲" },
            { label: "three", value: "بخش پذیر بر ۳" },
            { label: "five", value: "بخش پذیر بر ۵" },
          ]}
        />
      </div>

      <ul className={styles.results}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
