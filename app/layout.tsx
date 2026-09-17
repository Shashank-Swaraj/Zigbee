import type { Metadata } from "next";
import { Geist_Mono, Caveat, Sedgwick_Ave_Display, Permanent_Marker, Inter , Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sedgwick = Sedgwick_Ave_Display({
  variable: "--font-sedgwick",
  subsets: ["latin"],
  weight: "400",
});

const permanentMarker = Permanent_Marker({
  variable: "--font-marker",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "ZIGBEE.JU // IoT & Embedded Systems Club",
  description: "Official website for Zigbee IoT & Embedded Systems club at Jain University (JU-FET).",
  icons: {
    icon: "/images/Zigbee_logo.png",
    shortcut: "/images/Zigbee_logo.png",
    apple: "/images/Zigbee_logo.png",
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
      className={`${inter.variable} ${sedgwick.variable} ${permanentMarker.variable} ${geistMono.variable} ${caveat.variable}  ${bebas.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0E0E10] text-[#F4F4F5] font-mono selection:bg-[#FF5200] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}