import { ArrowUpRight, Instagram, Music2, Youtube } from "lucide-react";
import { socialLinks } from "./band-content";

const platforms = [
  {
    title: "Instagram",
    subtitle: "Backstage. Bühne. Band.",
    href: socialLinks.instagram,
    Icon: Instagram,
  },
  {
    title: "YouTube",
    subtitle: "Unser Sound in Bildern.",
    href: socialLinks.youtube,
    Icon: Youtube,
  },
  {
    title: "Spotify",
    subtitle: "Alle Songs. Auf Repeat.",
    href: socialLinks.spotify,
    Icon: Music2,
  },
];

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="contact-section section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <p className="eyebrow">04 / Stay connected</p>
        <div className="contact-heading">
          <h2 id="contact-title">
            BLEIB <span>LAUT.</span>
          </h2>
          <p>
            Neue Musik, Live-Momente und alles dazwischen.
            <br />
            Folge uns. Wir sehen uns vor der Bühne.
          </p>
        </div>
        <div className="social-grid">
          {platforms.map(({ title, subtitle, href, Icon }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              key={title}
              className="social-card"
            >
              <Icon size={26} />
              <span>
                <strong>{title}</strong>
                <span>{subtitle}</span>
              </span>
              <ArrowUpRight size={23} />
            </a>
          ))}
        </div>
        <div className="booking-line">
          <span>Ihr wollt uns auf eurer Bühne?</span>
          <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
            Booking & Anfragen über Instagram <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
