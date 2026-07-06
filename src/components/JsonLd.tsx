/**
 * Renders a JSON-LD structured-data script. Server-safe.
 * Data is serialized on the server; no user input is interpolated.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
