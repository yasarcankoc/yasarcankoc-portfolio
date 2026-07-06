"use client";

import { useState } from "react";
import { Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "./Reveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolyo mesajı — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:yasarcankoc61@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="iletisim"
      className="max-w-4xl mx-auto px-6 py-20 border-t border-graphite/10 dark:border-paper/10"
    >
      <Reveal>
        <p className="font-mono text-xs text-signal mb-3">04 — iletişim</p>
        <h2 className="font-display font-medium text-2xl md:text-3xl mb-4">
          Birlikte çalışalım
        </h2>
        <p className="text-mist dark:text-fog mb-10 max-w-lg">
          Bir proje fikriniz mi var, yoksa ekibinize mi katılmamı istiyorsunuz?
          Aşağıdan yazın, size dönüş yapayım.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-10">
        <Reveal>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Adınız"
              className="w-full bg-transparent border border-graphite/15 dark:border-paper/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-signal transition-colors"
            />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresiniz"
              className="w-full bg-transparent border border-graphite/15 dark:border-paper/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-signal transition-colors"
            />
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mesajınız"
              rows={4}
              className="w-full bg-transparent border border-graphite/15 dark:border-paper/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-signal transition-colors resize-none"
            />
            <button
              type="submit"
              className="bg-graphite text-paper dark:bg-paper dark:text-ink rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Mesaj gönder
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col justify-center gap-4">
            <a
              href="mailto:yasarcankoc61@gmail.com"
              className="flex items-center gap-3 text-sm hover:text-signal transition-colors"
            >
              <Mail size={16} /> yasarcankoc61@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/yasarcankoc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm hover:text-signal transition-colors"
            >
              <FaLinkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/yasarcankoc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm hover:text-signal transition-colors"
            >
              <FaGithub size={16} /> GitHub
            </a>
            <a
              href="https://bionluk.com/cannkoc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm hover:text-signal transition-colors"
            >
              <ExternalLink size={16} /> Bionluk profilim
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
