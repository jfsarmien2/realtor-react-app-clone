import React from "react";

import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button
      type="button"
      className="flex gap-1 items-center justify-center w-full bg-red-700 hover:bg-red-800 transition-all rounded text-sm text-white font-medium uppercase px-7 py-3"
    >
      <FcGoogle className="bg-white text-2xl rounded-full" />
      Continue with Google
    </button>
  );
}
