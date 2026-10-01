import { BandSection } from "./BandSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { GenreStrip } from "./GenreStrip";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { MusicSection } from "./MusicSection";
import { VideoSection } from "./VideoSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <GenreStrip />
        <MusicSection />
        <VideoSection />
        <BandSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
