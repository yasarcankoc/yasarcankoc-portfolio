"use client";

import { useState } from "react";
import { Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const inputClass =
  "w-full bg-graphite/[0.03] dark:bg-paper/[0.04] border border-graphite/10 dark:border-paper/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-signal focus:bg-transparent transition-colors";

const socials = [
  {
    href: "mailto:yasarcankoc61@gmail.com",
    icon: Mail,
    label: "yasarcankoc61@gmail.com",
    external: false,
  },
  {
    href: "https://linkedin.com/in/yasarcankoc",
    icon: FaLinkedin,
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/yasarcankoc",
    icon: FaGithub,
    label: "GitHub",
    external: true,
  },
  {
    href: "https://bionluk.com/cannkoc",
    icon: ExternalLink,
    label: "Bionluk profilim",
    external: true,
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolyo mesajı — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:yasarcankoc61@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="iletisim"
      className="max-w-4xl mx-auto px-6 py-24 border-t border-graphite/8 dark:border-paper/8"
    >
      <Reveal>
        <SectionHeading
          eyebrow="İletişim"
          title="Birlikte çalışalım"
          lead="Bir proje fikriniz mi var, yoksa ekibinize mi katılmamı istiyorsunuz? Aşağıdan yazın, size dönüş yapayım."
        />
      </Reveal>

      <div className="grid md:grid-cols-[3fr_2fr] gap-6 items-start">
        <Reveal>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl bg-paper-soft dark:bg-ink-soft ring-1 ring-graphite/10 dark:ring-paper/10 p-6 md:p-8"
          >
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Adınız"
              className={inputClass}
            />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresiniz"
              className={inputClass}
            />
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mesajınız"
              rows={4}
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              className="w-full bg-graphite text-paper dark:bg-paper dark:text-ink rounded-xl px-6 py-3.5 text-sm font-medium shadow-lg shadow-graphite/15 dark:shadow-black/40 hover:-translate-y-0.5 hover:opacity-95 transition-all"
            >
              Mesaj gönder
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-3">
            {socials.map(({ href, icon: Icon, label, external }) => (
              <a
                key={href}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-3 rounded-xl ring-1 ring-graphite/10 dark:ring-paper/10 bg-paper-soft dark:bg-ink-soft px-4 py-3.5 text-sm hover:ring-signal/40 hover:-translate-y-0.5 transition-all"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-signal/10 text-signal">
                  <Icon size={15} />
                </span>
                <span className="group-hover:text-signal transition-colors">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
