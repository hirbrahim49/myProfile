"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";

const SmallNav = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // State to control dropdown menu visibility

  function toggleMenu() {
    setIsMenuVisible(!isMenuVisible);
  }

  return (
    <div className="w-full">
      <nav className="flex w-11/12 mx-auto items-center justify-between h-16">
        <div className="font-serif text-2xl font-bold">HORDEYEMI</div>
        <div className="text-3xl cursor-pointer md:hidden" onClick={toggleMenu}>
          <FaBars />
        </div>
      </nav>

      {/* Dropdown menu for small screens */}
      {isMenuVisible && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-8">
          <div className="flex justify-end w-full p-4">
            <span className="text-3xl cursor-pointer" onClick={toggleMenu}>
              <ImCancelCircle />
            </span>
          </div>
          <nav className="flex flex-col space-y-4">
            <Link
              href="#"
              className="hover:underline text-gray-700 text-2xl transition duration-300 hover:text-blue-500"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#"
              className="hover:underline text-gray-700 text-2xl transition duration-300 hover:text-blue-500"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link
              href="#"
              className="hover:underline text-gray-700 text-2xl transition duration-300 hover:text-blue-500"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="#"
              className="hover:underline text-gray-700 text-2xl transition duration-300 hover:text-blue-500"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default SmallNav;
