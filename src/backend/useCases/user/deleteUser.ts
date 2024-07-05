"use server";

import UserRepository from "../../repositories/UserRepository";
import type User from "@/core/models/User";

export default async function deleteUser(id: User["id"]) {
  const userRepository = new UserRepository();

  return userRepository.delete(id);
}
