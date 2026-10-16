import { ReactElement } from "react";
import styles from "./global-search-box.module.css";
import MingcuteSearchLine from "@/icons/MingcuteSearchLine";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";

export default function GlobalSearchBoxComponent(): ReactElement {
  return (
    <div className={styles["global-search-box"]}>
      <div className={styles.prefix}>
        <MingcuteSearchLine />
      </div>

      <input type="text" placeholder="نام بیمار, تخصص, پزشک, بیمارستان و..." />

      <div className={styles.divider}></div>

      <button>
        <MingcuteLocationLine />
        همه شهر ها
      </button>
    </div>
  );
}
