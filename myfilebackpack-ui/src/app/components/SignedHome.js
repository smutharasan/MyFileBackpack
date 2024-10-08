import React from "react";
import Image from "next/image";
import { fetchAuthSession } from "aws-amplify/auth";

/**
 *  <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
              <button onClick={signOut}>Sign out</button>

 */
async function currentSession() {
  try {
    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    return { accessToken, idToken };
  } catch (err) {
    console.log(err);
  }
}

function SignedHome({ signOut, user }) {
  console.log(user);
  currentSession()
    .then((session) => console.log(session))
    .catch((err) => console.log(err));
  
  return (
    <div
      style={{
        backgroundColor: "#7bdcb5",
        background:
          "radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90% )",
      }}
      className="flex flex-col items-center justify-center p-6"
    >
      <div className=" p-8 rounded-lg shadow-md max-w-md w-full">
        {/* Banner Profile */}
        <div className="flex flex-col items-center">
          <Image
            src="/userBanner.jpg"
            alt="Banner Profile"
            width={500}
            height={150}
            className="w-full rounded-t-lg"
          />
          <div className="-mt-14 z-10">
            <Image
              src="/personAvatar.png"
              alt="Profile Picture"
              width={100}
              height={100}
              className="w-24 h-24 rounded-full  border-4 border-white"
            />
          </div>
        </div>

        {/* User Info with Verified Button */}
        <div className="flex items-center mt-4">
          <h2 className="text-xl font-bold text-white-800">{user.username}</h2>
          <button className="px-2 py-1 rounded-full ml-2">
            <svg
              fill="#4d9aff"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="16px"
              height="16px"
              viewBox="0 0 536.541 536.541"
              xmlSpace="preserve"
              stroke="#4d9aff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path
                      d="M496.785,152.779c-3.305-25.085-16.549-51.934-38.826-74.205c-22.264-22.265-49.107-35.508-74.186-38.813
                      c-11.348-1.499-26.5-7.766-35.582-14.737C328.111,9.626,299.764,0,268.27,0s-59.841,9.626-79.921,25.024
                      c-9.082,6.965-24.235,13.238-35.582,14.737c-25.08,3.305-51.922,16.549-74.187,38.813c-22.277,22.271-35.521,49.119-38.825,74.205
                      c-1.493,11.347-7.766,26.494-14.731,35.57C9.621,208.422,0,236.776,0,268.27s9.621,59.847,25.024,79.921
                      c6.971,9.082,13.238,24.223,14.731,35.568c3.305,25.086,16.548,51.936,38.825,74.205c22.265,22.266,49.107,35.51,74.187,38.814
                      c11.347,1.498,26.5,7.771,35.582,14.736c20.073,15.398,48.421,25.025,79.921,25.025s59.841-9.627,79.921-25.025
                      c9.082-6.965,24.234-13.238,35.582-14.736c25.078-3.305,51.922-16.549,74.186-38.814c22.277-22.27,35.521-49.119,38.826-74.205
                      c1.492-11.346,7.766-26.492,14.73-35.568c15.404-20.074,25.025-48.422,25.025-79.921c0-31.494-9.621-59.848-25.025-79.921
                      C504.545,179.273,498.277,164.126,496.785,152.779z M439.256,180.43L246.477,373.209l-30.845,30.846
                      c-8.519,8.52-22.326,8.52-30.845,0l-30.845-30.846l-56.665-56.658c-8.519-8.52-8.519-22.326,0-30.846l30.845-30.844
                      c8.519-8.519,22.326-8.519,30.845,0l41.237,41.236L377.561,118.74c8.52-8.519,22.326-8.519,30.846,0l30.844,30.845
                      C447.775,158.104,447.775,171.917,439.256,180.43z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>

        {/* Bio */}
        <p className="text-white-700 mt-2">
          Web Developer | Cat Lover | Coffee Enthusiast
        </p>

        {/* Social Links */}
        <div className="flex items-center mt-4 space-x-4">
          <a href="#" className="text-blue-500 hover:underline">
            Twitter
          </a>
          <a href="#" className="text-blue-500 hover:underline">
            GitHub
          </a>
          <a href="#" className="text-blue-500 hover:underline">
            LinkedIn
          </a>
        </div>

        {/* Separator Line */}
        <hr className="my-4 border-t border-white-300" />

        {/* Stats */}
        <div className="flex justify-between text-white-600 mx-2">
          <div className="text-center">
            <span className="block font-bold text-lg">1.5k</span>
            <span className="text-xs">Followers</span>
          </div>
          <div className="text-center">
            <span className="block font-bold text-lg">120</span>
            <span className="text-xs">Following</span>
          </div>
          <div className="text-center">
            <span className="block font-bold text-lg">350</span>
            <span className="text-xs">Posts</span>
          </div>
        </div>

        <button
          className="bg-black font-bold rounded-full mt-8 mb-6 py-4 px-8 shadow-lg uppercase tracking-wider"
          onClick={signOut}
        >
          Signout
        </button>
      </div>
    </div>
  );
}

export default SignedHome;
