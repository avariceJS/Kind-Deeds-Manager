import { ReactNode } from "react";

export function UiHeader({ right }: { className?: string; right?: ReactNode }) {
  return <header>{right}</header>;
}
