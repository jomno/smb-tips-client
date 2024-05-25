import localFont from "next/font/local";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";


export const metadata = {
  title: "스몰빅클래스",
  description: "내일을 위한 작지만 큰 수업",
};

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <div className="layout font-pretendard">{children}</div>
      </body>
    </html>
  );
}
