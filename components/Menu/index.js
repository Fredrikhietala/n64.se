/* eslint-disable react/jsx-key */
import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex max-w-7xl mx-auto justify-center px-4 sm:px-6 bg-nintendo-gray">
      <div className="flex justify-start items-center py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-auto px-2">
          <Link href="/">
            <a className="text-base font-medium text-nintendo-red hover:text-gray-900">
              Home
            </a>
          </Link>
        </div>
        <div className="flex justify-start lg:w-auto px-2">
          <Link href="/players">
            <a className="text-base font-medium text-nintendo-red hover:text-gray-900">
              Players
            </a>
          </Link>
        </div>
        <div className="flex justify-start lg:w-auto px-2">
          <Link href="/">
            <a className="text-base font-medium text-nintendo-red hover:text-gray-900">
              Records
            </a>
          </Link>
        </div>
        <div className="flex justify-start lg:w-auto px-2">
          <Link href="/">
            <a className="text-base font-medium text-nintendo-red hover:text-gray-900">
              Venue
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
