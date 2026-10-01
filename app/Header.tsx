import Image from "next/image";
import { Instagram, Music2, Youtube } from "lucide-react";
import { socialLinks } from "./band-content";
import { MobileNavigation } from "./MobileNavigation";

const navigation = [
  { href: "#musik", label: "Musik" },
  { href: "#videos", label: "Videos" },
  { href: "#band", label: "Die Band" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner container">
        <a
          href="#"
          className="brand"
          aria-label="They Stole A Billion – Startseite"
        >
          <Image
            src="/images/band-logo.jpg"
            width={48}
            height={48}
            alt=""
            className="brand-symbol"
          />
          <span>
            THEY STOLE
            <br />A BILLION<span className="brand-dot">.</span>
          </span>
        </a>
        <nav className="desktop-navigation" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-socials">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={19} />
          </a>
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <Youtube size={21} />
          </a>
          <a
            href={socialLinks.spotify}
            target="_blank"
            rel="noreferrer"
            aria-label="Spotify"
          >
            <Music2 size={19} />
          </a>
        </div>
        <MobileNavigation links={navigation} />
      </div>
    </header>
  );
}
