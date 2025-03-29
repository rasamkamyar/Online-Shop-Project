import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800 ml-0.5">
              Online Shop
            </h1>
          </div>
          <Link
            to="/checkout"
            className="text-gray-600 hover:text-gray-900 text-3xl"
          >
            <HiOutlineShoppingCart />
          </Link>

          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
