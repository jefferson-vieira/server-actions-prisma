import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";

export default function CreateUserAction() {
  return (
    <Link
      href="/users/new"
      className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md"
    >
      <IconPlus />

      <span>Novo usuário</span>
    </Link>
  );
}
