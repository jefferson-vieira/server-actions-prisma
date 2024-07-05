"use server";

import type User from "@/core/models/User";

import UserRepository from "../../repositories/UserRepository";

export default async function getUserById(id: User["id"]) {
  const userRepository = new UserRepository();

  return userRepository.findById(id);
}
