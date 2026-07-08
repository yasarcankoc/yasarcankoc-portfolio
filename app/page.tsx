import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME } from "@/lib/site";

// JSON-LD (schema.org Person) — Google'ın "bu site kime ait" sorusuna
// yapılandırılmış cevabı. sameAs, arama motorunun sosyal profilleri
// aynı kişiye bağlamasını sağlar.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: "Full-Stack Web Geliştirici",
  email: "mailto:merhaba@yasarcankoc.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  sameAs: [
    "https://linkedin.com/in/yasarcankoc",
    "https://github.com/yasarcankoc",
    "https://bionluk.com/cannkoc",
  ],
  knowsAbout: ["Django", "Next.js", "React", "PostgreSQL", "Docker", "AWS"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
