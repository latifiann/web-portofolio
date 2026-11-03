export const siteStringKeys = [
  "skip", "home", "about", "projects", "experience", "capabilities", "technology", "contact",
  "primaryNavigation", "footerNavigation", "socialLinks", "switchToEnglish", "switchToIndonesian", "theme", "themeUnavailable",
  "openMenu", "closeMenu", "open", "close", "getInTouch", "copyright",
  "heroGreeting", "heroRole", "portraitAlt", "socialPreviewAlt", "availability", "focusLabel", "focusValue", "focusValueFrontend", "focusValueBackend", "heroStatement",
  "resume", "resumeAccessible", "engineeringGreeting", "engineeringStatement", "engineeringAccent",
  "selectedEyebrow", "selectedTitle", "swipeProjects", "exploreProjects", "projectPreview", "projectCount", "projectIndexDescription",
  "experienceEyebrow", "viewDetails", "hideDetails", "capabilitiesEyebrow",
  "technologyTitle", "technologyAccessible", "contactTitle", "contactBody", "email",
  "previous", "next", "relatedTitle", "backToWork", "outcome", "technologies", "projectHighlights",
  "projectPagination", "technicalStack", "relatedPage", "newTab", "pageIndicator", "viewRepository", "viewGooglePlay", "viewLink",
  "videoPlayerLabel",
  "mediaGalleryLabel", "mediaGalleryImage", "mediaGalleryVideo",
  "mobileApp", "webApp", "completed", "prototype", "ongoing", "maintained", "unmaintained",
  "finalAcademicProject", "personalProject", "internshipPrototype", "internshipProduct",
  "notFoundTitle", "notFoundBody", "notFoundHome",
  "mobileDevelopment", "frontendDevelopment", "backendApi", "realtimeIntegration", "qualityAssurance", "teamCollaboration",
  "frontendEngineering", "frontendDescription", "backendDescription", "mobileDescription", "databases", "databaseDescription",
  "qualityDescription", "manualTesting", "automatedTesting", "projectCollaboration", "collaborationDescription",
] as const;

export type SiteStringKey = (typeof siteStringKeys)[number];
export type SiteStrings = Record<SiteStringKey, string>;
export type SiteContent = Record<"en" | "id", SiteStrings>;

export interface SiteMetadataContent {
  canonicalOrigin: string;
  home: Record<"en" | "id", { title: string; description: string }>;
}
