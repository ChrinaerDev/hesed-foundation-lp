import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import Placeholder from "./Placeholder";

export function ArticleGrid({ articles }) {
  return <div className="article-grid">{articles.map((article, i) => (
    <Reveal as="article" delay={(i % 3) * 110} className="article-card spot" key={article.slug}>
      <Link href={`/actualites/${article.slug}`} className="article-link">
        <div className="article-art">
          {article.image
            ? <Image src={article.image} alt="" fill sizes="(max-width: 650px) 100vw, 33vw" />
            : <Placeholder fill mark="חֶסֶד" label="Visuel à venir" />}
        </div>
        <div className="article-copy">
          <p className="eyebrow">{article.type} {article.date && <span>· {article.date}</span>}</p>
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
          <span className="read">Lire <span aria-hidden="true">↗</span></span>
        </div>
      </Link>
    </Reveal>
  ))}</div>;
}
