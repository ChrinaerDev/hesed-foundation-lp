import Link from "next/link";
import DonationForm from "../../components/DonationForm";
import Placeholder from "../../components/Placeholder";
import Reveal from "../../components/Reveal";
import Impact from "../../components/Impact";
import Particles from "../../components/Particles";

export const metadata = { title: "Faire un don" };

export default function Donate() {
  return <><div className="subhero donation-title spot"><Particles count={14} /><div className="shell"><p className="eyebrow">Soutenir Jeunesse HESED</p><h1>Faire un don</h1><p>Aidez HESED à préparer ses visites et son soutien matériel aux enfants en orphelinat.</p></div></div>
    <section className="shell section donation-grid" aria-label="Don et utilisation des fonds">
      <Reveal><DonationForm /></Reveal>
      <Reveal delay={150} as="aside" className="cause">
        <Placeholder ratio="16/9" mark="חֶסֶד" label="Photo des enfants · à venir" className="cause-ph" />
        <div className="cause-copy"><p className="eyebrow">Jeunesse HESED</p><h2>À quoi servira votre don ?</h2><p>Le programme prévoit des visites, des activités éducatives et des apports matériels comme des kits scolaires, des vêtements et de la nourriture.</p><Link className="read" href="/nos-actions">En savoir plus sur les visites ↗</Link></div>
      </Reveal>
    </section>
    <Impact title="Ce que votre don rend possible" /></>;
}
