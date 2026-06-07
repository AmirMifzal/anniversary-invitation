import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "Happy Anniversary, Sayang 💕",
  description:
    "A celebration of love — Happy Anniversary to Najah Nasuha & Amir Mifzal",
  openGraph: {
    title: "Happy Anniversary, Sayang 💕",
    description:
      "A celebration of love — Happy Anniversary to Najah Nasuha & Amir Mifzal",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
