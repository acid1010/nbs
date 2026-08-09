import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nyibaharisteel.com";

const title = "PT. Nyi Bahari Steel | Alat Berat, Safety K3 & Manpower";
const description =
  "Supplier konstruksi di Purwakarta, Jawa Barat: sewa alat berat, APD/safety K3, alat teknik, instalasi plumbing & listrik, serta outsourcing tenaga kerja proyek industri.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | PT. Nyi Bahari Steel",
  },
  description,
  keywords: [
    // brand
    "PT Nyi Bahari Steel",
    "Nyi Bahari Steel",
    "nyibaharisteel",
    // core services + location
    "supplier alat berat Purwakarta",
    "sewa alat berat Purwakarta",
    "sewa alat berat Jawa Barat",
    "rental excavator Purwakarta",
    "rental wheel loader Jawa Barat",
    "supplier safety K3 Purwakarta",
    "APD konstruksi Jawa Barat",
    "helm safety project",
    "alat teknik konstruksi",
    "supplier alat teknik industri",
    "instalasi plumbing industri",
    "instalasi listrik pabrik",
    "jasa instalasi MEP Jawa Barat",
    "outsourcing tenaga kerja konstruksi",
    "manpower proyek Purwakarta",
    "tenaga kerja proyek industri",
    "supplier konstruksi Purwakarta",
    "pengadaan material proyek Jawa Barat",
    // intent / category
    "jasa sewa alat berat",
    "kontraktor pendukung konstruksi",
    "vendor proyek industri Indonesia",
  ],

  authors: [{ name: "PT. Nyi Bahari Steel" }],
  creator: "PT. Nyi Bahari Steel",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: "/",
    siteName: "PT. Nyi Bahari Steel",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PT. Nyi Bahari Steel",
  description,
  url: siteUrl,
  image: `${siteUrl}/logo.jpeg`,
  telephone: "+628139547223",
  email: "nyibaharisteel@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ciherang, Kec. Pasawahan",
    addressLocality: "Purwakarta",
    addressRegion: "Jawa Barat",
    postalCode: "41172",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.597665,
    longitude: 107.45231,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Jawa Barat",
  },
  sameAs: ["https://www.tiktok.com/@nyi.bahari.steel"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "17:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewa & Supply Alat Berat" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Supply Alat Safety K3" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alat Teknik & Peralatan" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Instalasi Plumbing & Listrik" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outsourcing Tenaga Kerja Proyek" } },
    ],
  },
};

// Declares the site name Google shows in search results (instead of the domain)
const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PT. Nyi Bahari Steel",
  alternateName: "Nyi Bahari Steel",
  url: siteUrl,
};

// Organization identity + logo for Google knowledge panel / rich results
const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT. Nyi Bahari Steel",
  url: siteUrl,
  logo: `${siteUrl}/logo.jpeg`,
  email: "nyibaharisteel@gmail.com",
  telephone: "+628139547223",
  sameAs: ["https://www.tiktok.com/@nyi.bahari.steel"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+628139547223",
    contactType: "sales",
    areaServed: "ID",
    availableLanguage: ["id", "en"],
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink font-sans selection:bg-primary/20 selection:text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        {children}
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
