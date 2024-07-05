"use server";

import UserRepository from "../../repositories/UserRepository";

export default async function getAllUsers() {
  const userRepository = new UserRepository();

  return userRepository.findAll();
}
