import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  EMAIL_DISPLAY,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const fraunces = localFont({
  src: [
    { path: "../fonts/Fraunces-VF.woff2", weight: "300 600", style: "normal" },
    {
      path: "../fonts/Fraunces-Italic-VF.woff2",
      weight: "300 600",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = localFont({
  src: "../fonts/Inter-VF.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E2A4E",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-icon.png`,
  telephone: PHONE_DISPLAY.replace(/ /g, ""),
  email: EMAIL_DISPLAY,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Aarhus",
    addressCountry: "DK",
  },
  areaServed: "Aarhus",
  sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="da"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        {/* Stamped before first paint so scroll-reveal never flashes;
            without JS the class is absent and everything stays visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('anim')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <ScrollReveal />
        {/* Cookiefri besøgstælling. Sætter ingen cookies og gemmer ingen
            IP-adresser, så siden er stadig uden samtykkebanner — se /privatliv. */}
        <Analytics />
      </body>
    </html>
  );
}
