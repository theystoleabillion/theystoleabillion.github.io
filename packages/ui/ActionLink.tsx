import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";

type ActionLinkProps = ComponentProps<"a"> & {
  variant?: "primary" | "outline" | "text";
};

export function ActionLink({
  children,
  variant = "primary",
  className = "",
  ...props
}: ActionLinkProps) {
  return (
    <a
      className={`action-link action-link--${variant} ${className}`}
      {...props}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}
