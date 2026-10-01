import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./globals.css";

const barlow = localFont({
  src: "../public/fonts/barlow-regular.ttf",
  variable: "--font-body",
  display: "swap",
});
const barlowCondensed = localFont({
  src: "../public/fonts/barlow-condensed-bold.ttf",
  variable: "--font-display",
  display: "swap",
  weight: "700",
});
const plexMono = localFont({
  src: "../public/fonts/ibm-plex-mono.ttf",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theystoleabillion.de"),
  title: "They Stole A Billion | Groove Metal aus Ravensburg",
  description:
    "They Stole A Billion – Groove Metal, Thrash und Hardcore aus Ravensburg. Hör die neue EP Resurgence, entdecke unsere Videos und bleib mit der Band verbunden.",
  alternates: { canonical: "/" },
  icons: { icon: "/images/band-logo.jpg", apple: "/images/band-logo.jpg" },
  openGraph: {
    title: "They Stole A Billion",
    description: "Schwere Riffs. Rohe Energie. Groove Metal aus Ravensburg.",
    url: "/",
    siteName: "They Stole A Billion",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/band.jpg",
        width: 605,
        height: 606,
        alt: "They Stole A Billion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "They Stole A Billion",
    images: ["/images/band.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#101110" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="de"
      className={`${barlow.variable} ${barlowCondensed.variable} ${plexMono.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
