import { IconHome, IconUser } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <aside className="min-h-screen w-72 bg-zinc-900">
      <nav className="flex flex-col gap-1 sticky top-0">
        <MenuItem href="/" icon={IconHome} label="Início" />

        <MenuItem href="/users" icon={IconUser} label="Usuários" />
      </nav>
    </aside>
  );
}
