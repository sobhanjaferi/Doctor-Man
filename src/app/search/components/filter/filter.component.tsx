import CardComponent from "@/components/card/card.component";
import FilterButtonComponent from "@/components/filter-botton/filter-button.component";
import { ReactElement } from "react";
import styles from "./filter.module.css";

type Option = {
  value: string;
  title: string;
};

type Props = {
  title: string;
  options: Option[];
};

export default function FilterComponent({
  title,
  options,
}: Props): ReactElement {
  return (
    <CardComponent>
      <div className={styles.filters}>
        <div className="title">{title}</div>
        <div className={styles.buttons}>
          {options.map((option) => (
            <FilterButtonComponent key={option.value}>
              {option.title}
            </FilterButtonComponent>
          ))}
        </div>
      </div>
    </CardComponent>
  );
}
