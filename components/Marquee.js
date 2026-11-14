const words = ["Initiative", "Engagement", "Pardon", "Fidélité", "Protection", "Grâce", "Vérité", "Compassion", "Provision", "Restauration", "Gratitude", "Amour éternel"];

export default function Marquee() {
  const row = words.map(word => <span key={word}>{word}<b aria-hidden="true">✦</b></span>);
  return <div className="marquee" aria-hidden="true">
    <div className="marquee-track"><div>{row}</div><div>{row}</div></div>
  </div>;
}
