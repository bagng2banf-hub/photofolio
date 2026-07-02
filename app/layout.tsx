import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { MotionProvider } from "@/components/MotionProvider";
import { ScrollProgress } from "@/components/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://photofolio.vercel.app"),
  title: {
    default: "LEE DAYEON | Portfolio",
    template: "%s | LEE DAYEON"
  },
  description: "두리중학교에 재학 중인 이다연의 포트폴리오 웹사이트입니다.",
  keywords: ["LEE DAYEON", "이다연", "포트폴리오", "학생 포트폴리오"],
  authors: [{ name: "Lee Dayeon" }],
  creator: "Lee Dayeon",
  openGraph: {
    title: "LEE DAYEON | Portfolio",
    description: "두리중학교에 재학 중인 이다연의 포트폴리오 웹사이트입니다.",
    url: "https://photofolio.vercel.app",
    siteName: "LEE DAYEON Portfolio",
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
          <ScrollProgress />
          <Header />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
