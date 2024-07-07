import Link from "next/link";
import React from "react";

export default function page() {
  //   throw new Error("DND");
  return (
    <section className="min-h-screen">
      <h1>About Component</h1>
      <button type="button">
        <Link
          href="/"
          className="bg-pink-500 font-bold text-white hover:bg-pink-600 rounded px-4 py-2"
        >
          Home Page
        </Link>
      </button>
    </section>
  );
}
