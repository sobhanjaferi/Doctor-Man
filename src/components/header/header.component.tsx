"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { ReactElement } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavItemType {
  id: number;
  title: string;
  path: string;
}

export default function HeaderComponent(): ReactElement {
  const pathname = usePathname();

  const navitems: NavItemType[] = [
    {
      id: 1,
      title: "خانه",
      path: "/",
    },
    {
      id: 2,
      title: "فروشگاه",
      path: "/stor",
    },
  ];

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {navitems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
                className={clsx(pathname === item.path && styles.active)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className={styles.cta}>ورود | ثبت نام</button>
    </header>
  );
}
