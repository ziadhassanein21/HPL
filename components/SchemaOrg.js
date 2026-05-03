/**
 * TASK A5 — Reusable SchemaOrg Component
 * Accepts any JSON-LD object and renders it as a <script type="application/ld+json"> tag.
 */

export default function SchemaOrg({ schema }) {
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
