import { articles } from "../../lib/content";
import { ArticleGrid } from "../../components/Editorial";
export const metadata = { title: "Actualités" };

export default function News() {
  return <><div className="subhero"><div className="shell"><p className="eyebrow">Le journal de HESED</p><h1>Actualités et enseignements</h1><p>Méditations bibliques et annonces du mouvement.</p></div></div>
    <section className="shell section" aria-label="Publications"><ArticleGrid articles={articles} /></section></>;
}
