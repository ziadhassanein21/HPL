/**
 * TASK A5 — Reusable SchemaOrg Component
 * Accepts any JSON-LD object and renders it as a <script type="application/ld+json"> tag.
 */

import Script from 'next/script';

export default function SchemaOrg({ schema, id }) {
  if (!schema) return null;

  return (
    <Script
      id={id || `schema-${schema['@type']}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
