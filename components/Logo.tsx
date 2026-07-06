/**
 * Marka: favicon'daki (app/icon.svg) koyu yuvarlak kare "yck." rozeti +
 * tam isim. Navbar ve Footer'da kullanılıyor; paylaşım kartındaki
 * (opengraph-image) rozetle aynı dil. Rozet dark modda zemine karışmasın
 * diye ince bir ring alıyor.
 */
export default function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 group">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-ink ring-1 ring-transparent dark:ring-paper/20 select-none">
        <span className="font-display font-bold text-[12px] tracking-tight leading-none text-paper">
          yck<span className="text-signal">.</span>
        </span>
      </span>
      <span className="font-display font-medium text-[15px] tracking-tight group-hover:text-signal transition-colors">
        Yaşar Can Koç
      </span>
    </a>
  );
}
