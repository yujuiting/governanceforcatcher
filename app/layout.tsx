import type { Metadata } from "next";
import { Tauri } from "next/font/google";
import "./globals.css";

const tauri = Tauri({
  variable: "--font-tauri",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catcher - A One-man Company",
  description: "Catcher - A One-man Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tauri.variable} antialiased container !max-w-[960px] px-2 mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
