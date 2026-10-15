import type { Metadata, Viewport } from "next";
import { Italiana, Jost } from "next/font/google";
import "./globals.css";

const italiana = Italiana({ weight: "400", subsets: ["latin"], variable: "--font-italiana" });
const jost = Jost({ weight: ["300", "400", "500"], subsets: ["latin"], variable: "--font-jost" });

export const metadata: Metadata = {
  title: "The Art of Gifting",
  description: "Invitations, favours and hampers made by hand, customised to your budget. Goa, shipping across India.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${italiana.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
