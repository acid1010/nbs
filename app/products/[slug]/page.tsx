import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  content,
  productSlugs,
  getRelatedProjects,
  type Language,
} from "../../data/content";
import ProductLanguageToggle from "./language-toggle";
import QuoteForm from "../../components/quote-form";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nyibaharisteel.com";

type PageParams = { slug: string };
type PageSearch = { lang?: string };

/** Per-category SEO keywords (ID-focused, matching the site's primary market). */
const productKeywords: Record<string, string[]> = {
  "project-manpower-outsourcing": [
    "outsourcing tenaga kerja konstruksi",
    "penyedia tenaga kerja proyek",
    "tukang las bersertifikat",
    "operator alat berat SIO",
    "manpower proyek Purwakarta",
    "jasa penyaluran pekerja industri",
  ],
  "heavy-equipment-fleet": [
    "sewa alat berat Purwakarta",
    "rental excavator Jawa Barat",
    "sewa forklift",
    "rental mobile crane",
    "sewa vibro roller",
    "rental alat berat dengan operator",
  ],
  "k3-safety-gear": [
    "supplier APD konstruksi",
    "jual helm safety SNI",
    "supplier safety K3 Purwakarta",
    "sepatu safety steel toe",
    "rompi safety reflektif",
    "alat pelindung diri proyek",
  ],
  "industrial-technical-tools": [
    "supplier alat teknik industri",
    "jual mesin las inverter",
    "gerinda tangan heavy duty",
    "tool set mekanik",
    "alat teknik konstruksi Purwakarta",
  ],
  "infrastructure-materials": [
    "supplier pipa HDPE",
    "jual pipa PVC industri",
    "kabel listrik NYY NYFGBY",
    "supplier material plumbing",
    "pompa air submersible industri",
    "material instalasi pabrik",
  ],
};

/* ---------------------------------------------------------- */
/* Static generation                                          */
/* ---------------------------------------------------------- */

export function generateStaticParams(): PageParams[] {
  return productSlugs.map((slug) => ({ slug }));
}

/* ---------------------------------------------------------- */
/* Per-page SEO metadata                                      */
/* ---------------------------------------------------------- */

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<PageParams>;
  searchParams: Promise<PageSearch>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { lang } = await searchParams;
  const language: Language = lang === "en" ? "en" : "id";
  const product = content[language].products.list.find((p) => p.slug === slug);
  if (!product) return {};

  const title = product.category;
  const description = product.description;

  return {
    title,
    description,
    keywords: productKeywords[slug] ?? [],
    alternates: {
      canonical: `/products/${slug}`,
      languages: {
        en: `/products/${slug}?lang=en`,
        id: `/products/${slug}`,
      },
    },
    openGraph: {
      type: "website",
      url: `/products/${slug}`,
      title,
      description,
      images: [{ url: product.image, alt: product.category }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image],
    },
  };
}

/* ---------------------------------------------------------- */
/* Page                                                       */
/* ---------------------------------------------------------- */

