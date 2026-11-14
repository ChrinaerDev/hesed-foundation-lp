"use client";

import { useRef } from "react";
import { collaborators } from "../lib/content";
import Reveal from "./Reveal";
import Placeholder from "./Placeholder";

export default function Collaborators() {
  const track = useRef(null);
  function move(direction) {
    const firstCard = track.current.firstElementChild;
    if (firstCard) track.current.scrollBy({ left: direction * (firstCard.offsetWidth + 16) });
  }

  return <section className="section shell" aria-labelledby="collaborateurs">
    <Reveal className="section-head">
      <div><p className="eyebrow">Le mouvement</p><h2 id="collaborateurs">Nos collaborateurs</h2></div>
      <div className="arrows">
        <button type="button" aria-label="Profils précédents" onClick={() => move(-1)}>←</button>
        <button type="button" aria-label="Profils suivants" onClick={() => move(1)}>→</button>
      </div>
    </Reveal>
    <ul className="profiles" ref={track} tabIndex={0} aria-label="Profils des collaborateurs">
      {collaborators.map(({image, name, role}) => <li key={name} className="spot">
        {image ? <img className="avatar" src={image} alt="" loading="lazy" /> :
          <Placeholder variant="avatar" label={`Photo de ${name} · à venir`} />}
        <h3>{name}</h3><p>{role}</p>
      </li>)}
    </ul>
  </section>;
}
