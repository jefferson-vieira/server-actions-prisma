import type { ReactNode } from "react";
import Menu from "./Menu";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex">
      <Menu />

      {children}
    </div>
  );
}
