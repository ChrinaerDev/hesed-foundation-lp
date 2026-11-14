import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

// Mosaïque de photos. Remplacez chaque <Placeholder> par une <Image> quand les photos seront prêtes.
export default function Gallery({ title = "Moments de partage", eyebrow = "En images" }) {
  return <section className="section shell">
    <Reveal><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></Reveal>
    <div className="gallery">
      <Reveal className="gallery-main"><Placeholder fill label="Photo d’une visite · à venir" /></Reveal>
      <Reveal delay={110}><Placeholder fill label="Photo · à venir" /></Reveal>
      <Reveal delay={200}><Placeholder fill label="Photo · à venir" /></Reveal>
      <Reveal delay={290} className="gallery-wide"><Placeholder fill label="Photo · à venir" /></Reveal>
    </div>
  </section>;
}
