import Link from "next/link";
import Verse from "../../components/Verse";
import { verses } from "../../lib/verses";

export const metadata = { title: "À propos" };

const pillars = [
  ["Intercéder", "Porter les besoins des autres dans la prière et apprendre à écouter avant de répondre."],
  ["Évangéliser", "Partager le message de Jésus dans un langage accessible, notamment à travers les enseignements du mouvement."],
  ["Accompagner la restauration", "Faire place aux témoignages et à la réflexion sur le pardon, l’espérance et les nouveaux départs."],
  ["Former des disciples", "Relier la lecture de la Bible aux décisions de la vie quotidienne et au service."],
];

export default function About() {
  return <>
    <header className="subhero"><div className="shell"><p className="eyebrow">À propos</p><h1>L’amour fidèle de Dieu</h1><p>HESED est un mouvement chrétien de jeunes à Bafoussam, dans la région de l’Ouest du Cameroun.</p></div></header>
    <section className="shell section feature-split">
      <div><p className="eyebrow">Le sens de HESED</p><h2>Une bonté qui demeure</h2>
        <p>Le nom vient de <b lang="he" dir="rtl">חֶסֶד</b>, un mot hébreu associé à la bonté, à la miséricorde et à l’amour fidèle. Dans Exode 34, Dieu se révèle à Moïse après la rupture de l’alliance. Sa manière de se présenter donne son sens au nom du mouvement.</p>
        <p>Pour HESED, méditer cette fidélité conduit à se demander comment rester présent auprès des autres, y compris quand leur situation demande du temps et de la patience.</p>
      </div>
      <Verse verse={verses.mercy} />
    </section>
    <section className="soft-band"><div className="shell section">
      <p className="eyebrow">Notre mission</p><h2>Quatre engagements</h2>
      <div className="detail-grid">{pillars.map(([title, description]) => <div className="detail-card" key={title}><h3>{title}</h3><p>{description}</p></div>)}</div>
    </div></section>
    <section className="shell section feature-split">
      <div><p className="eyebrow">Notre histoire</p><h2>Un témoignage de restauration</h2>
        <p>Le mouvement s’inscrit dans le témoignage de son fondateur, le missionnaire évangéliste Nzukam Tchapdeu Divin Hans. La restauration et l’espérance traversent les enseignements proposés par HESED.</p>
        <p>Avec Jeunesse HESED, le mouvement applique aussi cette conviction dans son programme de visites auprès des enfants en orphelinat.</p>
        <Link className="button outline" href="/nos-actions">Découvrir nos actions ↗</Link>
      </div>
      <Verse verse={verses.love} />
    </section>
  </>;
}
