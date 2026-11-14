import Link from "next/link";
import Verse from "../../components/Verse";
import { verses } from "../../lib/verses";

export const metadata = { title: "Nos actions" };

const activities = [
  ["Présence et écoute", "Prendre le temps de rencontrer les enfants, de les écouter et de partager un moment avec eux."],
  ["Prière et encouragement", "Proposer des temps de prière et de chant dans le cadre convenu avec les équipes qui accueillent les visites."],
  ["Jeux et apprentissage", "Préparer des jeux collectifs, des ateliers et, selon les besoins, des moments d’aide aux devoirs."],
  ["Kits scolaires", "Prévoir des fournitures utiles à la scolarité, en fonction des besoins identifiés par les structures."],
  ["Nourriture et vêtements", "Apporter un soutien matériel adapté aux besoins communiqués par les équipes sur place."],
  ["Enseignements et rencontres", "Prolonger la réflexion sur la foi et l’amour fidèle à travers des lectures bibliques et des rencontres en ligne."],
];

export default function Actions() {
  return <>
    <header className="subhero"><div className="shell"><p className="eyebrow">Jeunesse HESED</p><h1>Auprès des enfants</h1><p>Un programme de visites en orphelinat qui associe présence, activités et soutien matériel.</p></div></header>
    <section className="shell section feature-split">
      <div><p className="eyebrow">Le programme de visites</p><h2>Deux visites prévues par an</h2>
        <p>Le programme de Jeunesse HESED prévoit deux visites par an. Chaque rencontre se prépare autour des besoins de la structure, des activités adaptées aux enfants et du matériel à réunir.</p>
        <p>La visite est l’occasion de jouer, d’apprendre et d’écouter. Les dons matériels complètent ces moments partagés.</p>
      </div>
      <Verse verse={verses.serve} />
    </section>
    <section className="soft-band"><div className="shell section">
      <p className="eyebrow">Les activités du mouvement</p><h2>Comment HESED agit</h2>
      <div className="detail-grid">{activities.map(([title, description]) => <div className="detail-card" key={title}><h3>{title}</h3><p>{description}</p></div>)}</div>
    </div></section>
    <section className="mission-band"><div className="shell mission-inner">
      <div><p className="eyebrow">Soutenir le programme</p><h2>Participer aux prochaines visites</h2></div>
      <div><p>Les dons pourront contribuer à réunir les fournitures, les vêtements et la nourriture prévus pour les visites.</p><Link className="button give" href="/don">Faire un don ↗</Link></div>
    </div></section>
  </>;
}
