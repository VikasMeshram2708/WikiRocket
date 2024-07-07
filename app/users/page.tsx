import GetAllUsers from "@/lib/GetAllUsers";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = GetAllUsers();
  const users = await usersData;

  const content = (
    <section>
      <h1 className="bg-pink-500 px-4 py-2 rounded-full text-white font-bold w-56 text-center">
        <Link href="/">back to Home</Link>
      </h1>
      {users?.map((user) => {
        return (
          <div key={user?.id}>
            <Link href={`/users/${user?.id}`}>{user?.name}</Link>
          </div>
        );
      })}
    </section>
  );
  return content;
}
