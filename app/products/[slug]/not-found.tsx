import Image from "next/image";
import Link from "next/link";
import { content } from "../../data/content";

export default function ProductNotFound() {
  const t = content.id;

  return (
    <div className="relative min-h-screen flex flex-col font-sans text-ink bg-white">
      <nav className="sticky top-0 left-0 right-0 z-50 bg-surface-black text-white h-[44px] flex items-center px-4 md:px-8 justify-between border-b border-white/10 select-none">
        <Link href="/" className="flex items-center gap-2">
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
      </nav>

      <main className="flex-1 flex items-center justify-center py-24 px-6">
        <div className="text-center max-w-[480px]">
          <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-3 block">
            404
          </span>
          <h1 className="apple-display-lg text-ink mb-4">
            Kategori produk tidak ditemukan
          </h1>
          <p className="apple-body text-body-muted mb-8 leading-relaxed">
            Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
            Silakan kembali ke katalog produk kami.
          </p>
          <Link
            href="/#products"
            className="apple-btn-active inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-pill font-medium text-sm transition-colors"
          >
            {t.productDetail.backToProducts}
          </Link>
        </div>
      </main>
    </div>
  );
}
