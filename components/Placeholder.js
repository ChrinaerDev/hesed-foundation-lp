// Emplacement d'image avec une lueur verte.
// Remplacez-le par une vraie image quand elle sera disponible.
const icons = {
  photo: <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="9" width="38" height="30" rx="4" /><circle cx="17" cy="20" r="3.5" /><path d="M5 34l11-9 8 7 6-5 13 10" /></svg>,
  person: <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="24" cy="17" r="7" /><path d="M9 41c1.5-8 8-12 15-12s13.5 4 15 12" /></svg>,
};

export default function Placeholder({ variant = "photo", label, ratio, mark, fill = false, className = "" }) {
  const classes = ["ph", `ph-${variant}`, fill ? "ph-fill" : "", className].filter(Boolean).join(" ");
  const showLabel = label && variant !== "avatar";
  return <div className={classes} style={ratio ? { aspectRatio: ratio } : undefined} role="img" aria-label={label || "Emplacement d’image"}>
    <span className="ph-glow" aria-hidden="true" />
    <span className="ph-inner" aria-hidden="true">
      {mark ? <span className="ph-mark" lang="he" dir="rtl">{mark}</span> : icons[variant === "photo" ? "photo" : "person"]}
      {showLabel && <span className="ph-label">{label}</span>}
    </span>
  </div>;
}
