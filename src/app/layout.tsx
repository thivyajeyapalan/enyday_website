import type { Metadata, Viewport } from "next";
import { DM_Sans, Figtree, Sacramento } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap", style: ["normal", "italic"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap", style: ["normal", "italic"] });
const sacramento = Sacramento({ subsets: ["latin"], weight: "400", variable: "--font-sacramento", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "enyday · more than brushing. more than basics.", template: "%s · enyday" },
  description: site.description,
  applicationName: "enyday",
  keywords: ["enyday", "oral care", "enamel care", "enamel gloss", "portable oral care", "waitlist"],
  openGraph: {
    type: "website",
    siteName: "enyday",
    title: "enyday · more than brushing. more than basics.",
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "enyday · more than brushing. more than basics.",
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#f6f4f0",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${figtree.variable} ${dmSans.variable} ${sacramento.variable}`}>
      <body>{children}</body>
    </html>
  );
}
