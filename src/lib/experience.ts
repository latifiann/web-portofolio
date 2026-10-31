import type { ExperienceEntryDetail, Locale, TimelineEntry } from "../types/content";

export function selectTimelineEntries(
  entries: ExperienceEntryDetail[],
  locale: Locale,
): TimelineEntry[] {
  return entries.flatMap((entry) => {
    const localized = entry.content[locale];
    if (!localized) return [];

    return [
      {
        id: entry.id,
        type: entry.type,
        title: localized.title,
        organization: entry.organization,
        period: localized.period,
        description: localized.description,
        contributions: localized.contributions,
        technologies: entry.technologies,
        ...(localized.organizationNote === null
          ? {}
          : { organizationNote: localized.organizationNote }),
      },
    ];
  });
}
