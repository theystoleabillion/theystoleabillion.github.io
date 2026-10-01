import Image from "next/image";
import { Play, ArrowUpRight } from "lucide-react";
import { ActionLink } from "@/packages/ui/ActionLink";
import { MediaEmbed } from "@/packages/ui/MediaEmbed";
import { SectionHeading } from "@/packages/ui/SectionHeading";
import { socialLinks, videos } from "./band-content";

export function VideoSection() {
  return (
    <section
      id="videos"
      className="video-section section"
      aria-labelledby="videos-title"
    >
      <div className="container">
        <SectionHeading
          number="02"
          label="Bild & Ton"
          title={
            <span id="videos-title">
              PRESS <span className="accent">PLAY.</span>
            </span>
          }
        >
          <ActionLink
            href={socialLinks.youtube}
            variant="text"
            target="_blank"
            rel="noreferrer"
          >
            Zum YouTube-Kanal
          </ActionLink>
        </SectionHeading>
        <div className="video-grid">
          {videos.map((video) => (
            <article className="video-card" key={video.id}>
              <MediaEmbed
                title={`YouTube: ${video.title}`}
                src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                className="youtube-embed"
                buttonLabel={`${video.title} abspielen und YouTube laden`}
              >
                <Image
                  src={video.thumbnail}
                  alt=""
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
                <span className="video-tint" />
                <span className="video-category eyebrow">{video.category}</span>
                <span className="video-play">
                  <Play size={26} fill="currentColor" aria-hidden="true" />
                </span>
                <span className="video-duration">{video.duration}</span>
              </MediaEmbed>
              <a
                className="video-caption"
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{video.title}</h3>
                <ArrowUpRight size={21} />
              </a>
            </article>
          ))}
        </div>
        <p className="embed-notice">
          Ein Klick auf Play lädt das Video von YouTube.
        </p>
      </div>
    </section>
  );
}
