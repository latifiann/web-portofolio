export type Locale = "en" | "id";

export type ProjectStatus = "ongoing" | "completed" | "prototype" | "archived";

export type PublicationState = "draft" | "published";

export type MaintenanceState = "maintained" | "unmaintained" | null;

export type ProjectLinkKind = "external" | "repository" | "demo";

export interface ProjectTimeline {
  start: string;
  end: string | null;
  ongoing: boolean;
  display: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  kind: ProjectLinkKind;
}

export interface ProjectMedia {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export type ProjectBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export interface ProjectSection {
  heading: string;
  blocks: ProjectBlock[];
}

export interface ProjectHighlight {
  label: string;
  value: string;
  note: string;
}

export interface ProjectLocalizedContent {
  locale: Locale;
  title: string;
  summary: string;
  cardSummary: string;
  roleSummary: string;
  seoDescription: string;
  heroCaption: string;
  outcomeSummary: string;
  highlights: ProjectHighlight[];
  sections: ProjectSection[];
}

export type TimelineEntryType = "experience" | "education";

export interface ExperienceLocalizedContent {
  locale: Locale;
  title: string;
  period: string;
  organizationNote: string | null;
  description: string;
  contributions: string[];
}

export interface ExperienceEntryDetail {
  id: string;
  type: TimelineEntryType;
  organization: string;
  technologies: string[];
  content: {
    en: ExperienceLocalizedContent;
    id: ExperienceLocalizedContent | null;
  };
}

export interface TimelineEntry {
  id: string;
  type: TimelineEntryType;
  title: string;
  organization: string;
  period: string;
  description: string;
  organizationNote?: string;
  contributions: string[];
  technologies: string[];
}

export interface ProjectDetail {
  slug: string;
  cardTitle: string;
  caseStudyTitle: string;
  category: string;
  timeline: ProjectTimeline;
  status: ProjectStatus;
  maintenance: MaintenanceState;
  roles: string[];
  teamContext: string;
  stack: string[];
  cardStack: string[];
  publication: PublicationState;
  homepageOrder: 1 | 2 | 3 | 4 | 5 | 6 | null;
  links: ProjectLink[];
  primaryLink: ProjectLink | null;
  ctaLabel: string | null;
  hero: ProjectMedia;
  content: {
    en: ProjectLocalizedContent;
    id: ProjectLocalizedContent | null;
  };
}
