import MyDocotorLogo from "@/logo/my-doctor.logo";
import styles from "./page.module.css";
import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>
        <MyDocotorLogo width={60} height={61} />
        دکتر من
      </h1>
      <GlobalSearchBoxComponent />

      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجو های شما</div>

        <ul>
          <li>ارتوپت</li>
          <li>قلب و عروق</li>
        </ul>
      </div>
    </div>
  );
}
