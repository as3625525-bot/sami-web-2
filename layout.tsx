import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammad Abu Sayeed | AI & Data Engineer",
  description:
    "Portfolio of Mohammad Abu Sayeed, also known as Sami: vibe coder, stock trader, and future AI engineer from Dhaka, Bangladesh."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
