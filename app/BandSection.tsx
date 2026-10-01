import Image from "next/image";
import { Asterisk } from "lucide-react";
import { SectionHeading } from "@/packages/ui/SectionHeading";

export function BandSection() {
  return (
    <section
      id="band"
      className="band-section section container"
      aria-labelledby="band-title"
    >
      <div className="band-image">
        <Image
          src="/images/band.jpg"
          alt="They Stole A Billion aus Ravensburg"
          width={640}
          height={640}
          sizes="(max-width: 760px) 100vw, 50vw"
        />
        <span className="image-caption eyebrow">
          Ravensburg / Germany / Since 2018
        </span>
      </div>
      <div className="band-story">
        <SectionHeading
          number="03"
          label="Die Band"
          title={
            <span id="band-title">
              VIER KÖPFE.
              <br />
              <span className="accent">EIN BRETT.</span>
            </span>
          }
        />
        <p className="band-lead">
          Wir sind They Stole A Billion.
          <br />
          Groove Metal aus Ravensburg. Seit 2018.
        </p>
        <p>
          Unser Sound verbindet schwere Grooves mit der Wucht von Thrash und
          Hardcore. Druckvolle Riffs, kompromisslose Vocals und die Energie, die
          erst vor der Bühne richtig losbricht.
        </p>
        <p>
          Inspiriert von Biohazard, Lamb of God und Machine Head. Mit unserer
          eigenen Handschrift.
        </p>
        <div className="band-signature">
          <Asterisk size={29} />
          <span>HEAVY RIFFS. RAW ENERGY.</span>
        </div>
      </div>
    </section>
  );
}
