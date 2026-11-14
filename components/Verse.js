export default function Verse({ verse }) {
  return <figure className="verse spot">
    <span aria-hidden="true"></span>
    <blockquote>« {verse.text} »</blockquote>
    <figcaption>{verse.reference} · Louis Segond 1910{verse.excerpt && " (extrait)"}</figcaption>
  </figure>;
}
