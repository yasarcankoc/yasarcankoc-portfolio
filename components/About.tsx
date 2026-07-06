import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      id="hakkimda"
      className="max-w-4xl mx-auto px-6 py-24 border-t border-graphite/8 dark:border-paper/8"
    >
      <div className="grid md:grid-cols-[1fr_2fr] gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Hakkımda"
            title="Fikirden canlıya"
            className=""
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-5 leading-relaxed">
            <p className="text-lg text-graphite dark:text-paper">
              Python/Django ve Next.js ile full-stack web uygulamaları
              geliştiriyorum. Geliştirdiğim projeler arasında yatırım
              platformları, kurumsal CRM sistemleri, emlak/yapı satış siteleri
              ve e-ticaret sistemleri bulunuyor.
            </p>
            <p className="text-mist dark:text-fog">
              Bu projelerin tamamı canlı ortamda, gerçek kullanıcılara hizmet
              veriyor. Demo değil, üretimde çalışan yazılımlar.
            </p>
            <p className="text-mist dark:text-fog">
              Backend&apos;de Django REST Framework ve PostgreSQL,
              frontend&apos;de Next.js ve React kullanıyorum. Üçüncü parti API
              entegrasyonları, AWS ve Docker ile deploy süreçlerini de kendim
              yönetiyorum. Bir projeyi fikirden canlıya taşıyabilecek bütün
              adımları biliyorum.
            </p>
            <p className="text-mist dark:text-fog">
              Şu an İstanbul merkezli bir şirkette full-stack geliştirici
              olarak çalışıyorum, aynı zamanda freelance projeler de geliştiriyorum.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
