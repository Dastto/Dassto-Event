import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { IRANYekanXNoEn } from "@/utils/fonts";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ایونت دستو",
  description: "ایونت طراحی محصول دستو",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${IRANYekanXNoEn.className} ${spaceGrotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}