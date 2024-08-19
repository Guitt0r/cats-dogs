import { cn } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";
import { type UrlObject } from "url";

type Props = {
  href: UrlObject | string;
  className?: string;
  children: React.ReactNode;
  target?: HTMLAttributeAnchorTarget;
};
export const LinkButton = ({ target, href, children, className }: Props) => {
  return (
    <Link
      target={target}
      href={href}
      className={cn(
        "flex text-lg font-medium items-center gap-x-1 px-3 py-2 rounded-md hover:opacity-80 transition active:scale-95",
        className
      )}
    >
      {children}
    </Link>
  );
};
