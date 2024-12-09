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
import SpeedDialComponent from "@/components/speed-dial";
import ClientOnly from "@/components/client-only";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Bếp có mồi - Tui có mực khô",
    template: "%s | Bepcomoi",
  },
  description: "Bếp có mồi - Tui có mực khô",
  icons: [
    {
      href: "/logo.png",
      url: "/logo.png",
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
          color="#9BB62D"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #9BB62D,0 0 5px #9BB62D"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <ScrollToTop />
        <Navbar categories={categories} />
        {children}
        <ClientOnly>
          <SpeedDialComponent />
        </ClientOnly>
        <Footer />
      </body>
    </html>
  );
}
