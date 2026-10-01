import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin, Play } from "lucide-react";
import { ActionLink } from "@/packages/ui/ActionLink";
import { releases } from "./band-content";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-photo">
        <Image
          src="/images/band.jpg"
          alt="Die vier Mitglieder von They Stole A Billion"
          fill
          priority
          sizes="(max-width: 760px) 100vw, 65vw"
        />
      </div>
      <div className="hero-shade" />
      <div className="hero-content container">
        <p className="eyebrow hero-eyebrow">
          <span className="status-dot" /> Groove Metal aus Ravensburg
        </p>
        <h1 id="hero-title">
          THEY STOLE
          <br />A <span>BILLION.</span>
        </h1>
        <p className="hero-description">
          Schwere Riffs. Rohe Energie. Unser Sound.
          <br />
          Groove Metal trifft auf Thrash und Hardcore.
        </p>
        <div className="hero-actions">
          <ActionLink href="#musik">Musik hören</ActionLink>
          <a href="#videos" className="video-link">
            <span>
              <Play size={15} fill="currentColor" />
            </span>{" "}
            Videos ansehen
          </a>
        </div>
      </div>
      <a
        href={`https://open.spotify.com/album/${releases[0].spotifyId}`}
        className="hero-release"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/images/resurgence.jpg"
          alt="Cover der EP Resurgence"
          width={60}
          height={60}
        />
        <span>
          <span className="eyebrow">Neue EP / 2026</span>
          <strong>RESURGENCE</strong>
        </span>
        <ArrowUpRight size={24} />
      </a>
      <div className="hero-bottom container">
        <a href="#musik" className="scroll-link">
          <ArrowDown size={17} /> Entdecke den Sound
        </a>
        <span>
          <MapPin size={13} /> Ravensburg, DE{" "}
          <span className="hero-divider">/</span> Est. 2018
        </span>
      </div>
    </section>
  );
}
