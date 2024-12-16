import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";
import ScrollToTop from "@/components/scroll-to-top";
// css
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "./globals.css";
import { getListCategories } from "@/lib/api";
import SpeedDialComponent from "@/components/speed-dial";
import ClientOnly from "@/components/client-only";
import TrackVisit from "@/components/global/TrackVisit";

const inter = Inter({ subsets: ["latin"] });

const siteConfig = {
  name: "Bếp Có Mồi",
  description:
    "Bếp Có Mồi với những sản phẩm chất lượng cao, được tuyển chọn kĩ lưỡng từ nguồn hải sản đúng chuẩn vị của biển cả",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bepcomoi.com"),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: "Bếp Có Mồi",
      url: "https://bepcomoi.com",
    },
  ],
  icons: [
    {
      url: "/favicon-16x16.png",
      type: "image/png",
    },
    {
      url: "/favicon-32x32.png",
      type: "image/png",
    },
  ],
  twitter: {
    card: "summary_large_image",
    creator: "@bepcomoi",
    images: "/home1.jpg",
  },
  robots: "index, follow",
  applicationName: "bepcomoi",
  keywords: [
    "Bếp Có Mồi",
    "khô mực",
    "mực khô",
    "Bình Định",
    "Hoài Hải",
    "Hoài nhơn",
    "Đặc sản Bình Định",
    "Hải sản Bình Định",
    "Hải sản tươi sống",
    "mực một nắng",
    "mực một nắng khô",
    "mực một nắng tươi",
    "mực một nắng tươi sống",
    "mực hai nắng",
    "mực hai nắng khô",
    "mực hai nắng tươi",
    "mực hai nắng tươi sống",
    "nước mắm",
    "nước sốt",
  ],
  openGraph: {
    type: "website",
    url: "https://bepcomoi.com",
    title: "Bếp Có Mồi",
    siteName: "Bếp Có Mồi",
    images: [
      {
        alt: "Bếp Có Mồi",
        type: "image/png",
        url: "/logo.png",
      },
    ],
    locale: "vi_VN",
    description:
      "Bếp Có Mồi với những sản phẩm chất lượng cao, được tuyển chọn kĩ lưỡng từ nguồn hải sản đúng chuẩn vị của biển cả",
  },
};

export const viewports: Viewport = {
  userScalable: false,
  initialScale: 1,
  maximumScale: 1,
  width: "device-width",
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
        <Navbar categories={categories || []} />
        {children}
        <ClientOnly>
          <SpeedDialComponent />
        </ClientOnly>
        <Footer />
        {process.env.NODE_ENV === "production" && <TrackVisit />}
      </body>
    </html>
  );
}
