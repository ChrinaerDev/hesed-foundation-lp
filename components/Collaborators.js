"use client";

import { useRef } from "react";
import { collaborators } from "../lib/content";

export default function Collaborators() {
  const track = useRef(null);
  function move(direction) {
    const firstCard = track.current.firstElementChild;
    if (firstCard) track.current.scrollBy({ left: direction * (firstCard.offsetWidth + 16) });
  }

  return <section className="section shell" aria-labelledby="collaborateurs">
    <div className="section-head">
      <div><p className="eyebrow">Le mouvement</p><h2 id="collaborateurs">Nos collaborateurs</h2></div>
      <div className="arrows">
        <button type="button" aria-label="Profils précédents" onClick={() => move(-1)}>←</button>
        <button type="button" aria-label="Profils suivants" onClick={() => move(1)}>→</button>
      </div>
    </div>
    <ul className="profiles" ref={track} tabIndex={0} aria-label="Profils des collaborateurs">
      {collaborators.map(({image, name, role}) => <li key={name}>
        {image ? <img className="avatar" src={image} alt="" loading="lazy" /> :
          <span className="avatar initials" aria-hidden="true">{name.split(" ").slice(0, 2).map(word => word[0]).join("")}</span>}
        <h3>{name}</h3><p>{role}</p>
      </li>)}
    </ul>
  </section>;
}
