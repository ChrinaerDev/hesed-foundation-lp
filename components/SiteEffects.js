"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Barre de progression, en-tête dynamique, lumière qui suit le curseur
// et bouton de don flottant.
export default function SiteEffects() {
  const pathname = usePathname();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const bar = document.getElementById("progress");
    let ticking = false;

    function update() {
      ticking = false;
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      const y = window.scrollY;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      document.body.toggleAttribute("data-scrolled", y > 24);
      setShown(y > 520);
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    let moving = 0;
    function onMove(event) {
      const el = event.target.closest ? event.target.closest(".spot") : null;
      if (!el || moving) return;
      const { clientX, clientY } = event;
      moving = requestAnimationFrame(() => {
        moving = 0;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${clientX - rect.left}px`);
        el.style.setProperty("--my", `${clientY - rect.top}px`);
      });
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("pointermove", onMove);
    };
  }, [pathname]);

  const onDonationPage = pathname.startsWith("/don");

  return <>
    <div id="progress" className="progress" aria-hidden="true" />
    {!onDonationPage && <Link href="/don" className={`float-give${shown ? " on" : ""}`} tabIndex={shown ? 0 : -1} aria-hidden={shown ? undefined : "true"}>
      <span className="heart" aria-hidden="true">♥</span> Faire un don
    </Link>}
  </>;
}
