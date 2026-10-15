"use client";

import Image from "next/image";
import { useState } from "react";
import { collections, tones } from "@/data/site";

export default function Collections() {
  const [ci, setCi] = useState(0);
  const c = collections[ci];
  const [c1, c2] = tones[c.tone];

  return (
    <section id="collections">
      <div className="head">
        <div>
          <span className="eyebrow">Collections</span>
          <h2>A story for every celebration</h2>
        </div>
        <p>Browse every piece in the studio, one story at a time.</p>
      </div>
      <div className="switch" role="tablist" aria-label="Collection">
        {collections.map((x, i) => (
          <button
            key={x.name}
            className="sw"
            role="tab"
            style={{ "--c": x.color } as React.CSSProperties}
            aria-selected={ci === i}
            onClick={() => setCi(i)}
          >
            <i />{x.name}
          </button>
        ))}
      </div>
      <div className="coll">
        <div className="ph has-img" style={{ "--ph1": c1, "--ph2": c2 } as React.CSSProperties}>
          <Image unoptimized src={c.image} alt={c.name} fill sizes="(max-width:820px) 100vw, 500px" />
        </div>
        <div className="copy">
          <span className="eyebrow">{c.kind}</span>
          <h3>{c.name}</h3>
          <p>{c.story}</p>
          <div>
            <span className="eyebrow">Perfect for</span>
            <div className="chips" style={{ marginTop: 10 }}>
              {c.perfectFor.map((p) => (
                <span key={p} className="chip tag">{p}</span>
              ))}
            </div>
          </div>
          <a className="link" href="#custom">Enquire about this</a>
        </div>
      </div>
    </section>
  );
}
