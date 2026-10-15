"use client";

import Image from "next/image";
import { useState } from "react";
import { SHOW_PRICES, inr, products, tones } from "@/data/site";

type Kind = keyof typeof products;
const kinds = Object.keys(products) as Kind[];

export default function Shop() {
  const [tab, setTab] = useState<Kind>("Invites");
  return (
    <section id="shop">
      <div className="head">
        <div>
          <span className="eyebrow">Shop by kind</span>
          <h2>Three ways to say it</h2>
        </div>
        <div className="tabs" role="tablist" aria-label="Gift type">
          {kinds.map((k) => (
            <button key={k} className="tab" role="tab" aria-selected={tab === k} onClick={() => setTab(k)}>{k}</button>
          ))}
        </div>
      </div>
      <div className="grid" role="tabpanel">
        {products[tab].map((p) => {
          const [c1, c2] = tones[p.tone];
          return (
            <article className="card" key={p.name}>
              <div className={`ph${p.image ? " has-img" : ""}`} style={{ "--ph1": c1, "--ph2": c2 } as React.CSSProperties}>
                {p.image ? (
                  <Image unoptimized src={p.image} alt={p.name} fill sizes="(max-width:820px) 100vw, 330px" />
                ) : (
                  <span><i>{p.name}</i>Product photo</span>
                )}
              </div>
              <div>
                <h3>{p.name}</h3>
                <p className="sub">{p.desc}</p>
                <div className="from">{SHOW_PRICES && p.from ? `From ${inr(p.from)}` : "Price on enquiry"}</div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
