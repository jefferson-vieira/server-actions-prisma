import type { IconProps } from "@tabler/icons-react";
import type { ElementType } from "react";

export interface Props {
  description: string;
  icon: ElementType<IconProps>;
  title: string;
}

export default function Header({ description, icon: Icon, title }: Props) {
  return (
    <header className="flex gap-2">
      <Icon size={55} stroke={1} />

      <div className="flex flex-col">
        <h1 className="text-2xl font-black">{title}</h1>

        <h2 className="text-zinc-400">{description}</h2>
      </div>
    </header>
  );
}
