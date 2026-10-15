import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";
import HeaderComponent from "@/components/header/header.component";
import FooterComponent from "@/components/footer/footer.component";

const vazirmatn = Vazirmatn({
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
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
