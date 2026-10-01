"use client";

import type { ReactNode } from "react";
import { create } from "zustand";

type EmbedStore = {
  activatedUrls: string[];
  activate: (url: string) => void;
};

const useEmbedStore = create<EmbedStore>((set) => ({
  activatedUrls: [],
  activate: (url) =>
    set((state) => ({
      activatedUrls: [...new Set([...state.activatedUrls, url])],
    })),
}));

type MediaEmbedProps = {
  title: string;
  src: string;
  className?: string;
  buttonLabel: string;
  children: ReactNode;
};

export function MediaEmbed({
  title,
  src,
  className = "",
  buttonLabel,
  children,
}: MediaEmbedProps) {
  const activated = useEmbedStore((state) => state.activatedUrls.includes(src));
  const activate = useEmbedStore((state) => state.activate);

  return (
    <div className={`media-embed ${className}`}>
      {activated ? (
        <iframe
          src={src}
          title={title}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          className="embed-preview"
          type="button"
          onClick={() => activate(src)}
          aria-label={buttonLabel}
        >
          {children}
        </button>
      )}
    </div>
  );
}
