import React from "react";

function UnsignedHome({ clickLoggedIn, setClickLoggedIn }) {
  return (
    <div
      className="p-6"
      style={{
        backgroundColor: "#7bdcb5",
        background:
          "linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%)",
      }}
    >
      <div className="w-full px-6">
        <div className="flex flex-col  py-6">
          <h1 className="text-black max-w-[20ch] ">
            Hi there! Welcome to MyFileBackpack
          </h1>
          <h2 className="text-black max-w-[20ch] font-light">
            From Class to Career—Manage and Convert with Ease!
          </h2>
        </div>

        <button
          className="bg-black font-bold rounded-full mt-8 mb-6 py-4 px-8 shadow-lg uppercase tracking-wider"
          onClick={() => setClickLoggedIn(!clickLoggedIn)}
        >
          Login / Signup
        </button>
      </div>
    </div>
  );
}

export default UnsignedHome;
