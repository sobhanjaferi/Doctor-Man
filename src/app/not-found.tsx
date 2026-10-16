import { ReactElement } from "react";
import styles from "./not-found.module.css";
import Image from "next/image";
import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

export default function NotFound(): ReactElement {
  return (
    <div className={styles["not-found"]}>
      <div className={styles.writings}>
        <div className={styles["status-code"]}>404</div>
        <h1>صفحه مورد نظر پیدا نشد !</h1>
        <p>
          با عرض پوزش, لطفا از طیق کادر جستجو , پزشک یا مرکز مورد نظر خود را
          پیدا کنید.
        </p>
      </div>

      <div className={styles.visuals}>
        <Image
          src={"/illustration/not-found.png"}
          alt="not found"
          width={200}
          height={2000}
        />
      </div>

      <div className={styles.search}>
        <GlobalSearchBoxComponent />
      </div>
    </div>
  );
}
