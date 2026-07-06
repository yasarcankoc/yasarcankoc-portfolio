export default function Footer() {
  return (
    <footer className="border-t border-graphite/8 dark:border-paper/8">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <a href="#top" className="font-mono text-sm tracking-tight">
          yck<span className="text-signal">.</span>dev
        </a>
        <p className="font-mono text-xs text-mist dark:text-fog">
          © {new Date().getFullYear()} Yaşar Can Koç
        </p>
        <p className="font-mono text-xs text-mist dark:text-fog">
          Next.js · TailwindCSS · Framer Motion
        </p>
      </div>
    </footer>
  );
}
