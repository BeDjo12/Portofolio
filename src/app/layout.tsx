import type { Metadata } from "next";
import { Inter, Charm } from "next/font/google";
import "./globals.css";

const FontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const FontCarm = Charm({
  weight: ["400", "700"],
  variable: "--font-charm",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Hello I'm a Front end Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${FontInter.variable} ${FontCarm.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
