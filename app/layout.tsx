import type { Metadata } from "next";
import { Fraunces, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    images: [{ url: "/og.png", width: 1600, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conjecture & Refutations",
    description,
    creator: "@adamtpang",
    images: ["/og.png"],
  },
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
      </body>
    </html>
  );
}
