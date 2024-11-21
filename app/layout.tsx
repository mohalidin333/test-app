import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "next-kit",
  description: "Next-js Fullstack Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
