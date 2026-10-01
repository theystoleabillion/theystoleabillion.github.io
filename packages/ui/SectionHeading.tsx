import type { ReactNode } from "react";

type SectionHeadingProps = {
  number: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
};

export function SectionHeading({
  number,
  label,
  title,
  children,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> / {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
