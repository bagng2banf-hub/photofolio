import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { MotionProvider } from "@/components/MotionProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://photofolio.vercel.app"),
  title: {
    default: "LEE DA YEON | Portfolio",
    template: "%s | LEE DA YEON"
  },
  description:
    "두리중학교에 재학 중인 이다연의 포트폴리오 웹사이트입니다.",
  keywords: ["LEE DA YEON", "이다연", "포트폴리오", "학생 포트폴리오"],
  authors: [{ name: "Lee Da Yeon" }],
  creator: "Lee Da Yeon",
  openGraph: {
    title: "LEE DA YEON | Portfolio",
    description: "두리중학교에 재학 중인 이다연의 포트폴리오 웹사이트입니다.",
    url: "https://photofolio.vercel.app",
    siteName: "LEE DA YEON Portfolio",
    locale: "ko_KR",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563EB"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <MotionProvider>
          <Header />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
