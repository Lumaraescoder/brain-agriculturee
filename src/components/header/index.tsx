import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link href="/">
            <a
              className="text-gray-800 text-base
            transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
            >
              DashBoard
            </a>
          </Link>
          <Link href="/productors">
            <a
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 text-base
            transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              Productors
            </a>
          </Link>
          <Link href="/adduser">
            <a
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform text-base
            dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              Add Productor
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};
