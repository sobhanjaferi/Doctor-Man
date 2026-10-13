import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";

const vazirmatn: NextFont = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "دکتر من",
  description: "پلتفرم جامع جستجوی دکتر و رزرو آنلاین",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>{children}</body>
    </html>
  );
}
