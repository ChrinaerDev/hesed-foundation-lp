import Link from "next/link";
import Reveal from "./Reveal";

const quick = [2500, 5000, 10000];

export default function DonateBand({
  eyebrow = "Soutenir Jeunesse HESED",
  title = "Faites partie de la prochaine visite",
  text = "Chaque don aide à préparer les visites en orphelinat : kits scolaires, vêtements, nourriture et moments partagés avec les enfants.",
  compact = false,
}) {
  return <section className={`donate-band${compact ? " compact" : ""}`}>
    <div className="shell donate-inner">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </Reveal>
      <Reveal delay={140} className="donate-actions">
        <div className="chips" aria-label="Montants suggérés">
          {quick.map(value => <Link key={value} className="chip" href={`/don?montant=${value}`}>{value.toLocaleString("fr-FR")} <small>FCFA</small></Link>)}
        </div>
        <Link className="button give big pulse" href="/don">Faire un don ↗</Link>
      </Reveal>
    </div>
  </section>;
}
