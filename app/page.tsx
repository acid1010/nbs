"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { content } from "./data/content";
import QuoteForm from "./components/quote-form";
import { useRouter } from "next/navigation";

// Real job-site photos cycled in the hero slider (brochure first)
const heroSlides = [
  "/brosur.jpeg",
  "/real_life_photos.jpeg",
  "/real_life_photos2.jpeg",
  "/real_life_photos3.jpeg",
  "/real_life_photos4.jpeg",
  "/real_life_photos5.jpeg",
  "/real_life_photos6.jpeg",
];

export default function HomePage() {
  const [lang, setLang] = useState<"en" | "id">("id"); // Default to Indonesian
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedService, setSelectedService] = useState(content.id.products.list[0].category);
  const router = useRouter();


  // Hero slider state
  const [slide, setSlide] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = () => setSlide((s) => (s + 1) % heroSlides.length);
  const prevSlide = () => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length);

  // Swipe handlers (mobile): >40px horizontal drag changes slide
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? nextSlide : prevSlide)();
    touchStartX.current = null;
  };

  const t = content[lang];
  const wechatDeepLink = `weixin://contacts/profile/${encodeURIComponent(t.contact.wechatId)}`;
  const wechatHttps = t.contact.wechatUrl.trim() || "https://web.wechat.com/";
  const [wechatHref, setWechatHref] = useState(wechatHttps);

  const selectLanguage = (nextLang: "en" | "id") => {
    setLang(nextLang);
    setSelectedService(content[nextLang].products.list[0].category);
  };

  // Keep <title> + html lang in sync with UI language (crawlers still get SSR ID meta)
  useEffect(() => {
    document.title = t.meta.title;
    document.documentElement.lang = lang;
  }, [lang, t.meta.title]);

  // Mobile → WeChat app by ID; desktop → https
  useEffect(() => {
    const mobile = /Android|iPhone|iPad|iPod|Mobile|MicroMessenger/i.test(navigator.userAgent);
    setWechatHref(mobile ? wechatDeepLink : wechatHttps);
  }, [wechatDeepLink, wechatHttps]);



  // Auto-advance hero slider every 5s; pause on hover and honor reduced-motion
  useEffect(() => {
    if (sliderPaused) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [sliderPaused, slide]);

  // Lock body scroll while mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  // Handle active section highlight on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "products", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 44; // sticky global nav height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const triggerQuoteForProduct = (productName: string) => {
    setSelectedService(productName);
    scrollToSection("contact");
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans text-ink bg-white">

      {/* Global Navigation Bar (Black Theme) */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-surface-black text-white h-[44px] flex items-center px-4 md:px-8 justify-between border-b border-white/10 select-none">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
          {/* Company logo.jpeg Integration */}
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-700 bg-white flex items-center justify-center">
            <Image 
              src="/logo.jpeg" 
              alt="PT. Nyi Bahari Steel Logo" 
              fill 
              sizes="32px"
              className="object-cover"
            />
          </div>
          <span className="font-semibold tracking-wider text-[11px] uppercase">PT. Nyi Bahari Steel</span>
        </div>

        {/* Desktop Menu links */}
        <div className="hidden md:flex items-center gap-6 text-[12px] font-normal tracking-wide text-zinc-300">
          <button onClick={() => scrollToSection("home")} className={`hover:text-white transition-colors cursor-pointer ${activeSection === "home" ? "text-primary font-medium" : ""}`}>{t.nav.home}</button>
          <button onClick={() => scrollToSection("products")} className={`hover:text-white transition-colors cursor-pointer ${activeSection === "products" ? "text-primary font-medium" : ""}`}>{t.nav.products}</button>
          <button onClick={() => scrollToSection("about")} className={`hover:text-white transition-colors cursor-pointer ${activeSection === "about" ? "text-primary font-medium" : ""}`}>{t.nav.about}</button>
          <button onClick={() => scrollToSection("projects")} className={`hover:text-white transition-colors cursor-pointer ${activeSection === "projects" ? "text-primary font-medium" : ""}`}>{t.nav.projects}</button>
          <button onClick={() => scrollToSection("contact")} className={`hover:text-white transition-colors cursor-pointer ${activeSection === "contact" ? "text-primary font-medium" : ""}`}>{t.nav.contact}</button>
        </div>

        {/* Language selector, CTA & Mobile toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="apple-btn-active hidden md:inline-block bg-primary hover:bg-primary-hover text-white text-[12px] font-medium px-4 py-1.5 rounded-pill transition-colors cursor-pointer"
          >
            {t.hero.ctaQuotation}
          </button>
          <div className="flex bg-zinc-800 rounded-sm p-0.5 text-[11px] font-medium border border-white/5">
            <button 
              onClick={() => selectLanguage("en")} 
              className={`px-2 py-0.5 rounded-[4px] cursor-pointer transition-colors ${lang === "en" ? "bg-primary text-white" : "text-zinc-400 hover:text-white"}`}
            >
              EN
            </button>
            <button 
              onClick={() => selectLanguage("id")} 
              className={`px-2 py-0.5 rounded-[4px] cursor-pointer transition-colors ${lang === "id" ? "bg-primary text-white" : "text-zinc-400 hover:text-white"}`}
            >
              ID
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-zinc-300 hover:text-white focus:outline-none cursor-pointer"
            id="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[44px] z-40 bg-surface-black/95 backdrop-blur-md flex flex-col p-6 text-white gap-6 md:hidden animate-fade-in">
          <button onClick={() => scrollToSection("home")} className="text-left text-lg py-2 border-b border-white/10">{t.nav.home}</button>
          <button onClick={() => scrollToSection("products")} className="text-left text-lg py-2 border-b border-white/10">{t.nav.products}</button>
          <button onClick={() => scrollToSection("about")} className="text-left text-lg py-2 border-b border-white/10">{t.nav.about}</button>
          <button onClick={() => scrollToSection("projects")} className="text-left text-lg py-2 border-b border-white/10">{t.nav.projects}</button>
          <button onClick={() => scrollToSection("contact")} className="text-left text-lg py-2 border-b border-white/10">{t.nav.contact}</button>
          <button 
            onClick={() => { scrollToSection("contact"); setIsMenuOpen(false); }} 
            className="apple-btn-active bg-primary hover:bg-primary-hover text-white py-3 rounded-pill text-center font-medium mt-4 transition-colors"
          >
            {t.hero.ctaQuotation}
          </button>
        </div>
      )}

      {/* Main content body */}
      <main className="flex-1">

        {/* 3. Hero — Full-bleed slider first, headline below (WBN flow) */}
        <section id="home" className="relative bg-white overflow-hidden">

          {/* Full-bleed slider */}
          <div
            className="group relative w-full aspect-[16/9] md:aspect-[5/2] overflow-hidden bg-zinc-900 touch-pan-y"
            onMouseEnter={() => setSliderPaused(true)}
            onMouseLeave={() => setSliderPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Stacked slides, crossfaded via opacity */}
            {heroSlides.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`Dokumentasi proyek konstruksi PT. Nyi Bahari Steel ${i + 1}`}
                fill
                sizes="100vw"
                className={`object-cover transition-opacity duration-700 ${i === slide ? "opacity-100" : "opacity-0"}`}
                {...(i === 0 ? { priority: true } : { loading: "lazy" as const })}
              />
            ))}

            {/* Prev / Next arrows */}
            <button
              type="button"
              aria-label="Previous slide"
              onClick={prevSlide}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={nextSlide}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setSlide(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${i === slide ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
                />
              ))}
            </div>
          </div>

          {/* Headline + description + CTAs below the slider */}
          <div className="max-w-[980px] mx-auto px-6 text-center flex flex-col items-center pt-12 pb-20 md:pt-16 md:pb-28">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 animate-fade-in-up">
              {t.hero.tagline}
            </span>
            <h1 className="apple-hero-display text-ink max-w-[850px] mb-6 font-semibold animate-fade-in-up delay-100">
              {t.hero.headline}
            </h1>
            <p className="apple-body text-body-muted max-w-[650px] mb-8 leading-relaxed animate-fade-in-up delay-200">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <button
                onClick={() => scrollToSection("contact")}
                className="apple-btn-active bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-pill font-medium text-sm transition-colors cursor-pointer"
                id="hero-contact-btn"
              >
                {t.hero.ctaContact}
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="apple-btn-active border border-zinc-300 hover:border-zinc-500 text-ink px-8 py-3.5 rounded-pill font-medium text-sm transition-colors cursor-pointer"
                id="hero-products-btn"
              >
                {t.hero.ctaServices}
              </button>
            </div>
          </div>
        </section>

        {/* 4. Featured Products (moved up — WBN flow) */}
        <section id="products" className="py-24 bg-white border-b border-zinc-200">
          <div className="max-w-[980px] mx-auto px-6">

            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2 block">{t.nav.products}</span>
              <h2 className="apple-display-lg text-ink mb-4">{t.products.title}</h2>
              <p className="apple-body text-body-muted max-w-[600px] mx-auto">{t.products.subtitle}</p>
            </div>

            {/* Store Grid of Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {t.products.list.map((prod, idx) => (
                <div
                  key={idx}
                  onClick={() => router.push(`/products/${prod.slug}${lang === "en" ? "?lang=en" : ""}`)}
                  role="link"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter") router.push(`/products/${prod.slug}${lang === "en" ? "?lang=en" : ""}`); }}
                  className="bg-white rounded-lg border border-zinc-200/80 shadow-[rgba(0,0,0,0.02)_0px_5px_15px] overflow-hidden flex flex-col justify-between group hover:shadow-[rgba(0,0,0,0.08)_0px_10px_25px] transition-all duration-300 cursor-pointer"
                >
                  <div>
                    {/* Header */}
                    <div className="p-6 pb-4 border-b border-zinc-100 flex justify-between items-start">
                      <div>
                        <h3 className="apple-body-strong font-semibold text-lg text-ink">{prod.category}</h3>
                        <p className="text-[12px] text-zinc-500 mt-1 leading-relaxed">{prod.description}</p>
                      </div>
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">0{idx + 1}</span>
                    </div>

                    {/* Image Preview Container */}
                    <div className="relative aspect-[16/10] w-full bg-zinc-50 border-b border-zinc-100 overflow-hidden">
                      <Image
                        src={prod.image}
                        alt={prod.category}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-w-768px) 100vw, 400px"
                        loading="lazy"
                      />
                    </div>

                    {/* Key Items List */}
                    <div className="p-6">
                      <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-3">Featured Inventory</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {prod.items.map((item, idy) => (
                          <div key={idy} className="flex gap-2 items-center text-[12px] text-zinc-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span className="sm:truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="p-6 pt-0 flex gap-3">
                    <Link
                      href={`/products/${prod.slug}${lang === "en" ? "?lang=en" : ""}`}
                      className="apple-btn-active flex-1 border border-zinc-300 hover:border-zinc-500 text-ink text-xs font-semibold py-3 rounded-md transition-colors text-center"
                    >
                      {t.products.ctaDetails}
                    </Link>
                    <button
                      onClick={(e) => { e.stopPropagation(); triggerQuoteForProduct(prod.category); }}
                      className="apple-btn-active flex-1 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold py-3 rounded-md transition-colors cursor-pointer text-center block"
                    >
                      {t.products.ctaQuote}
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 5. Supplier proof — follows the product-first WBN Safety flow. */}
        <section id="about" className="py-24 bg-canvas-parchment border-y border-zinc-200">
          <div className="max-w-[980px] mx-auto px-6">
            
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2 block">{t.about.whyTitle}</span>
              <h2 className="apple-display-lg text-ink">{t.about.whySubtitle}</h2>
            </div>

            {/* Description card */}
            <div className="bg-white rounded-lg p-8 md:p-10 border border-zinc-200 shadow-2xs mb-12">
              <p className="apple-body text-ink leading-relaxed font-normal">
                {t.about.description}
              </p>
            </div>

            {/* Vision and Mission Split Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              
              {/* Vision Card */}
              <div className="bg-white rounded-lg p-8 border border-zinc-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-sm bg-primary/10 text-primary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                    </div>
                    <h3 className="apple-body-strong font-semibold text-lg">{t.about.visionTitle}</h3>
                  </div>
                  <p className="apple-caption text-zinc-600 leading-relaxed font-normal">
                    {t.about.vision}
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="bg-white rounded-lg p-8 border border-zinc-200 shadow-2xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-sm bg-primary/10 text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                  </div>
                  <h3 className="apple-body-strong font-semibold text-lg">{t.about.missionTitle}</h3>
                </div>
                <ul className="space-y-3">
                  {t.about.mission.map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-[13px] text-zinc-600 leading-relaxed">
                      <span className="text-primary mt-1 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Core Values Section */}
            <div>
              <h3 className="text-center apple-tagline text-ink mb-8">{t.about.valuesTitle}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.about.values.map((val, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-primary/30 transition-all duration-300 shadow-2xs flex flex-col gap-2 hover:scale-[1.02]">
                    <span className="text-[12px] font-semibold text-primary uppercase">Value 0{idx + 1}</span>
                    <h4 className="apple-caption-strong text-ink font-semibold">{val.title}</h4>
                    <p className="text-[12px] text-zinc-500 leading-relaxed font-normal">{val.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>


        {/* 7. Projects / Portfolio Section (Editorial Style Layout) */}
        <section id="projects" className="py-24 bg-white">
          <div className="max-w-[980px] mx-auto px-6">
            
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2 block">{t.nav.projects}</span>
              <h2 className="apple-display-lg text-ink mb-4">{t.projects.title}</h2>
              <p className="apple-body text-body-muted max-w-[600px] mx-auto">{t.projects.subtitle}</p>
            </div>

            {/* Projects Grid with Real Life Photos */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.projects.list.map((proj, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-lg border border-zinc-200 shadow-2xs flex flex-col justify-between overflow-hidden group hover:shadow-[rgba(0,0,0,0.06)_0px_8px_24px] hover:border-zinc-300 transition-all duration-300"
                >
                  <div>
                    {/* Project Image Frame */}
                    <div className="relative aspect-[4/3] w-full bg-zinc-50 overflow-hidden border-b border-zinc-100">
                      <Image
                        src={proj.image}
                        alt={proj.name}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        sizes="(max-w-768px) 100vw, 300px"
                        loading="lazy"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">
                        {proj.service}
                      </span>
                      <h3 className="apple-body-strong font-semibold text-[16px] text-ink leading-snug mb-2 group-hover:text-primary transition-colors">
                        {proj.name}
                      </h3>
                      <p className="text-[12px] text-zinc-500 leading-relaxed font-normal">
                        {proj.description}
                      </p>
                    </div>
                  </div>

                  {/* Project Metadata Footer */}
                  <div className="p-6 pt-0 mt-auto border-t border-zinc-50">
                    <div className="pt-4 flex justify-between items-center text-[11px] text-zinc-400">
                      <div className="truncate max-w-[70%]" title={proj.client}>
                        <span className="font-semibold text-zinc-600">Client:</span> {proj.client}
                      </div>
                      <div>
                        <span className="font-semibold text-zinc-600">Year:</span> {proj.year}
                      </div>
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-1">
                      <span className="font-semibold text-zinc-600">Location:</span> {proj.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 8. Testimonials Section */}
        <section id="testimonials" className="py-24 bg-canvas-parchment border-y border-zinc-200">
          <div className="max-w-[980px] mx-auto px-6">

            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2 block">{t.testimonials.title}</span>
              <h2 className="apple-display-md text-ink">{t.testimonials.subtitle}</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {t.testimonials.list.map((tm, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border border-zinc-200 shadow-2xs flex flex-col gap-4">
                  {/* Star rating */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < tm.rating ? "text-primary" : "text-zinc-200"}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.37 4.24a1 1 0 00.95.69h4.46c.97 0 1.37 1.24.59 1.81l-3.61 2.62a1 1 0 00-.36 1.12l1.38 4.24c.3.92-.76 1.69-1.54 1.12l-3.61-2.62a1 1 0 00-1.18 0l-3.61 2.62c-.78.57-1.84-.2-1.54-1.12l1.38-4.24a1 1 0 00-.36-1.12L2.32 9.67c-.78-.57-.38-1.81.59-1.81h4.46a1 1 0 00.95-.69L9.05 2.93z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[14px] text-zinc-600 leading-relaxed italic">&ldquo;{tm.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-auto pt-3 border-t border-zinc-100">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm shrink-0">
                      {tm.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-ink">{tm.name}</div>
                      <div className="text-[11px] text-zinc-500">{tm.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Contact Us Section (Two Columns: Maps/Info & Interactive form) */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-[980px] mx-auto px-6">
            
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2 block">{t.nav.contact}</span>
              <h2 className="apple-display-lg text-ink mb-4">{t.contact.title}</h2>
              <p className="apple-body text-body-muted max-w-[600px] mx-auto">{t.contact.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              
              {/* Column 1: Info and Map */}
              <div className="flex flex-col gap-8">
                
                {/* Contact Cards */}
                <div className="grid gap-6">
                  
                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="p-2.5 bg-primary/10 text-primary rounded-sm shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="apple-caption-strong text-ink font-semibold">{t.contact.addressTitle}</h3>
                      <p className="text-[13px] text-zinc-500 mt-1 leading-relaxed">{t.contact.address}</p>
                    </div>
                  </div>

                  {/* Phone, Email, WeChat */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    
                    {/* Phone */}
                    <div className="flex gap-4 items-start">
                      <div className="p-2.5 bg-primary/10 text-primary rounded-sm shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="apple-caption-strong text-ink font-semibold">{t.contact.phoneTitle}</h3>
                        <a href={`tel:${t.contact.phone.replace(/[^0-9+]/g, "")}`} className="text-[13px] text-zinc-500 mt-1 hover:text-primary transition-colors block w-fit">{t.contact.phone}</a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-4 items-start">
                      <div className="p-2.5 bg-primary/10 text-primary rounded-sm shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="apple-caption-strong text-ink font-semibold">{t.contact.emailTitle}</h3>
                        <a href={`mailto:${t.contact.email}`} className="text-[13px] text-zinc-500 mt-1 hover:text-primary transition-colors block w-fit break-all">{t.contact.email}</a>
                      </div>
                    </div>

                    {/* WeChat */}
                    <div className="flex gap-4 items-start sm:col-span-2">
                      <div className="p-2.5 bg-[#07C160]/10 text-[#07C160] rounded-sm shrink-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.168-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 4.882-1.892 7.621-.99-.54-3.784-4.09-6.596-8.365-6.596zm-2.24 5.048a1.02 1.02 0 110-2.04 1.02 1.02 0 010 2.04zm4.535 0a1.02 1.02 0 110-2.04 1.02 1.02 0 010 2.04zM24 14.406c0-3.406-3.4-6.17-7.59-6.17-4.227 0-7.64 2.764-7.64 6.17s3.413 6.17 7.64 6.17c.855 0 1.678-.125 2.447-.351a.72.72 0 01.598.082l1.584.926a.272.272 0 00.14.044c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.492.492 0 01.177-.553C22.995 17.87 24 16.268 24 14.406zm-9.877-1.07a.85.85 0 110-1.7.85.85 0 010 1.7zm4.535 0a.85.85 0 110-1.7.85.85 0 010 1.7z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="apple-caption-strong text-ink font-semibold">{t.contact.wechatTitle}</h3>
                        <a
                          href={wechatHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[13px] text-zinc-500 mt-1 hover:text-[#07C160] transition-colors block w-fit font-mono"
                        >
                          {t.contact.wechatId}
                        </a>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Google Maps Embed with premium styling */}
                <div className="relative rounded-lg overflow-hidden border border-zinc-200 h-[280px] bg-zinc-100 shadow-2xs">
                  <iframe 
                    title="PT Nyi Bahari Steel Location Map"
                    src="https://www.google.com/maps?q=-6.597665,107.452310&z=15&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

              </div>

              {/* Column 2: Form (shared component) */}
              <div className="bg-canvas-parchment rounded-lg p-8 border border-zinc-200 shadow-2xs">
                <QuoteForm t={t} initialService={selectedService} />
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* 10. Footer Section (Dark, Premium Titanium Theme) */}
      <footer className="bg-surface-tile-1 text-zinc-400 py-16 border-t border-zinc-800">
        <div className="max-w-[980px] mx-auto px-6">
          
          <div className="grid md:grid-cols-4 gap-8 mb-12 text-[13px]">
            
            {/* Column 1: Info and slogan */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-white">
                {/* Footer logo.jpeg Integration */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-zinc-700 bg-white flex items-center justify-center shrink-0">
                  <Image 
                    src="/logo.jpeg" 
                    alt="PT. Nyi Bahari Steel Logo" 
                    fill 
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <span className="font-semibold text-sm uppercase tracking-widest text-white">PT. NYI BAHARI STEEL</span>
              </div>
              <p className="leading-relaxed pr-6 text-zinc-500 font-normal">
                {t.about.description.slice(0, 180)}...
              </p>
              <span className="text-zinc-500 font-semibold italic text-[11px] block">{t.footer.legal}</span>

              {/* Social links */}
              <a
                href="https://www.tiktok.com/@nyi.bahari.steel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors w-fit"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 3h-2.7v13.1a2.3 2.3 0 1 1-2.3-2.3c.2 0 .4 0 .6.1v-2.8a5.2 5.2 0 0 0-.6 0 5.1 5.1 0 1 0 5.1 5.1V8.9a6.3 6.3 0 0 0 3.7 1.2V7.3a3.6 3.6 0 0 1-3.6-3.6 3.6 3.6 0 0 1 0-.7z" />
                </svg>
                <span className="text-[12px]">@nyi.bahari.steel</span>
              </a>
            </div>

            {/* Column 2: Navigation map */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[11px] font-bold text-zinc-300 uppercase tracking-widest mb-1">Quick Links</h4>
              <button onClick={() => scrollToSection("home")} className="text-left hover:text-white transition-colors cursor-pointer">Back to Top</button>
              <button onClick={() => scrollToSection("about")} className="text-left hover:text-white transition-colors cursor-pointer">{t.nav.about}</button>
              <button onClick={() => scrollToSection("products")} className="text-left hover:text-white transition-colors cursor-pointer">{t.nav.products}</button>
              <button onClick={() => scrollToSection("projects")} className="text-left hover:text-white transition-colors cursor-pointer">{t.nav.projects}</button>
            </div>

            {/* Column 3: Products quick nav */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[11px] font-bold text-zinc-300 uppercase tracking-widest mb-1">{t.nav.products}</h4>
              {t.products.list.map((prod, idx) => (
                <Link
                  key={idx}
                  href={`/products/${prod.slug}${lang === "en" ? "?lang=en" : ""}`}
                  className="text-left hover:text-white transition-colors truncate"
                >
                  {prod.category}
                </Link>
              ))}
            </div>

          </div>

          {/* Copyright bar */}
          <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
            <div>{t.footer.copyright}</div>
            <div className="flex gap-4">
              <a href="#about" className="hover:underline">Privacy Policy</a>
              <a href="#contact" className="hover:underline">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating CTAs: WeChat + WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href={wechatHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#07C160] hover:bg-[#06ad56] text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
          title={`${t.contact.wechatCta}: ${t.contact.wechatId}`}
          id="wechat-floating-widget"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.168-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 4.882-1.892 7.621-.99-.54-3.784-4.09-6.596-8.365-6.596zm-2.24 5.048a1.02 1.02 0 110-2.04 1.02 1.02 0 010 2.04zm4.535 0a1.02 1.02 0 110-2.04 1.02 1.02 0 010 2.04zM24 14.406c0-3.406-3.4-6.17-7.59-6.17-4.227 0-7.64 2.764-7.64 6.17s3.413 6.17 7.64 6.17c.855 0 1.678-.125 2.447-.351a.72.72 0 01.598.082l1.584.926a.272.272 0 00.14.044c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.492.492 0 01.177-.553C22.995 17.87 24 16.268 24 14.406zm-9.877-1.07a.85.85 0 110-1.7.85.85 0 010 1.7zm4.535 0a.85.85 0 110-1.7.85.85 0 010 1.7z"/>
          </svg>
        </a>

        <a
          href={`https://wa.me/${t.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(t.contact.whatsappPreFilledMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25d366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
          title={t.contact.whatsappCta}
          id="whatsapp-floating-widget"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.988 14.113.96 11.487.96c-5.447 0-9.873 4.372-9.877 9.802-.001 1.77.472 3.497 1.368 5.048L2.011 21.1l5.441-1.417zM16.48 13.94c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.66.83-.81.99-.15.17-.3.19-.56.06-.26-.13-1.1-.41-2.1-1.3-.78-.7-1.31-1.56-1.46-1.82-.15-.26-.02-.4.12-.53.12-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.79-1.92-.21-.52-.43-.45-.58-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.92.9-.92 2.2s.95 2.56 1.08 2.73c.13.17 1.87 2.85 4.53 4a15.341 15.341 0 001.51.52c.63.2 1.21.17 1.66.1.51-.08 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.12-.24-.18-.5-.31z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}
