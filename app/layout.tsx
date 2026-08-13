import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Fraunces, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  colorScheme: "light",
};

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Geist Mono. Inherited from Conjecture Institute. Reserved for data,
// citations, and design tokens. Never body or headings.
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "We bring Conjecture Institute to Network School. A lecture series on critical rationalism, Austrian economics, and memetic money.";

const siteUrl = "https://conjecture.school";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Conjecture & Refutations",
  description,
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Conjecture & Refutations",
    description,
    url: siteUrl,
    siteName: "Conjecture & Refutations",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conjecture & Refutations",
    description,
    creator: "@adamtpang",
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Conjecture & Refutations",
      url: siteUrl,
      description,
      logo: `${siteUrl}/og.png`,
      sameAs: ["https://conjectureinstitute.org", "https://x.com/adamtpang"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Conjecture & Refutations",
      url: siteUrl,
      description,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <div className="grain" aria-hidden />
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
