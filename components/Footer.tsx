export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-10 border-t border-graphite/10 dark:border-paper/10 flex flex-col sm:flex-row items-center justify-between gap-3">
      <p className="font-mono text-xs text-mist dark:text-fog">
        © {new Date().getFullYear()} Yaşar Can Koç
      </p>
      <p className="font-mono text-xs text-mist dark:text-fog">
        Next.js · TailwindCSS · Framer Motion
      </p>
    </footer>
  );
}
