import React from 'react';
import teamLogo from "../../assets/Images/Screenshot 2024-08-11 175803.png"

const RemoteSupport = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Header */}
      <header className="bg-blue-600 p-8">
  <div className="container mx-auto px-10 flex items-center space-x-4">
    <img src={teamLogo} alt="TeamLogo" className="h-8" />
    <h1 className="text-white text-5xl font-semibold">TeamViewer</h1>
  </div>
</header>

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded p-6 max-w-md border-t-8 border-blue-600">
          <h2 className="text-2xl font-semibold mb-4">
            The download you requested is not available for your operating system.
          </h2>
          <p className="mb-4">
            Please open this link on a device with one of the following operating systems:{' '}
            <span className="font-semibold">
              Windows, Windows, Mac OS X, Linux, iOS, Android
            </span>
            .
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 p-4 px-16">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex space-x-4 mb-2 sm:mb-0">
            <a href="#" className="hover:underline">Legal</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">EULA</a>
            <a href="#" className="hover:underline">Copyright info</a>
          </div>
          <div className="flex items-center space-x-2">
            <span>Language:</span>
            <select className="text-gray-500 px-2 py-1 rounded">
              <option>English</option>
            </select>
          </div>
        </div>
        <div className="container mx-auto mt-2 text-sm">
          <p>Copyright © TeamViewer Germany GmbH 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default RemoteSupport;
