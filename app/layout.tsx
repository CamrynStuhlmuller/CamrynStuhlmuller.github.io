import type { Metadata } from "next";
import { Caveat, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  subsets: ["latin"],
});

const caveat = Caveat({
  weight: ["400", "700"],
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Camryn Stuhlmuller Portfolio",
  description: "Portfolio Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
