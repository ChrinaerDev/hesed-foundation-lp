import { articles } from "../../lib/content";
import { ArticleGrid } from "../../components/Editorial";
import Particles from "../../components/Particles";
import DonateBand from "../../components/DonateBand";
export const metadata = { title: "Actualités" };

export default function News() {
  return <><div className="subhero spot"><Particles count={12} /><div className="shell"><p className="eyebrow">Le journal de HESED</p><h1>Actualités et enseignements</h1><p>Méditations bibliques et annonces du mouvement.</p></div></div>
    <section className="shell section" aria-label="Publications"><ArticleGrid articles={articles} /></section>
    <DonateBand compact /></>;
}
