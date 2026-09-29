import PageContainer from "../layout/PageContainer";

type Technology = {
  name: string;
  iconSrc?: string;
};

const technologies: Technology[] = [
  { name: "Flutter", iconSrc: "/technology-icons/flutter.svg" },
  { name: "Dart", iconSrc: "/technology-icons/dart.svg" },
  { name: "React", iconSrc: "/technology-icons/react.svg" },
  { name: "TypeScript", iconSrc: "/technology-icons/typescript.svg" },
  { name: "JavaScript", iconSrc: "/technology-icons/js.svg" },
  { name: "HTML5", iconSrc: "/technology-icons/html5.svg" },
  { name: "CSS3", iconSrc: "/technology-icons/css3.svg" },
  { name: "Tailwind CSS", iconSrc: "/technology-icons/tailwindcss.svg" },
  { name: "Node.js", iconSrc: "/technology-icons/nodejs.svg" },
  { name: "Express", iconSrc: "/technology-icons/expressjs.svg" },
  { name: "Java", iconSrc: "/technology-icons/java.svg" },
  { name: "PostgreSQL", iconSrc: "/technology-icons/postgresql.svg" },
  { name: "MySQL", iconSrc: "/technology-icons/mysql.svg" },
  { name: "MongoDB", iconSrc: "/technology-icons/mongodb.svg" },
  { name: "Docker", iconSrc: "/technology-icons/docker.svg" },
  { name: "Git", iconSrc: "/technology-icons/git.svg" },
  { name: "GitHub", iconSrc: "/technology-icons/github.svg" },
  { name: "Figma", iconSrc: "/technology-icons/figma.svg" },
];

function TechnologyItem({ technology }: { technology: Technology }) {
  return (
    <li className="technology-marquee-item">
      {technology.iconSrc && (
        <img
          src={technology.iconSrc}
          alt=""
          aria-hidden="true"
          width={24}
          height={24}
          className="technology-marquee-icon"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.hidden = true;
          }}
        />
      )}
      <span>{technology.name}</span>
    </li>
  );
}

function TechnologyStrip() {
  return (
    <section
      id="technology"
      aria-labelledby="technology-title"
      className="technology-section scroll-mt-(--anchor-offset)"
    >
      <PageContainer>
        <div className="flex items-center gap-(--space-3)">
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-(--color-border)"
          />
          <h2
            id="technology-title"
            className="font-mono text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-(--color-ink-muted)"
          >
            Core technologies &amp; ecosystem
          </h2>
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-(--color-border)"
          />
        </div>
      </PageContainer>

      <div
        className="technology-marquee"
        role="region"
        tabIndex={0}
        aria-label="Technology list. Focus to pause animation."
      >
        <div className="technology-marquee-track">
          <ul className="technology-marquee-group">
            {technologies.map((technology) => (
              <TechnologyItem key={technology.name} technology={technology} />
            ))}
          </ul>

          <ul aria-hidden="true" className="technology-marquee-group">
            {technologies.map((technology) => (
              <TechnologyItem key={technology.name} technology={technology} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TechnologyStrip;
