import Builder from "@/components/Builder";
import Collections from "@/components/Collections";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Occasions from "@/components/Occasions";
import Shop from "@/components/Shop";
import { INSTAGRAM_DM_URL } from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <hr className="divider" />
      <div className="wrap"><Shop /></div>
      <div className="band"><div className="wrap"><Collections /></div></div>
      <div className="wrap"><Occasions /></div>
      <div className="band"><div className="wrap"><Builder /></div></div>
      <div className="wrap"><Footer /></div>
      <a className="btn wa" href={INSTAGRAM_DM_URL} target="_blank" rel="noopener noreferrer">Order on Instagram</a>
    </>
  );
}
