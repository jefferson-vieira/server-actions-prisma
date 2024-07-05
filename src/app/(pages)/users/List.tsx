"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Backend from "@/backend";
import type User from "@/core/models/User";

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    Backend.user.getAll().then(setUsers);
  }, []);

  return (
    <div className="flex flex-col gap-4 ">
      {users.map((user) => (
        <Link
          key={user.id}
          href={`/users/edit/${user.id}`}
          className="flex p-4 bg-zinc-900 rounded-md items-center gap-5"
        >
          <Image
            src={user.avatar}
            width={80}
            height={80}
            className="rounded-full"
            alt={`${user.name}'s avatar.`}
          />

          <div className="flex flex-col gap-1">
            <span className="text-xl font-black">{user.name}</span>

            <span className="text-sm text-zinc-400">{user.email}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
