"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Language } from "../../data/content";

/**
 * Client-side EN/ID toggle for product detail pages.
 * Navigates back to the same page with ?lang= swapped; the server
 * component re-renders with the new language.
 */
export default function ProductLanguageToggle({ lang }: { lang: Language }) {
  const router = useRouter();
  const [pending, setPending] = useState<Language | null>(null);

  const switchTo = (next: Language) => {
    if (next === lang) return;
    setPending(next);
    router.push(`?lang=${next}`, { scroll: false });
  };

  const renderBtn = (code: Language, label: string) => {
    const isActive = lang === code;
    const isPending = pending === code;
    return (
      <button
        onClick={() => switchTo(code)}
        aria-pressed={isActive}
        className={`px-2 py-0.5 rounded-[4px] cursor-pointer transition-colors ${
          isActive
            ? "bg-primary text-white"
            : isPending
              ? "text-zinc-200"
              : "text-zinc-400 hover:text-white"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div
      className="flex bg-zinc-800 rounded-sm p-0.5 text-[11px] font-medium border border-white/5"
      role="group"
      aria-label="Language selector"
    >
      {renderBtn("en", "EN")}
      {renderBtn("id", "ID")}
      {renderBtn("zh", "中文")}
    </div>
  );
}
