import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { Blinker } from "next/font/google";
import "./globals.css";
import VisualEditing from "@/components/VisualEditing";
import type { ReactNode } from "react";
import SocialNavigation from "@/components/home/SocialNavigation";
import MainNavigation from "@/components/home/MainNavigation";
import Footer from "@/components/home/Footer";

const blinker = Blinker({
  weight: ["200", "400", "700"],
  preload: true,
  subsets: ["latin"],
  display: "swap",
  variable: "--font-blinker",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className="dark scroll-smooth text-balance text-[17px] scrollbar-thin scrollbar-track-neutral-900 scrollbar-thumb-neutral-600 hover:scrollbar-thumb-neutral-500 active:scrollbar-thumb-blue"
    >
      <body
        className={`${blinker.variable} flex min-h-dvh flex-col font-sans dark:bg-neutral-900 dark:text-neutral-50`}
      >
        <MainNavigation />
        <main className="mt-8 grow">{children}</main>
        <SocialNavigation />
        <Footer />
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
