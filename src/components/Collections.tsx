"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { collections, tones } from "@/data/site";

export default function Collections() {
  const [ci, setCi] = useState(0);
  const [part, setPart] = useState(0);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 1800);
    return () => clearTimeout(t);
  }, [toast]);

  const c = collections[ci];
  const [c1, c2] = tones[c.tone];

  return (
    <section id="collections">
      <div className="head">
        <div>
          <span className="eyebrow">Collections</span>
          <h2>A story for every celebration</h2>
        </div>
        <p>Pick a collection to see how an invite, favour and hamper come together as one set.</p>
      </div>
      <div className="switch" role="tablist" aria-label="Collection">
        {collections.map((x, i) => (
          <button
            key={x.name}
            className="sw"
            role="tab"
            style={{ "--c": x.color } as React.CSSProperties}
            aria-selected={ci === i}
            onClick={() => { setCi(i); setPart(0); }}
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
          <div className="chips">
            {c.parts.map((p, j) => (
              <button key={p} className="chip" aria-pressed={part === j} onClick={() => { setPart(j); setToast(`${p} selected (mockup)`); }}>{p}</button>
            ))}
          </div>
          <a className="link" href="#custom">Enquire about this</a>
        </div>
      </div>
      {toast && <div className="toast" role="status">{toast}</div>}
    </section>
  );
}
