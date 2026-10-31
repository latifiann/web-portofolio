import type { PageMetadata } from "../lib/metadata";

const ogLocales = { en: "en_US", id: "id_ID" };

export default function RouteMetadata({ metadata }: { metadata: PageMetadata | null }) {
  if (!metadata) return (
    <React.Fragment>
      <title data-route-metadata="true">Page not found — Latifian Iman</title>
      <meta data-route-metadata="true" name="robots" content="noindex" />
    </React.Fragment>
  );
  const { title, description, canonical, image, imageAlt, locale, alternates } = metadata;
  return (
    <React.Fragment>
      <title data-route-metadata="true">{title}</title>
      <meta data-route-metadata="true" name="description" content={description} />
      <link data-route-metadata="true" rel="canonical" href={canonical} />
      {alternates.map((alternate) => (
        <link data-route-metadata="true" key={alternate.locale} rel="alternate" hrefLang={alternate.locale} href={alternate.url} />
      ))}
      <meta data-route-metadata="true" property="og:title" content={title} />
      <meta data-route-metadata="true" property="og:description" content={description} />
      <meta data-route-metadata="true" property="og:url" content={canonical} />
      <meta data-route-metadata="true" property="og:type" content="website" />
      <meta data-route-metadata="true" property="og:locale" content={ogLocales[locale]} />
      {alternates.filter((alternate) => alternate.locale !== "x-default" && alternate.locale !== locale).map((alternate) => (
        <meta data-route-metadata="true" key={alternate.locale} property="og:locale:alternate" content={ogLocales[alternate.locale === "id" ? "id" : "en"]} />
      ))}
      <meta data-route-metadata="true" property="og:image" content={image} />
      <meta data-route-metadata="true" property="og:image:alt" content={imageAlt} />
      <meta data-route-metadata="true" name="twitter:card" content="summary_large_image" />
      <meta data-route-metadata="true" name="twitter:title" content={title} />
      <meta data-route-metadata="true" name="twitter:description" content={description} />
      <meta data-route-metadata="true" name="twitter:image" content={image} />
      <meta data-route-metadata="true" name="twitter:image:alt" content={imageAlt} />
    </React.Fragment>
  );
}
import * as React from "react";
