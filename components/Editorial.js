import Image from "next/image";
import Link from "next/link";

export function ArticleGrid({ articles }) {
  return <div className="article-grid">{articles.map(article => (
    <article className="article-card" key={article.slug}>
      <Link href={`/actualites/${article.slug}`} className="article-link">
        <div className={`article-art ${article.image ? "" : "letter-art"}`}>
          {article.image ? <Image src={article.image} alt="" fill sizes="(max-width: 650px) 100vw, 33vw" /> : article.artwork ? <span aria-hidden="true">{article.artwork}</span> : <span lang="he" dir="rtl">חֶסֶד</span>}
        </div>
        <div className="article-copy">
          <p className="eyebrow">{article.type} {article.date && <span>· {article.date}</span>}</p>
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
          <span className="read">Lire <span aria-hidden="true">↗</span></span>
        </div>
      </Link>
    </article>
  ))}</div>;
}

