"use client";

import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#projeler", label: "Projeler" },
  { href: "#yetenekler", label: "Yetenekler" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-paper/80 dark:bg-ink/80 border-b border-graphite/10 dark:border-paper/10">
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tight">
          yck<span className="text-signal">.</span>dev
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mist dark:text-fog hover:text-graphite dark:hover:text-paper transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/cv-yasarcankoc.pdf"
            className="hidden sm:inline text-sm font-medium border border-graphite/20 dark:border-paper/20 rounded-full px-4 py-1.5 hover:border-signal hover:text-signal transition-colors"
          >
            CV indir
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
