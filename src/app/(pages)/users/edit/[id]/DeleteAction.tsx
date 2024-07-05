"use client";

import { useParams } from "next/navigation";

import { deleteUser } from "./actions";

export default function DeleteUserAction() {
  const { id } = useParams<{ id: string }>();

  return (
    <button
      type="button"
      className="bg-red-500 px-4 py-2 rounded-md"
      onClick={() => deleteUser(id)}
    >
      Excluir
    </button>
  );
}
