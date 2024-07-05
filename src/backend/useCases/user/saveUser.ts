"use server";

import type UserInput from "@/core/models/UserInput";
import UserRepository from "../../repositories/UserRepository";

export default async function saveUser(user: UserInput) {
  const userRepository = new UserRepository();

  return userRepository.save(user);
}
