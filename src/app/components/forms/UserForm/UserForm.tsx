import Input from "@/app/components/Input";
import type User from "@/core/models/User";

import { saveUser } from "./actions";
import Link from "next/link";
import type { ReactElement } from "react";
import buildUser from "@/app/data/mocks/user";

interface Props {
  actions?: ReactElement;
  user?: User;
}

export default function UserForm({ actions, user = buildUser() }: Props) {
  return (
    <form action={saveUser} className="flex flex-col gap-5">
      <input type="hidden" name="id" value={user?.id} />

      <Input
        label="Nome"
        defaultValue={user?.name}
        name="name"
        pattern="^[a-zA-Z]+\.?( [a-zA-Z]+)*( [a-zA-Z]+\.)?$"
        required
      />

      <Input
        label="E-mail"
        defaultValue={user?.email}
        name="email"
        type="email"
        required
      />

      <Input
        label="Senha"
        defaultValue={user?.password}
        name="password"
        type="password"
        pattern="^\S+$"
        required
      />

      <div className="flex justify-between">
        <div className="flex gap-5">
          <button className="bg-blue-500 px-4 py-2 rounded-md" type="submit">
            Salvar
          </button>

          <Link href="/users" className="bg-zinc-500 px-4 py-2 rounded-md">
            Cancelar
          </Link>
        </div>

        {actions}
      </div>
    </form>
  );
}
