import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import { FooterWithTarget } from "../components/FooterWithTarget";
import { Header } from "../components/Header";
import "../globals.css";
import Head from 'next/head';

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
  icons: {
    icon: '/fav_icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/fav_icon.png" type="image/x-icon" />
        {/* <meta name="description" content={metadata.description || "Default Description"} /> */}
      </Head>
        <body className={`${dm_sans.className} ${host_grotesk.className}`}>
        <Header />
        {children}
        <FooterWithTarget
          title="Let’s build your dream team!"
          description="We’ll connect you with the expertise you need to ensure it’s a perfect match made for business."
          action="Get Started"
        />
      </body>
    </html>
  );
}
