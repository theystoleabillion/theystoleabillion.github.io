import { z } from "zod";

const releaseSchema = z.object({
  title: z.string().min(1),
  year: z.number().int(),
  spotifyId: z.string().regex(/^[A-Za-z0-9]{22}$/),
  cover: z.string().startsWith("/images/"),
  tracks: z.array(z.object({ title: z.string(), duration: z.string() })),
});

const videoSchema = z.object({
  id: z.string().regex(/^[A-Za-z0-9_-]{11}$/),
  title: z.string().min(1),
  category: z.string().min(1),
  duration: z.string(),
  thumbnail: z.string().startsWith("/images/"),
});

export const socialLinks = z
  .object({
    youtube: z.url(),
    spotify: z.url(),
    instagram: z.url(),
  })
  .parse({
    youtube: "https://www.youtube.com/@theystoleabillion5009",
    spotify: "https://open.spotify.com/artist/5gJmKZQyyzXrOCwOproVI9",
    instagram: "https://www.instagram.com/theystoleabillion/",
  });

export const releases = z.array(releaseSchema).parse([
  {
    title: "Resurgence",
    year: 2026,
    spotifyId: "4pLcYHwXvuMIcOBQNmxDSp",
    cover: "/images/resurgence.jpg",
    tracks: [
      { title: "Down", duration: "2:34" },
      { title: "See Through", duration: "3:31" },
      { title: "Now I Fly", duration: "2:41" },
      { title: "Carousel", duration: "2:06" },
    ],
  },
  {
    title: "They Stole A Billion",
    year: 2023,
    spotifyId: "5cpomxnB2EaiMB1J4D8A7O",
    cover: "/images/debut.jpg",
    tracks: [
      { title: "Beware The Henchmen", duration: "2:49" },
      { title: "Impurity", duration: "2:41" },
      { title: "Optimists / Pessimists", duration: "3:16" },
      { title: "A Nation’s Collapse", duration: "3:54" },
    ],
  },
]);

export const videos = z.array(videoSchema).parse([
  {
    id: "QFYehutCcow",
    title: "Beware The Henchmen",
    category: "Official music video",
    duration: "3:04",
    thumbnail: "/images/beware-the-henchmen.jpg",
  },
  {
    id: "1GH-CQO4huA",
    title: "First live performance",
    category: "Live session",
    duration: "9:29",
    thumbnail: "/images/first-live-performance.jpg",
  },
]);

export type Release = z.infer<typeof releaseSchema>;
export type BandVideo = z.infer<typeof videoSchema>;
