import React from "react";

function SignUp() {
  return (
    <div className="w-screen flex justify-center">
      <div
        className="flex items-center
      "
      >
        {" "}
        <input
          type="text"
          className="w-[200px] rounded-l-lg h-[35px] bg-white border border-slate-100 text-xs indent-4 outline-0"
        />
        <button className="button bg-black rounded-r-sm h-[35px] text-white px-2 text-sm border border-slate-200 m-0">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default SignUp;
