"use client";

import DeleteUserAction from "./DeleteAction";
import UserForm from "@/app/components/forms/UserForm";
import Backend from "@/backend";
import type User from "@/core/models/User";
import { useEffect, useState } from "react";

interface Props {
  id: string;
}

export default function CreateUser({ id }: Props) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    Backend.user.getById(id).then(setUser);
  }, []);

  if (!user) {
    return;
  }

  return <UserForm actions={<DeleteUserAction />} user={user} />;
}
