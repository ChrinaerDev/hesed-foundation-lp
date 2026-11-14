import Verse from "../components/Verse";
import { verses } from "../lib/verses";
import Link from "next/link";
import { articles } from "../lib/content";
import { ArticleGrid } from "../components/Editorial";
import Collaborators from "../components/Collaborators";

export default function Home() {
  return <>
    <section className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><i /> Mouvement chrétien · Bafoussam</p>
          <h1>Le cœur de Dieu<br /><em>sur terre.</em></h1>
          <p className="lead">Partager l’amour fidèle de Dieu par la prière, l’enseignement et le service auprès des enfants.</p>
          <div className="actions"><Link className="button give" href="/don">Faire un don ↗</Link><Link className="light-link" href="/a-propos">Découvrir HESED <span>→</span></Link></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="seal"><span className="seal-star"></span><span className="hebrew" lang="he" dir="rtl">חֶסֶד</span><span className="seal-caption">HESED <b>·</b> AMOUR FIDÈLE</span></div>
        </div>
      </div>
    </section>
    <section className="shell section feature-split">
      <div><p className="eyebrow">La Parole au cœur du mouvement</p><h2>Une fidélité qui se renouvelle</h2>
        <p>HESED tire son nom de la bonté fidèle de Dieu. Dans les Lamentations, cette fidélité est affirmée au milieu de l’épreuve. Le passage invite à reconnaître les signes de compassion qui se renouvellent chaque matin.</p>
        <Link className="read" href="/a-propos">Comprendre le sens de HESED ↗</Link>
      </div>
      <Verse verse={verses.faithful} />
    </section>
    <section className="section shell">
      <div className="section-head"><div><p className="eyebrow">Le journal de HESED</p><h2>À lire et à méditer</h2></div><Link className="read" href="/actualites">Toutes les actualités ↗</Link></div>
      <ArticleGrid articles={articles.slice(0, 3)} />
    </section>
    <section className="mission-band"><div className="shell mission-inner">
      <div><p className="eyebrow">Jeunesse HESED</p><h2>L’amour fidèle<br />en actes.</h2></div>
      <div><p>Notre programme prévoit deux visites en orphelinat par an. Ces rencontres associent écoute, prière, activités éducatives et soutien matériel.</p><Link className="button outline" href="/nos-actions">Découvrir nos actions ↗</Link></div>
    </div></section>
    <Collaborators />
    <section className="giving-band"><div className="shell">
      <p className="eyebrow">Soutenir Jeunesse HESED</p><h2>Préparer les prochaines visites</h2>
      <p>Découvrez le parcours de don et les besoins matériels que le programme prévoit de soutenir.</p>
      <Link className="button give" href="/don">Faire un don ↗</Link>
    </div></section>
  </>;
}

