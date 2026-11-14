"use client";

import { useEffect, useState } from "react";

const amounts = [2500, 5000, 10000, 25000];
const currency = new Intl.NumberFormat("fr-CM", { style: "currency", currency: "XAF", maximumFractionDigits: 0 });

export default function DonationForm() {
  const [amount, setAmount] = useState("5000");
  const [review, setReview] = useState(false);

  // Un lien comme /don?montant=10000 pré-remplit le montant.
  useEffect(() => {
    const preset = new URLSearchParams(window.location.search).get("montant");
    if (preset && /^\d+$/.test(preset) && Number(preset) > 0) setAmount(preset);
  }, []);

  function reviewAmount(event) {
    event.preventDefault();
    if (Number.isSafeInteger(Number(amount)) && Number(amount) > 0) setReview(true);
  }

  return <div className="donation-form">
    <div className="form-head"><span>{review ? "Vérifier le montant" : "Choisir un montant"}</span><span aria-hidden="true">{review ? "○ ●" : "● ○"}</span></div>
    {review ? <div className="form-body step">
      <p className="eyebrow">Don ponctuel · Aperçu</p>
      <p className="thanks"><span aria-hidden="true">♥</span> Merci pour votre générosité</p>
      <p className="total">{currency.format(Number(amount))}</p>
      <p className="form-note" role="status">Le paiement en ligne sera disponible après l’activation du service de paiement.</p>
      <button className="button outline full" onClick={() => setReview(false)}>← Modifier le montant</button>
    </div> : <form className="form-body step" onSubmit={reviewAmount}>
      <fieldset><legend>Don ponctuel · FCFA (XAF)</legend>
        <div className="amounts">{amounts.map(value => <button type="button" key={value} aria-pressed={Number(amount) === value} onClick={() => setAmount(String(value))}>{value.toLocaleString("fr-FR")}</button>)}</div>
        <label htmlFor="amount">Montant du don (FCFA)</label>
        <input id="amount" type="number" min="1" max={Number.MAX_SAFE_INTEGER} step="1" required inputMode="numeric" value={amount} onChange={event => setAmount(event.target.value)} />
      </fieldset>
      <button className="button give big pulse full" type="submit">Vérifier le montant →</button>
      <p className="form-note">Aperçu du parcours de don. Le paiement en ligne arrive prochainement.</p>
    </form>}
  </div>;
}
