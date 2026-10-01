import { Asterisk } from "lucide-react";

export function GenreStrip() {
  return (
    <div
      className="genre-strip"
      aria-label="Groove Metal, Thrash, Hardcore, seit 2018"
    >
      <div className="genre-strip-inner" aria-hidden="true">
        {[
          "GROOVE METAL",
          "THRASH",
          "HARDCORE",
          "HEAVY SINCE 2018",
          "GROOVE METAL",
          "THRASH",
        ].map((genre, index) => (
          <span key={`${genre}-${index}`}>
            {genre}
            <Asterisk size={30} strokeWidth={1.5} />
          </span>
        ))}
      </div>
    </div>
  );
}