export default async function ProductDetailPage({
  params,
  searchParams,
}: {
  params: Promise<PageParams>;
  searchParams: Promise<PageSearch>;
}) {
  const { slug } = await params;
  const { lang } = await searchParams;
  const language: Language = lang === "en" ? "en" : "id";
  const t = content[language];
  const product = t.products.list.find((p) => p.slug === slug);
  if (!product) notFound();

  const d = product.detail;
  const related = getRelatedProjects(language, slug);
  const waNumber = t.contact.whatsapp.replace(/[^0-9]/g, "");
  const waText = encodeURIComponent(
    language === "id"
      ? `Halo, saya ingin meminta penawaran untuk kategori: ${product.category}`
      : `Hello, I would like to request a quotation for: ${product.category}`
  );
  const waHref = `https://wa.me/${waNumber}?text=${waText}`;
  const langSuffix = language === "en" ? "?lang=en" : "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.category,
    description: product.description,
    image: `${siteUrl}${product.image}`,
    url: `${siteUrl}/products/${slug}${langSuffix}`,
    brand: { "@type": "Organization", name: "PT. Nyi Bahari Steel" },
    category: t.products.title,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "IDR",
      url: `${siteUrl}/products/${slug}${langSuffix}`,
      seller: { "@type": "Organization", name: "PT. Nyi Bahari Steel" },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t.nav.home,
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t.nav.products,
        item: `${siteUrl}/#products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.category,
        item: `${siteUrl}/products/${slug}${langSuffix}`,
      },
    ],
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans text-ink bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Global Navigation Bar (matches homepage) */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-surface-black text-white h-[44px] flex items-center px-4 md:px-8 justify-between border-b border-white/10 select-none">
        <Link href={`/${langSuffix}`} className="flex items-center gap-2">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-700 bg-white flex items-center justify-center">
            <Image
              src="/logo.jpeg"
              alt="PT. Nyi Bahari Steel Logo"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <span className="font-semibold tracking-wider text-[11px] uppercase">
            PT. Nyi Bahari Steel
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-active hidden md:inline-block bg-primary hover:bg-primary-hover text-white text-[12px] font-medium px-4 py-1.5 rounded-pill transition-colors"
          >
            {t.hero.ctaQuotation}
          </a>
          <ProductLanguageToggle lang={language} />
        </div>
      </nav>

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-canvas-parchment border-b border-zinc-200">
          <div className="max-w-[980px] mx-auto px-6 py-3 flex items-center gap-2 text-[12px] text-zinc-500">
            <Link href={`/${langSuffix}`} className="hover:text-primary transition-colors">
              {t.nav.home}
            </Link>
            <span aria-hidden>/</span>
            <Link href={`/${langSuffix}#products`} className="hover:text-primary transition-colors">
              {t.nav.products}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink font-medium truncate">{product.category}</span>
          </div>
        </div>

        {/* Hero: image + intro */}
        <section className="py-12 md:py-16 bg-white border-b border-zinc-200">
          <div className="max-w-[980px] mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative aspect-[16/11] w-full rounded-lg overflow-hidden border border-zinc-200 bg-zinc-50 shadow-2xs">
              <Image
                src={product.image}
                alt={product.category}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 470px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">
                {t.nav.products}
              </span>
              <h1 className="apple-display-lg text-ink mb-3">{product.category}</h1>
              <p className="apple-tagline text-primary mb-4">{d.tagline}</p>
              <p className="apple-body text-body-muted mb-8 leading-relaxed">
                {product.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn-active bg-primary hover:bg-primary-hover text-white px-7 py-3 rounded-pill font-medium text-sm transition-colors text-center"
                >
                  {t.hero.ctaQuotation}
                </a>
                <Link
                  href={`/${langSuffix}#products`}
                  className="apple-btn-active border border-zinc-300 hover:border-zinc-500 text-ink px-7 py-3 rounded-pill font-medium text-sm transition-colors text-center"
                >
                  {t.productDetail.backToProducts}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview + Key items */}
        <section className="py-16 bg-canvas-parchment border-b border-zinc-200">
          <div className="max-w-[980px] mx-auto px-6 grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3">
              <h2 className="apple-display-md text-ink mb-6">{t.productDetail.overviewTitle}</h2>
              <div className="space-y-4">
                {d.overview.map((para, i) => (
                  <p key={i} className="apple-body text-zinc-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-2xs">
                <h3 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-4">
                  {t.productDetail.itemsTitle}
                </h3>
                <ul className="space-y-3">
                  {product.items.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-[13px] text-zinc-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 bg-white border-b border-zinc-200">
          <div className="max-w-[980px] mx-auto px-6">
            <h2 className="apple-display-md text-ink mb-10 text-center">{t.productDetail.specsTitle}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {d.specGroups.map((group, gi) => (
                <div
                  key={gi}
                  className="bg-white rounded-lg border border-zinc-200 shadow-2xs overflow-hidden"
                >
                  <div className="px-6 py-4 bg-canvas-parchment border-b border-zinc-200">
                    <h3 className="apple-caption-strong text-ink">{group.title}</h3>
                  </div>
                  <dl className="divide-y divide-zinc-100">
                    {group.specs.map((spec, si) => (
                      <div
                        key={si}
                        className="px-6 py-3.5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4"
                      >
                        <dt className="text-[12px] font-semibold text-zinc-500 sm:w-[45%] shrink-0">
                          {spec.label}
                        </dt>
                        <dd className="text-[13px] text-ink">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications + Gallery */}
        <section className="py-16 bg-canvas-parchment border-b border-zinc-200">
          <div className="max-w-[980px] mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="apple-display-md text-ink mb-6">{t.productDetail.applicationsTitle}</h2>
              <ul className="space-y-3">
                {d.applications.map((app, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-start bg-white rounded-md border border-zinc-200 px-4 py-3 text-[13px] text-zinc-700"
                  >
                    <svg
                      className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="apple-display-md text-ink mb-6">{t.productDetail.galleryTitle}</h2>
              <div className="grid gap-5">
                {d.gallery.map((photo, i) => (
                  <figure
                    key={i}
                    className="bg-white rounded-lg border border-zinc-200 overflow-hidden shadow-2xs"
                  >
                    <div className="relative aspect-[16/9] w-full bg-zinc-50">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 470px"
                        loading="lazy"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="px-4 py-3 text-[12px] text-zinc-500 border-t border-zinc-100">
                      {photo.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related projects */}
        <section className="py-16 bg-white border-b border-zinc-200">
          <div className="max-w-[980px] mx-auto px-6">
            <h2 className="apple-display-md text-ink mb-10 text-center">{t.productDetail.relatedTitle}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((proj, i) => (
                <article
                  key={i}
                  className="bg-white rounded-lg border border-zinc-200 shadow-2xs overflow-hidden flex flex-col group hover:shadow-[rgba(0,0,0,0.06)_0px_8px_24px] hover:border-zinc-300 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] w-full bg-zinc-50 overflow-hidden border-b border-zinc-100">
                    <Image
                      src={proj.image}
                      alt={proj.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      loading="lazy"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-2 flex-1">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                      {proj.service}
                    </span>
                    <h3 className="apple-body-strong font-semibold text-[15px] text-ink leading-snug">
                      {proj.name}
                    </h3>
                    <div className="mt-auto pt-3 border-t border-zinc-100 text-[11px] text-zinc-400 space-y-1">
                      <div className="truncate" title={proj.client}>
                        <span className="font-semibold text-zinc-600">{t.productDetail.clientLabel}:</span>{" "}
                        {proj.client}
                      </div>
                      <div>
                        <span className="font-semibold text-zinc-600">{t.productDetail.locationLabel}:</span>{" "}
                        {proj.location} · {proj.year}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quotation form section */}
        <section className="py-16 bg-canvas-parchment">
          <div className="max-w-[980px] mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
            {/* Pitch + direct contact shortcuts */}
            <div className="flex flex-col">
              <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">
                {t.hero.ctaQuotation}
              </span>
              <h2 className="apple-display-md text-ink mb-4">{t.productDetail.ctaTitle}</h2>
              <p className="apple-body text-body-muted mb-8 leading-relaxed">
                {t.productDetail.ctaSubtitle}
              </p>
              <div className="flex flex-col gap-3 mt-auto">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn-active inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba5a] text-white px-7 py-3 rounded-pill font-medium text-sm transition-colors w-fit"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.988 14.113.96 11.487.96c-5.447 0-9.873 4.372-9.877 9.802-.001 1.77.472 3.497 1.368 5.048L2.011 21.1l5.441-1.417zM16.48 13.94c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.66.83-.81.99-.15.17-.3.19-.56.06-.26-.13-1.1-.41-2.1-1.3-.78-.7-1.31-1.56-1.46-1.82-.15-.26-.02-.4.12-.53.12-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.79-1.92-.21-.52-.43-.45-.58-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.92.9-.92 2.2s.95 2.56 1.08 2.73c.13.17 1.87 2.85 4.53 4a15.341 15.341 0 001.51.52c.63.2 1.21.17 1.66.1.51-.08 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.12-.24-.18-.5-.31z" />
                  </svg>
                  {t.productDetail.ctaWhatsapp}
                </a>
                <a
                  href={`mailto:${t.contact.email}?subject=${encodeURIComponent(
                    `[${product.category}] ${t.hero.ctaQuotation}`
                  )}`}
                  className="text-[13px] text-zinc-500 hover:text-primary transition-colors w-fit"
                >
                  {t.contact.email}
                </a>
              </div>
            </div>

            {/* Form card — pre-selected with this page's category */}
            <div className="bg-white rounded-lg p-8 border border-zinc-200 shadow-2xs">
              <QuoteForm t={t} initialService={product.category} />
            </div>
          </div>
        </section>
      </main>

      {/* Footer (compact, matches homepage style) */}
      <footer className="bg-surface-tile-1 text-zinc-400 py-10 border-t border-zinc-800">
        <div className="max-w-[980px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px]">
          <div className="flex items-center gap-2 text-white">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-700 bg-white flex items-center justify-center shrink-0">
              <Image
                src="/logo.jpeg"
                alt="PT. Nyi Bahari Steel Logo"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <span className="font-semibold text-[11px] uppercase tracking-widest">
              PT. Nyi Bahari Steel
            </span>
          </div>
          <div className="text-xs text-zinc-500">{t.footer.copyright}</div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25d366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
        title={t.contact.whatsappCta}
        id="whatsapp-floating-widget"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.988 14.113.96 11.487.96c-5.447 0-9.873 4.372-9.877 9.802-.001 1.77.472 3.497 1.368 5.048L2.011 21.1l5.441-1.417zM16.48 13.94c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.66.83-.81.99-.15.17-.3.19-.56.06-.26-.13-1.1-.41-2.1-1.3-.78-.7-1.31-1.56-1.46-1.82-.15-.26-.02-.4.12-.53.12-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.79-1.92-.21-.52-.43-.45-.58-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.92.9-.92 2.2s.95 2.56 1.08 2.73c.13.17 1.87 2.85 4.53 4a15.341 15.341 0 001.51.52c.63.2 1.21.17 1.66.1.51-.08 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.12-.24-.18-.5-.31z" />
        </svg>
      </a>
    </div>
  );
}
