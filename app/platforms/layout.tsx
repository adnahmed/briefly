import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../globals.css";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const host_grotesk = localFont<`--${string}`>({
  src: "../../public/fonts/HostGrotesk[wght].woff2",
  variable: "--font-host-grotesk",
});

export const metadata: Metadata = {
  title: "Brieflly",
  description: "Your platform to grow your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className} ${host_grotesk.className}`}>
        <Header />
        {children}
        <div className="bg-gray-950">
          <Footer />
        </div>
      </body>
    </html>
  );
}
