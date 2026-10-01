import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/packages/ui/SectionHeading";
import { releases } from "./band-content";
import { MusicPlayer } from "./MusicPlayer";

export function MusicSection() {
  return (
    <section
      id="musik"
      className="section music-section container"
      aria-labelledby="music-title"
    >
      <SectionHeading
        number="01"
        label="Der Sound"
        title={
          <span id="music-title">
            LAUTER. SCHWERER. <span className="accent">UNSER.</span>
          </span>
        }
      >
        <p>
          Kopfhörer auf. Lautstärke hoch.
          <br />
          Hier ist unser Sound.
        </p>
      </SectionHeading>
      <div className="music-layout">
        <div className="releases">
          {releases.map((release, index) => (
            <a
              className="release-card"
              href={`https://open.spotify.com/album/${release.spotifyId}`}
              target="_blank"
              rel="noreferrer"
              key={release.spotifyId}
            >
              <div className="release-artwork">
                <Image
                  src={release.cover}
                  alt={`Cover: ${release.title}`}
                  width={640}
                  height={640}
                  sizes="(max-width: 600px) 45vw, 300px"
                />
                {index === 0 && (
                  <span className="release-badge">LATEST RELEASE</span>
                )}
                <span className="release-overlay">
                  <ArrowUpRight size={34} />
                </span>
              </div>
              <div className="release-caption">
                <div>
                  <p className="eyebrow">EP / {release.year} / 4 Tracks</p>
                  <h3>{release.title}</h3>
                </div>
                <ArrowUpRight size={19} />
              </div>
            </a>
          ))}
        </div>
        <MusicPlayer releases={releases} />
      </div>
    </section>
  );
}
