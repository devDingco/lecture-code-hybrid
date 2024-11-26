import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/commons/layout/02-02-layout-header-global";
import LayoutGlobalAndLocal from "@/commons/layout/02-03-layout-header-local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 1). 02-02-layout-header-global 이후 */}
        {/* <Layout>{children}</Layout> */}

        {/* 2). 02-03-layout-header-local 이후 */}
        <LayoutGlobalAndLocal>{children}</LayoutGlobalAndLocal>
      </body>
    </html>
  );
}
