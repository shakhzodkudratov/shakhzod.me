import Link, { LinkProps } from "next/link";
import { cn } from "../utils";
import { HTMLAttributeAnchorTarget } from "react";

const IconLink: React.FC<
  LinkProps & {
    className?: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    target?: HTMLAttributeAnchorTarget;
  }
> = ({ icon, className, children, target, ...link }) => (
  <Link
    {...link}
    target={target ?? "_blank"}
    // @ts-ignore
    className={cn(link.className, "inline-flex items-center gap-2")}
  >
    {icon} {children}
  </Link>
);

export default IconLink;
