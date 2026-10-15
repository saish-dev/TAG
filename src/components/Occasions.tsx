const items = [
  ["Weddings", "Invites, welcome hampers, return favours and trousseau baskets that carry one design through the whole celebration."],
  ["Corporate", "Festive hampers and branded gifts in bulk, with clear lead times and a catalogue you can forward to your team."],
  ["Events", "Baby showers, engagements, anniversaries and milestone birthdays, sized to your guest list."],
];

export default function Occasions() {
  return (
    <section id="occasions">
      <div className="head">
        <div>
          <span className="eyebrow">Made for</span>
          <h2>Every occasion that needs a gift</h2>
        </div>
      </div>
      <div className="occ">
        {items.map(([h, p]) => (
          <div key={h}><h3>{h}</h3><p>{p}</p></div>
        ))}
      </div>
    </section>
  );
}
