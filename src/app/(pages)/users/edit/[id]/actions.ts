"use server";

import { redirect } from "next/navigation";

import Backend from "@/backend";
import type User from "@/core/models/User";

export async function deleteUser(id: User["id"]) {
  await Backend.user.delete(id);

  redirect("/users");
}
