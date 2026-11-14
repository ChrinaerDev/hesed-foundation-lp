import Verse from "../components/Verse";
import { verses } from "../lib/verses";
import Link from "next/link";
import { articles } from "../lib/content";
import { ArticleGrid } from "../components/Editorial";
import Collaborators from "../components/Collaborators";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";
import Particles from "../components/Particles";
import Impact from "../components/Impact";
import Gallery from "../components/Gallery";
import DonateBand from "../components/DonateBand";

export default function Home() {
  return <>
    <section className="hero spot">
      <Particles />
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><i /> Mouvement chrétien · Bafoussam</p>
          <h1>Le cœur de Dieu<br /><em>sur terre.</em></h1>
          <p className="lead">Partager l’amour fidèle de Dieu par la prière, l’enseignement et le service auprès des enfants.</p>
          <div className="actions">
            {/* <Link className="button give big pulse" href="/don">Faire un don ↗</Link> */}
            <Link className="light-link" href="/a-propos">Découvrir HESED <span>→</span></Link></div>
          <p className="hero-note"><span aria-hidden="true">♥</span> Vous choisissez le montant · don ponctuel en FCFA</p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <span className="shafts" />
          <span className="rays" />
          <span className="rays rays-b" />
          <div className="cross">
            <span className="cross-halo" />
            <span className="cross-v" />
            <span className="cross-h" />
            <span className="cross-core" />
          </div>
          <Particles count={38} className="dust" center />
          <div className="ton"><span className="hebrew" lang="he" dir="rtl">חֶסֶד</span><span className="ton-caption">HESED <b>·</b> AMOUR FIDÈLE</span></div>
        </div>
      </div>
    </section>
    {/* <Marquee /> */}
    <section className="shell section feature-split">
      <Reveal><p className="eyebrow">La Parole au cœur du mouvement</p><h2>Une fidélité qui se renouvelle</h2>
        <p>HESED tire son nom de la bonté fidèle de Dieu. Dans les Lamentations, cette fidélité est affirmée au milieu de l’épreuve. Le passage invite à reconnaître les signes de compassion qui se renouvellent chaque matin.</p>
        <Link className="read" href="/a-propos">Comprendre le sens de HESED ↗</Link>
      </Reveal>
      <Reveal delay={150}><Verse verse={verses.faithful} /></Reveal>
    </section>
    <Impact />
    <section className="section shell">
      <Reveal className="section-head"><div><p className="eyebrow">Le journal de HESED</p><h2>À lire et à méditer</h2></div><Link className="read" href="/actualites">Toutes les actualités ↗</Link></Reveal>
      <ArticleGrid articles={articles.slice(0, 3)} />
    </section>
    <section className="mission-band"><div className="shell mission-inner">
      <Reveal><p className="eyebrow">Jeunesse HESED</p><h2>L’amour fidèle<br />en actes.</h2></Reveal>
      <Reveal delay={140}><p>Notre programme prévoit deux visites en orphelinat par an. Ces rencontres associent écoute, prière, activités éducatives et soutien matériel.</p><div className="actions">
        {/* <Link className="button give pulse" href="/don">Faire un don ↗</Link> */}
        <Link className="button outline" href="/nos-actions">Découvrir nos actions ↗</Link></div></Reveal>
    </div></section>
    <Gallery />
    <Collaborators />
    {/* <DonateBand /> */}
  </>;
}
