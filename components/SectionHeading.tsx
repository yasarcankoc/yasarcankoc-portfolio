type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
};

/**
 * Bölüm başlıkları için ortak desen: signal renkli kısa çizgi + uppercase
 * mono etiket, altında display başlık, istenirse kısa açıklama satırı.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  className = "mb-12",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-signal mb-4">
        <span className="h-px w-8 bg-signal/60" />
        {eyebrow}
      </p>
      <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight">
        {title}
      </h2>
      {lead && (
        <p className="mt-3 text-mist dark:text-fog max-w-lg leading-relaxed">
          {lead}
        </p>
      )}
    </div>
  );
}
