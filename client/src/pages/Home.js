import React from "react";

export default function Home({ isAuthenticated }) {
  return (
    <div className="pt-24 flex flex-row justify-center items-center min-h-screen bg-bg-image bg-cover bg-no-repeat ">
      <main className="text-white flex flex-col justify-center items-center">
        <h1 className="text-[28px] font-bold text-center">
          Welcome to EmpowerHer Safety Network
        </h1>
        <p className="text-[20px] font-semibold text-center">
          Empowering women through access to safety resources, support networks,
          and education.
        </p>
        {isAuthenticated ? (
          <div
            id="cta-buttons"
            className="w-full flex flex-row items-center justify-center mt-5"
          >
            <a href="/dashboard/empowerment" className="button">
              Go to dashboard
            </a>
          </div>
        ) : (
          <div
            id="cta-buttons"
            className="w-full flex flex-row items-center justify-center mt-5"
          >
            <a href="/login" className="button">
              Login
            </a>
            <a href="/register" className="button">
              Register
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
