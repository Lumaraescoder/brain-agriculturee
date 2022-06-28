import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <a
            href="#"
            className="text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
          >
            <Link href="/">Home </Link>
          </a>
          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            <Link href="/productors">Farmers </Link>
          </a>
        </div>
      </nav>
    </header>
  );
};
