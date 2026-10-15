"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides, tones } from "@/data/site";

export default function Hero() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % heroSlides.length), 4200);
    return () => clearInterval(t);
  }, [auto]);

  const slide = heroSlides[i];
  const [c1, c2] = tones[slide.tone];

  return (
    <main className="wrap" id="top">
      <div className="hero">
        <div>
          <span className="eyebrow">Wedding &middot; Corporate &middot; Events</span>
          <h1>For gifts that deserve to be <em>remembered.</em></h1>
          <p>Invitations, favours and hampers made by hand, shaped around your story and customised to your budget.</p>
          <div className="cta">
            <a className="btn" href="#custom">Plan my gifts</a>
            <a className="btn ghost" href="#collections">See collections</a>
          </div>
        </div>
        <button
          type="button"
          className="stage"
          aria-label={`Featured collection: ${slide.name}. Click for the next one.`}
          onClick={() => { setAuto(false); setI((n) => (n + 1) % heroSlides.length); }}
        >
          <div className="ph has-img" style={{ "--ph1": c1, "--ph2": c2 } as React.CSSProperties}>
            <Image key={slide.image} unoptimized src={slide.image} alt={slide.name} fill priority sizes="(max-width:820px) 380px, 480px" />
          </div>
        </button>
      </div>
    </main>
  );
}
