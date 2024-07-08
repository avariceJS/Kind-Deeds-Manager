import Link from "next/link";

export type UiLinkProps = {} & Parameters<typeof Link>[0];

export function UiLink({ ...props }: UiLinkProps) {
  return (
    <Link
      {...props}
    />
  );
}
