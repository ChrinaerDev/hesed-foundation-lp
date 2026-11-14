import Verse from "../../../components/Verse";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "../../../lib/content";
import Placeholder from "../../../components/Placeholder";
import DonateBand from "../../../components/DonateBand";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  return article ? { title: article.title, description: article.summary } : {};
}

export default async function Article({ params }) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();

  return <article><header className="subhero spot"><div className="shell">
    <p className="eyebrow">{article.type}{article.date && ` · ${article.date}`}</p><h1>{article.title}</h1><p>{article.summary}</p>
  </div></header>
    <div className="shell prose section">
      {!article.image && <Placeholder ratio="16/9" mark="חֶסֶד" label="Image de couverture · à venir" className="cover-ph" />}
      {article.verse && <Verse verse={article.verse} />}
      {article.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      {article.image && <Image className="poster" src={article.image} width={480} height={720} alt={`Affiche HESED · ${article.title}`} />}
      <Link className="read" href="/actualites">← Toutes les actualités</Link>
    </div>
    <DonateBand compact />
  </article>;
}

