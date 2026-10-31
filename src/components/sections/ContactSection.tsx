import PageContainer from "../layout/PageContainer";
import ActionLink from "../ui/ActionLink";
import type { SiteStrings } from "../../types/site";

function ContactSection({ strings }: { strings: SiteStrings }) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative scroll-mt-(--anchor-offset) overflow-hidden bg-[linear-gradient(180deg,var(--color-surface-accent)_0%,var(--color-surface-soft)_45%,var(--color-canvas)_100%)] py-(--contact-padding-mobile) md:py-(--contact-padding-desktop)"
    >
      <PageContainer>
        <div className="relative mx-auto text-center">
          <h2
            id="contact-title"
            className="text-5xl leading-tight font-normal tracking-tight text-balance text-(--color-ink) md:text-7xl"
          >
            {strings.contactTitle}
          </h2>
          <p className="mx-auto mt-(--space-6) max-w-lg text-lg text-(--color-ink-secondary)">
            {strings.contactBody}
          </p>
          <div className="mt-(--space-8) flex flex-wrap justify-center gap-(--space-3)">
            <ActionLink
              href="mailto:latifian.iman44@gmail.com"
              appearance="solid"
            >
              {strings.email}
            </ActionLink>
            <ActionLink
              href="/resume/latifian-iman-cv-ats.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={strings.resumeAccessible}
              appearance="solid"
            >
              {strings.resume}
            </ActionLink>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default ContactSection;
