"use client";

import type { MouseEvent } from "react";

type NavigationLink = { href: string; label: string };

function closeNavigation(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

export function MobileNavigation({ links }: { links: NavigationLink[] }) {
  return (
    <details className="mobile-navigation">
      <summary aria-label="Navigation öffnen">
        <span />
        <span />
      </summary>
      <nav aria-label="Mobile Hauptnavigation">
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={closeNavigation}>
            {link.label}
          </a>
        ))}
      </nav>
    </details>
  );
}
