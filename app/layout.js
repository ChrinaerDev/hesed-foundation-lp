import Link from "next/link";
import "@fontsource-variable/manrope";
import "@fontsource-variable/cormorant-garamond";
import "./style.css";

export const metadata = {
  title: { default: "HESED · Le cœur de Dieu sur terre", template: "%s · HESED" },
  description: "Découvrez le Mouvement HESED, ses enseignements et ses actions auprès des enfants au Cameroun.",
  icons: { icon: "/mark.svg" },
};

export function Brand() {
  return <Link href="/" className="brand" aria-label="HESED, accueil">
    <span className="brand-mark" lang="he" dir="rtl" aria-hidden="true">חסד</span><span>HESED</span>
  </Link>;
}

export default function Layout({children}) {
  return <html lang="fr"><body>
    <a className="skip" href="#contenu">Aller au contenu</a>
    <header className="header"><div className="shell nav">
      <Brand />
      <nav aria-label="Navigation principale">
        <Link href="/a-propos">À propos</Link><Link href="/nos-actions">Nos actions</Link><Link href="/actualites">Actualités</Link>
      </nav>
      <Link className="button give" href="/don">Faire un don <span aria-hidden="true">↗</span></Link>
    </div></header>
    <main id="contenu">{children}</main>
    <footer className="footer"><div className="shell footer-inner">
      <div><Brand /><p>Le cœur de Dieu sur terre</p></div>
      <span>Bafoussam · Cameroun</span>
      <Link href="/actualites">Lire les actualités ↗</Link>
    </div></footer>
  </body></html>;
}
