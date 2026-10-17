"use client";

import { ReactElement } from "react";
import styles from "./error.module.css";
import Image from "next/image";
import errorImg from "@@/public/illustration/error.png";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props): ReactElement {
  return (
    <div className={styles.error}>
      <div className={styles.contents}>
        <div className={styles.writings}>
          <div className={styles["status-code"]}>بدبخت شدیم!</div>
          <h1>یک خطای غیر منتظره رخ داده است.</h1>
          <p>با عرض پوزش, لطفا با تیم پشتیبانی تماس بگیرید.</p>
        </div>

        <div className={styles.actions}>
          <button onClick={reset}>تلاش مجدد</button>
        </div>

        <div className={styles.trace}>
          <details>
            <summary>لاگ خطا</summary>
            <pre dir="ltr">{error.stack}</pre>
          </details>
        </div>
      </div>

      <div className={styles.visuals}>
        <Image src={errorImg} alt="error" />
      </div>
    </div>
  );
}
