import Image from "next/image";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-top">
        <a href="#" className="footer-brand">
          <Image
            src="/images/band-logo.jpg"
            alt=""
            width={36}
            height={36}
            className="brand-symbol"
          />
          THEY STOLE A BILLION.
        </a>
        <a href="#" className="back-to-top" aria-label="Zurück nach oben">
          <ArrowUp size={18} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} They Stole A Billion</span>
        <span>Made of riffs. Built for the pit.</span>
        <details className="privacy-details">
          <summary>Externe Medien & Datenschutz</summary>
          <p>
            Diese Seite lädt Bilder und Schriftarten lokal. Spotify und YouTube
            werden erst nach deinem Klick auf den jeweiligen Player eingebunden.
            Dabei wird eine Verbindung zum Anbieter hergestellt, der unter
            anderem deine IP-Adresse erhält. YouTube verwendet die Domain
            youtube-nocookie.com. Alternativ kannst du die Musik und Videos über
            die direkten Links öffnen. Die Freigabe wird nur für die aktuelle
            Sitzung gespeichert.
          </p>
        </details>
      </div>
    </footer>
  );
}
