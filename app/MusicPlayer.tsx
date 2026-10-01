"use client";

import Image from "next/image";
import { ArrowUpRight, Disc3, Music2, Play } from "lucide-react";
import { create } from "zustand";
import { MediaEmbed } from "@/packages/ui/MediaEmbed";
import type { Release } from "./band-content";

const artistId = "5gJmKZQyyzXrOCwOproVI9";
const useReleaseStore = create<{
  selectedId: string;
  selectRelease: (id: string) => void;
}>((set) => ({
  selectedId: artistId,
  selectRelease: (selectedId) => set({ selectedId }),
}));

export function MusicPlayer({ releases }: { releases: Release[] }) {
  const selectedId = useReleaseStore((state) => state.selectedId);
  const selectRelease = useReleaseStore((state) => state.selectRelease);
  const selectedRelease = releases.find(
    (release) => release.spotifyId === selectedId,
  );
  const release = selectedRelease ?? releases[0];
  const entity = selectedRelease ? "album" : "artist";
  const title = selectedRelease?.title ?? "They Stole A Billion – Alle Songs";
  const previewTracks = selectedRelease?.tracks ?? [
    releases[1].tracks[0],
    ...releases[0].tracks.slice(0, 3),
  ];

  return (
    <div className="music-player">
      <div
        className="player-tabs"
        role="group"
        aria-label="Spotify-Musik auswählen"
      >
        <button
          type="button"
          aria-pressed={selectedId === artistId}
          onClick={() => selectRelease(artistId)}
        >
          Alle Songs
        </button>
        {releases.map((album) => (
          <button
            type="button"
            key={album.spotifyId}
            aria-pressed={selectedId === album.spotifyId}
            onClick={() => selectRelease(album.spotifyId)}
          >
            {album.title}
          </button>
        ))}
      </div>
      <MediaEmbed
        title={`Spotify: ${title}`}
        src={`https://open.spotify.com/embed/${entity}/${selectedId}?theme=0`}
        className="spotify-embed"
        buttonLabel={`${title} im Spotify-Player laden`}
      >
        <span className="spotify-preview-heading">
          <Image
            src={selectedRelease?.cover ?? "/images/band.jpg"}
            alt=""
            width={64}
            height={64}
          />
          <span>
            <span className="eyebrow">
              {selectedRelease
                ? `EP / ${release.year}`
                : "Spotify / Top Tracks"}
            </span>
            <strong>{selectedRelease?.title ?? "They Stole A Billion"}</strong>
            <span>
              {selectedRelease ? "They Stole A Billion" : "Alle Songs der Band"}
            </span>
          </span>
          <Music2 size={25} aria-hidden="true" />
        </span>
        <span className="preview-tracks">
          {previewTracks.map((track, index) => (
            <span className="preview-track" key={track.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{track.title}</strong>
              <span>{track.duration}</span>
            </span>
          ))}
        </span>
        <span className="load-spotify">
          <span>
            <Play size={15} fill="currentColor" /> Spotify-Player laden
          </span>
          <Disc3 size={21} />
        </span>
      </MediaEmbed>
      <div className="player-footnote">
        <p>Mit dem Laden verbindest du dich mit Spotify.</p>
        <a
          href={`https://open.spotify.com/${entity}/${selectedId}`}
          target="_blank"
          rel="noreferrer"
        >
          Auf Spotify öffnen <ArrowUpRight size={13} />
        </a>
      </div>
    </div>
  );
}
