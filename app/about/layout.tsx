import React from "react";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>
        <h1>About Navbar</h1>
      </nav>
      <main>{children}</main>
    </>
  );
}
