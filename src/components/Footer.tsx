import { INSTAGRAM_DM_URL, INSTAGRAM_HANDLE } from "@/data/site";

export default function Footer() {
  return (
    <footer id="contact">
      <div>
        <div className="big">The Art of Gifting</div>
        <p>For gifts that deserve to be remembered.</p>
        <p>Customised to your budget.</p>
      </div>
      <div>
        <h4>Studio</h4>
        <p>Goa, shipping across India</p>
        <p>Orders open 6&ndash;8 weeks before your date</p>
      </div>
      <div>
        <h4>Say hello</h4>
        <p>All orders are taken on Instagram</p>
        <p><a href={INSTAGRAM_DM_URL} target="_blank" rel="noopener noreferrer">DM @{INSTAGRAM_HANDLE}</a></p>
      </div>
    </footer>
  );
}
