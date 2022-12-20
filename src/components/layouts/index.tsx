import React from "react";
import Header from "./header";
export default function Layout({ children }: any) {
  return (
    <main className="bg-white font-mono dark:bg-slate-800 ">
      <Header />
      {children}
    </main>
  );
}
