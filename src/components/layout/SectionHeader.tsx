type SectionHeaderProps = {
  titleId: string;
  eyebrow: string;
  title: string;
};

function SectionHeader({ titleId, eyebrow, title }: SectionHeaderProps) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <p className="font-serif text-xl italic text-(--color-ink-muted)">
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="mt-(--space-3) text-4xl leading-tight font-semibold tracking-tight text-(--color-ink) md:text-5xl"
      >
        {title}
      </h2>
    </header>
  );
}

export default SectionHeader;
