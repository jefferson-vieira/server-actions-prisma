import type { IconProps } from "@tabler/icons-react";
import type { Route } from "next";
import Link from "next/link";

import type { ElementType } from "react";

interface Props<T extends string> {
  href: Route<T>;
  icon: ElementType<IconProps>;
  label: string;
}

export default function MenuItem<T extends string>({
  href,
  icon: Icon,
  label,
}: Props<T>) {
  return (
    <Link href={href} className="flex gap-2 p-4 hover:bg-black">
      <Icon className="text-zinc-200" size={24} stroke={1} />

      <span className="text-zinc-200">{label}</span>
    </Link>
  );
}
