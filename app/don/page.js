import Link from "next/link";
import DonationForm from "../../components/DonationForm";

export const metadata = { title: "Faire un don" };

export default function Donate() {
  return <><div className="subhero donation-title"><div className="shell"><p className="eyebrow">Soutenir Jeunesse HESED</p><h1>Faire un don</h1><p>Aidez HESED à préparer ses visites et son soutien matériel aux enfants en orphelinat.</p></div></div>
    <section className="shell section donation-grid" aria-label="Don et utilisation des fonds">
      <DonationForm />
      <aside className="cause">
        <div className="cause-art" aria-hidden="true"><span lang="he" dir="rtl">חֶסֶד</span><span></span></div>
        <div className="cause-copy"><p className="eyebrow">Jeunesse HESED</p><h2>À quoi servira votre don ?</h2><p>Le programme prévoit des visites, des activités éducatives et des apports matériels comme des kits scolaires, des vêtements et de la nourriture.</p><Link className="read" href="/nos-actions">En savoir plus sur les visites ↗</Link></div>
      </aside>
    </section></>;
}
