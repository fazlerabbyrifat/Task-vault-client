import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://img.freepik.com/free-vector/page-404-found-wire-with-socket_80328-233.jpg?w=1060&t=st=1684646294~exp=1684646894~hmac=14b259a0edba2479bff265ba9fa513dfaae60f838a8bf4961b0ba55d61b940b5"
        alt="Error"
        className="w-64 h-64 mb-4"
      />
      <h1 className="text-4xl font-bold mb-2">Oops! Page not found</h1>
      <p className="text-lg mb-4">The requested page could not be found.</p>
      <Link
        to="/"
        className="text-white font-bold py-2 px-4 rounded"
      >
        <button className="btn btn-outline btn-secondary">Go back to homepage</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
