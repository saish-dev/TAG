"use client";

import { useState } from "react";
import { SHOW_PRICES, inr, kindConfig, kinds, occasions, products, suggest, type Kind } from "@/data/site";

export default function Builder() {
  const [occ, setOcc] = useState("Wedding");
  const [kind, setKind] = useState<Kind>("Invites");
  const [qty, setQty] = useState(80);
  const [bud, setBud] = useState(kindConfig.Invites.start);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const nm = name.trim();
  const cfg = kindConfig[kind];
  const sug = suggest(kind, occ, bud);
  const unit = qty === 1 ? cfg.unit : cfg.units;
  const pickKind = (k: Kind) => { setKind(k); setBud(kindConfig[k].start); };
  const total = qty * sug.perGift;
  const names = SHOW_PRICES ? sug.picks.map((p) => p.name).join(" + ") : "";
  const text =
    `Hi! I’d like to plan ${kind.toLowerCase()} for a ${occ.toLowerCase()}. Around ${qty} ${unit}, budget ${inr(bud)} each (${inr(qty * bud)} total).` +
    (names ? ` I’m interested in: ${names}.` : "") +
    (nm ? ` Name: ${nm}.` : "");

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setMsg("Copied. Paste it into an Instagram DM to send.");
    } catch {
      setMsg("Copy blocked here. Select this text: " + text);
    }
  }

  return (
    <section id="custom" style={{ paddingBlock: 0 }}>
      <div className="builder">
        <div>
          <span className="eyebrow">Customised to your budget</span>
          <h2>Tell us the occasion. We will shape the rest.</h2>
          <div className="field">
            <div className="lab" id="kindLab">What are you looking for?</div>
            <div className="chips" role="group" aria-labelledby="kindLab">
              {kinds.map((k) => (
                <button key={k} className="chip" type="button" aria-pressed={kind === k} onClick={() => pickKind(k)}>{k}</button>
              ))}
            </div>
          </div>
          <div className="field">
            <div className="lab" id="occLab">Occasion</div>
            <div className="chips" role="group" aria-labelledby="occLab">
              {occasions.map((o) => (
                <button key={o} className="chip" type="button" aria-pressed={occ === o} onClick={() => setOcc(o)}>{o}</button>
              ))}
            </div>
          </div>
          <div className="field">
            <label htmlFor="qty">Number of {cfg.units} <output>{qty}</output></label>
            <input type="range" id="qty" min={1} max={500} step={1} value={qty} onChange={(e) => setQty(+e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="bud">Budget per {cfg.unit} <output>{inr(bud)}</output></label>
            <input type="range" id="bud" min={cfg.min} max={cfg.max} step={cfg.step} value={bud} onChange={(e) => setBud(+e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="nm">Your name</label>
            <input type="text" id="nm" placeholder="e.g. Sania & Clinton" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div className="result" aria-live="polite">
          <span className="eyebrow">{SHOW_PRICES ? "Suggested starting point" : "Your enquiry"}</span>
          <h3>{occ}: {qty} {unit}</h3>
          {!SHOW_PRICES ? (
            <>
              <div>
                <div className="row"><span>Budget per {cfg.unit}</span><span>{inr(bud)}</span></div>
                <div className="row"><span>Quantity</span><span>{qty}</span></div>
              </div>
              <div>
                <span className="note">Your total budget</span>
                <div className="total">{inr(qty * bud)}</div>
              </div>
              <p className="note">
                Our {kind.toLowerCase()}: {products[kind].filter((p) => !p.onlyFor || p.onlyFor === occ).map((p) => p.name).join(", ")}.
                Send us this enquiry and we will suggest what fits.
              </p>
            </>
          ) : sug.picks.length ? (
            <>
              <div>
                {sug.picks.map((p) => (
                  <div className="row" key={p.name}>
                    <span>{p.role}: {p.name}</span>
                    <span>{inr(p.price)} each</span>
                  </div>
                ))}
                {sug.leftover > 0 && (
                  <div className="row">
                    <span>Left of your budget</span>
                    <span>{inr(sug.leftover)} each</span>
                  </div>
                )}
              </div>
              {sug.alternatives.length > 0 && (
                <p className="note">
                  Also within budget: {sug.alternatives.map((a) => `${a.name} (${inr(a.price)})`).join(", ")}.
                </p>
              )}
              <div>
                <span className="note">Estimated total for {qty} {unit}</span>
                <div className="total">{inr(total)}</div>
                <span className="note">Your budget: {inr(qty * bud)}</span>
              </div>
            </>
          ) : (
            <p className="note">
              {inr(bud)} per {cfg.unit} is below our starting price for {kind.toLowerCase()}.
              {sug.shortfall && ` The closest option is ${sug.shortfall.name}, from ${inr(sug.shortfall.price)}. Raise the budget by ${inr(sug.shortfall.price - bud)} per ${cfg.unit} to start there.`}
            </p>
          )}
          <p className="note">{SHOW_PRICES ? "An estimate to start the conversation. The final quote depends on materials and design." : "Prices depend on materials, design and quantity. We will quote after your enquiry."}</p>
          <button className="btn" type="button" onClick={copy}>Copy enquiry</button>
          <p className="copied">{msg}</p>
        </div>
      </div>
    </section>
  );
}
