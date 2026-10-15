"use client";

import { useState } from "react";

const links = [
  ["#shop", "Shop"],
  ["#collections", "Collections"],
  ["#occasions", "Occasions"],
  ["#custom", "Custom"],
  ["#contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="bar">
        <a className="logo" href="#top" aria-label="The Art of Gifting, home">
          <span className="mono">TAG</span>
          <span>
            <b>The Art of</b>
            <small>Gifting</small>
          </span>
        </a>
        <button className="menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen((o) => !o)}>
          Menu
        </button>
        <nav id="nav" className={open ? "open" : ""} onClick={(e) => (e.target as HTMLElement).tagName === "A" && setOpen(false)}>
          {links.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
