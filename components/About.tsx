import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="hakkimda"
      className="max-w-4xl mx-auto px-6 py-20 border-t border-graphite/10 dark:border-paper/10"
    >
      <Reveal>
        <p className="font-mono text-xs text-signal mb-3">01 — hakkımda</p>
      </Reveal>
      <div className="grid md:grid-cols-[1fr_2fr] gap-8">
        <Reveal>
          <h2 className="font-display font-medium text-2xl md:text-3xl">
            Fikirden canlıya
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-4 text-mist dark:text-fog leading-relaxed">
            <p>
              Python/Django ve Next.js ile full-stack web uygulamaları
              geliştiriyorum. Geliştirdiğim projeler arasında yatırım
              platformları, kurumsal CRM sistemleri, emlak/yapı satış siteleri
              ve e-ticaret sistemleri bulunuyor.
            </p>
            <p>
              Bu projelerin tamamı canlı ortamda, gerçek kullanıcılara hizmet
              veriyor — sadece demo değil, üretimde çalışan yazılımlar.
            </p>
            <p>
              Backend&apos;de Django REST Framework ve PostgreSQL,
              frontend&apos;de Next.js ve React kullanıyorum. Üçüncü parti API
              entegrasyonları, AWS ve Docker ile deploy süreçlerini de kendim
              yönetiyorum — bir projeyi fikirden canlıya taşıyabilecek bütün
              adımları biliyorum.
            </p>
            <p>
              Şu an İstanbul merkezli bir şirkette full-stack geliştirici
              olarak çalışıyorum, aynı zamanda freelance projeler de alıyorum.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
