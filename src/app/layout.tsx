import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";
import ScrollToTop from "@/components/scroll-to-top";
// css
import "yet-another-react-lightbox/styles.css";
import "./globals.css";
import { getListCategories } from "@/lib/api";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Bếp có mồi ngồi đừng ép",
    template: "%s | Bepcomoingoidungep",
  },
  description: "Bếp có mồi ngồi đừng ép",
  icons: [
    {
      href: "/logo-mammy.png",
      url: "/logo-mammy.png",
      sizes: "32x32",
    },
  ],
};

export const viewports: Viewport = {
  userScalable: false,
  initialScale: 1,
  maximumScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [categories] = await Promise.all([getListCategories()]);

  return (
    <html lang="en">
      <body className={cn(inter.className, "relative")}>
        <NextTopLoader
          color="#78be20"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #78be20,0 0 5px #78be20"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <ScrollToTop />
        <Navbar categories={categories} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
