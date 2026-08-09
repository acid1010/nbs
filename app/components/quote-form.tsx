"use client";

import React, { useState, useEffect, useCallback } from "react";
import type { ContentData } from "../data/content";

interface QuoteFormProps {
  /** Contact + product strings for the active language */
  t: Pick<ContentData, "contact" | "products">;
  /** Pre-selected service/category (e.g. the current detail page's category) */
  initialService?: string;
}

/**
 * Inquiry form that forwards the message to WhatsApp (no backend).
 * Used on the homepage contact section and on each product detail page.
 */
export default function QuoteForm({ t, initialService }: QuoteFormProps) {
  const [selectedService, setSelectedService] = useState(
    initialService ?? t.products.list[0].category
  );
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  // Keep the dropdown in sync if the caller changes the preset (e.g. language swap).
  // Uses the "adjust state during render" pattern instead of an effect to avoid
  // cascading renders (react.dev/learn/you-might-not-need-an-effect).
  const [prevPreset, setPrevPreset] = useState(initialService);
  if (initialService && initialService !== prevPreset) {
    setPrevPreset(initialService);
    setSelectedService(initialService);
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // No backend: forward the inquiry straight into WhatsApp with a prefilled message
    const waText = [
      "*Inquiry from PT. Nyi Bahari Steel Website*",
      "---------------------------------------",
      `*Name:* ${formData.name}`,
      `*Company:* ${formData.company}`,
      `*Phone:* ${formData.phone}`,
      `*Email:* ${formData.email}`,
      `*Service:* ${selectedService}`,
      `*Message:* ${formData.message}`,
    ].join("\n");
    const waNumber = t.contact.whatsapp.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`, "_blank");

    setIsSubmitting(false);
    setFormSubmitted(true);
  };

  const closeSuccessModal = useCallback(() => {
    setFormSubmitted(false);
    setFormData({ name: "", company: "", phone: "", email: "", message: "" });
  }, []);

  // Escape closes success modal (listener only runs while the modal is open)
  useEffect(() => {
    if (!formSubmitted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSuccessModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // closeSuccessModal is stable (useCallback), so this only re-subscribes on open/close
  }, [formSubmitted, closeSuccessModal]);

  const inputClass =
    "bg-white border border-zinc-200 text-zinc-800 text-sm rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all font-sans";

  return (
    <>
      <form onSubmit={handleFormSubmit} className="space-y-5">
        {/* Name field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="qf-name" className="apple-caption-strong text-ink">
            {t.contact.form.name}
          </label>
          <input
            type="text"
            id="qf-name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="e.g. John Doe"
            className={inputClass}
          />
        </div>

        {/* Company field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="qf-company" className="apple-caption-strong text-ink">
            {t.contact.form.company}
          </label>
          <input
            type="text"
            id="qf-company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            required
            placeholder="e.g. PT. Global Kontraktor"
            className={inputClass}
          />
        </div>

        {/* Phone & Email Row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="qf-phone" className="apple-caption-strong text-ink">
              {t.contact.form.phone}
            </label>
            <input
              type="tel"
              id="qf-phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="e.g. +62 812..."
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="qf-email" className="apple-caption-strong text-ink">
              {t.contact.form.email}
            </label>
            <input
              type="email"
              id="qf-email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="e.g. procurement@company.com"
              className={inputClass}
            />
          </div>
        </div>

        {/* Service Needed Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="qf-service" className="apple-caption-strong text-ink">
            {t.contact.form.service}
          </label>
          <select
            id="qf-service"
            name="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className={`${inputClass} cursor-pointer`}
          >
            {t.products.list.map((prod, idx) => (
              <option key={idx} value={prod.category}>
                {prod.category}
              </option>
            ))}
          </select>
        </div>

        {/* Message textarea */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="qf-message" className="apple-caption-strong text-ink">
            {t.contact.form.message}
          </label>
          <textarea
            id="qf-message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            placeholder="Specify quantities, durations, or technical scopes needed..."
            className={inputClass}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="apple-btn-active w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-pill text-sm font-semibold transition-colors cursor-pointer disabled:bg-zinc-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
        </button>
      </form>

      {/* Inquiry Success Modal Dialog Overlay */}
      {formSubmitted && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={closeSuccessModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="inquiry-success-title"
            className="bg-white rounded-lg border border-zinc-200/80 shadow-[rgba(0,0,0,0.15)_0px_20px_50px] max-w-[500px] w-full p-8 text-center animate-fade-in relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>

            <h3 id="inquiry-success-title" className="apple-display-md text-ink font-semibold mb-3">
              {t.contact.form.successTitle}
            </h3>
            <p className="text-[13px] text-zinc-500 leading-relaxed mb-6 font-normal">
              {t.contact.form.successMsg}
            </p>

            <button
              onClick={closeSuccessModal}
              autoFocus
              className="apple-btn-active w-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-semibold py-3 rounded-pill transition-colors cursor-pointer"
            >
              {t.contact.form.successBtnClose}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
