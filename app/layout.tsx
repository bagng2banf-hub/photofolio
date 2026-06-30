import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { MotionProvider } from "@/components/MotionProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://lee-dayeon.dev"),
  title: {
    default: "LEE DAYEON | Student Developer Portfolio",
    template: "%s | LEE DAYEON"
  },
  description:
    "미래를 만드는 학생 개발자 LEE DAYEON의 포트폴리오입니다. AI, 웹 개발, 앱 개발 프로젝트와 성장 목표를 소개합니다.",
  keywords: [
    "LEE DAYEON",
    "이다연",
    "Student Developer",
    "AI Creator",
    "Portfolio",
    "Next.js"
  ],
  authors: [{ name: "LEE DAYEON" }],
  creator: "LEE DAYEON",
  openGraph: {
    title: "LEE DAYEON | Student Developer Portfolio",
    description:
      "AI와 웹 기술로 미래를 만드는 학생 개발자 LEE DAYEON의 포트폴리오.",
    url: "https://lee-dayeon.dev",
    siteName: "LEE DAYEON Portfolio",
    locale: "ko_KR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "LEE DAYEON | Student Developer Portfolio",
    description:
      "AI와 웹 기술로 미래를 만드는 학생 개발자 LEE DAYEON의 포트폴리오."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3B82F6"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <MotionProvider>
            <ScrollProgress />
            <Header />
            {children}
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
