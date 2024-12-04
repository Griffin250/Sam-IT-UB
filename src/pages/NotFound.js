import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-black">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4 text-center">
  Oops! This page is <strong>hidden by the developer</strong> because the owner hasn’t paid their dues! 💸 <br/> 
  <a href="#payme" className="text-orange-700 underline">
    Click here if you’re the <strong>owner</strong> and want it back!
  </a>
</p>


      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
