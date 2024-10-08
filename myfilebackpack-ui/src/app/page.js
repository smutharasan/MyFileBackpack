"use client";
import React, { useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "../amplifyconfiguration.json";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure({ ...outputs, ssr: true });

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
          <Authenticator>
            {({ signOut, user }) => (
              <SignedHome signOut={signOut} user={user} />
            )}
          </Authenticator>
        )}
      </div>
    </>
  );
}
