import Link from "next/link";
import Image from "next/image";
import { ReactElement } from "react";
import styles from "./footer.module.css";
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";

export default function FooterComponent(): ReactElement {
  return (
    <footer className={styles.footer}>
      <p className={styles.prg}>
        نوبت دهی پزشکی, سامانه نوبت دهی اینترنتی بیمارستان و پزشکان
      </p>

      <div>
        <div className={styles.writings}>
          <div className={styles.logo}>دکتر من</div>
          <p className={styles.description}>
            تجربه مشاوره و دریافت نوبت از بهترین پزشکان و بیمارستان های ایران
          </p>
        </div>

        <div className={styles.visuals}>
          <ul className={styles.certificates}>
            <li>
              <Link href="#">
                <Image
                  src="/logo/enamad.svg"
                  alt="Enamad logo"
                  width={40}
                  height={40}
                />
              </Link>
            </li>

            <li>
              <Link href="#">
                <Image
                  src="/logo/qc.svg"
                  alt="qc logo"
                  width={40}
                  height={40}
                />
              </Link>
            </li>

            <li>
              <Link href="#">
                <Image
                  src="/logo/ssl.svg"
                  alt="ssl logo"
                  width={40}
                  height={40}
                />
              </Link>
            </li>
          </ul>

          <ul className={styles.socials}>
            <li>
              <Link href="#">
                <MingcuteLinkedinFill />
              </Link>
            </li>

            <li>
              <Link href="#">
                <MingcuteTelegramFill />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className={styles.copy}>
        تمامی حقوق مادی و معنوی این وبسایت. خدمات و محتوای آن متعلق به من می
        باشد!
      </p>
    </footer>
  );
}
