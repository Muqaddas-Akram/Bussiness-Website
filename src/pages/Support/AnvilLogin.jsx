import React from "react";
import logo from "../../assets/Images/logo.png";

const AnvilLogin = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white p-4 flex flex-col sm:flex-row sm:justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <img src={logo} alt="logo" className="mr-2 h-12 w-12 sm:h-16 sm:w-16" />
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold">fidelity</h1>
            <p className="text-sm sm:text-xs text-gray-600">
              group.<span className="text-red-600"> empowering xaas.</span>
            </p>
          </div>
        </div>
        <button className="bg-gray-700 text-white px-4 py-2 rounded text-sm">
          Login
        </button>
      </header>

      {/* Navy blue bar */}
      <div className="bg-gray-700 h-4 sm:h-6 mx-4"></div>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center mt-8 px-4">
        <h2 className="text-lg sm:text-xl mb-4">Login</h2>

        <div className="w-full sm:w-80 border border-gray-300 overflow-hidden">
          <div className="bg-blue-500 text-white p-4 sm:p-5 text-center text-sm sm:text-base">
            Anvil Login
          </div>
          <div className="p-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full border rounded p-2 mb-2 focus:border-blue-600 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded p-2 mb-2 focus:border-blue-600 focus:outline-none"
            />

            <button className="w-full bg-blue-500 text-white hover:bg-blue-900 p-2 mb-2 text-sm sm:text-base">
              Login
            </button>
            <div className="flex items-center mb-2">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm sm:text-base text-blue-500">
                Remember me
              </label>
            </div>
            <hr />
            <a href="#" className="text-sm sm:text-base text-blue-500">
              Forgotten your password?
            </a>
          </div>
        </div>

        <div className="mt-4 w-full sm:w-80 bg-yellow-100 border border-yellow-200 p-2 text-sm sm:text-base">
          <p className="font-bold">⚠ Warning:</p>
          <p>
            This is a secure site and all access attempts are logged along with
            the IP address. We use this information to trace and prosecute
            illegal attempts to gain access to our systems.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto p-4 text-xs text-gray-500 flex flex-col sm:flex-row sm:justify-between items-center">
        <p className="text-center sm:text-left">
          Fidelity Group, 37/41 Bedford Row, London, WC1R 4JH, No.: 06765569
        </p>
        <p className="text-center sm:text-right">
          Copyright © 2005-2024 Anvil
        </p>
      </footer>
    </div>
  );
};

export default AnvilLogin;
