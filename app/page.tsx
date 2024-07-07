import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1>Home Page</h1>
      <div className="grid gap-2 container mx-auto max-w-[15rem]">
        <button
          type="button"
          className="bg-pink-500 font-bold text-white hover:bg-pink-600 rounded px-4 py-2"
        >
          <Link href="/about">About Page</Link>
        </button>
        <button
          type="button"
          className="bg-pink-500 font-bold text-white hover:bg-pink-600 rounded px-4 py-2"
        >
          <Link href="/users">Users Page</Link>
        </button>
      </div>
    </main>
  );
}
