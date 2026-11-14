import Link from "next/link";
import Reveal from "./Reveal";

const svg = { viewBox: "0 0 24 24", width: 26, height: 26, fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" };

const items = [
  ["Kits scolaires", "Des fournitures utiles à la scolarité, selon les besoins identifiés par les structures.",
    <svg key="a" {...svg}><path d="M4 5.5A2.5 2.5 0 016.5 3H20v16H6.5A2.5 2.5 0 004 21.5z" /><path d="M4 21.5A2.5 2.5 0 016.5 19H20" /></svg>],
  ["Vêtements", "Un soutien matériel adapté aux besoins communiqués par les équipes sur place.",
    <svg key="b" {...svg}><path d="M8 3L3 6l2 4 3-1v12h8V9l3 1 2-4-5-3a4 4 0 01-8 0z" /></svg>],
  ["Nourriture", "De quoi partager un repas lors des visites et répondre aux besoins du moment.",
    <svg key="c" {...svg}><path d="M3 11h18a9 9 0 01-18 0z" /><path d="M8 7c0-1.5 1-1.5 1-3M12 7c0-1.5 1-1.5 1-3M16 7c0-1.5 1-1.5 1-3" /></svg>],
];

export default function Impact({ title = "Votre don soutient", eyebrow = "Jeunesse HESED" }) {
  return <section className="section shell">
    <Reveal><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></Reveal>
    <div className="impact-grid">
      {items.map(([name, text, icon], i) => <Reveal key={name} delay={i * 110} className="impact-card spot">
        <span className="impact-icon">{icon}</span>
        <h3>{name}</h3>
        <p>{text}</p>
        <Link className="read" href="/don">Soutenir ↗</Link>
      </Reveal>)}
    </div>
  </section>;
}
