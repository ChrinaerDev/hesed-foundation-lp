// Poussières de lumière qui montent doucement. Valeurs déterministes (pas de hasard).
// `center` concentre les grains au milieu (autour de la croix).
export default function Particles({ count = 22, className = "", center = false }) {
  return <div className={`particles ${className}`.trim()} aria-hidden="true">
    {Array.from({ length: count }, (_, i) => {
      const base = (i * 37 + 11) % 100;
      return <i key={i} style={{
        left: `${center ? 18 + base * 0.64 : base}%`,
        width: 2 + ((i * 7) % 5),
        height: 2 + ((i * 7) % 5),
        "--dx": `${((i * 13) % 56) - 28}px`,
        animationDuration: `${9 + ((i * 5) % 11)}s`,
        animationDelay: `-${(i * 3) % 13}s`,
      }} />;
    })}
  </div>;
}
