"use client";
import React, { useState } from "react";


import UnsignedHome from "@/components/UnsignedHome";
import SignedHome from "@/components/SignedHome";

export default function Home() {
  const [clickLoggedIn, setClickLoggedIn] = useState(false);

  return (
    <>
      <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] outline-4 outline-rose-600">
        {!clickLoggedIn ? (
          <UnsignedHome
            clickLoggedIn={clickLoggedIn}
            setClickLoggedIn={setClickLoggedIn}
          />
        ) : (
          <SignedHome />
        )}
      </div>
    </>
  );
}
