"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="w-50 flex justify-center md:justify-between"
      >
        <input
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e?.target?.value)
          }
          className="bg-white text-black p-2 w-80 text-xl rounded-xl"
          placeholder="Search"
          type="text"
        />
        <button type="submit" className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">🚀</button>
      </form>
    </section>
  );
}
