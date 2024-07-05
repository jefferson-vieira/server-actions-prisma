"use server";

import { redirect } from "next/navigation";

import Backend from "@/backend";
import type UserInput from "@/core/models/UserInput";

export async function saveUser(data: FormData) {
  const user = Object.fromEntries(data) as UserInput;

  if (!user.id) {
    delete user.id;
  }

  await Backend.user.save(user);

  redirect("/users");
}
