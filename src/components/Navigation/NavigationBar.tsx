"use client";
import Link from "next/link";
import Logo from "../Logo/Logo";
import React, { useState, useContext } from "react";
import { ThemeContext } from "@/contexts/LayoutContextProvider/ThemeContextProvider";
import { SearchContext } from "@/contexts/SearchContextProvider/SearchContextProvider";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoMastodon } from "react-icons/io5";
import { FaFlipboard } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Navbar = () => {
  const { searchQuery, setSearchQuery, shouldSearch } =
    useContext(SearchContext);
  const [showSearch, setShowSearch] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { toggleDarkMode } = useContext(ThemeContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      <header className="page-header bg-gradient-to-r from-green-400 to-blue-500 dark:from-gray-800 dark:to-black">
        <nav className="navbar bg-custom-gray navbar__style-three text-black shadow-lg bg-gradient-to-r from-green-400 to-blue-500 dark:from-gray-800 dark:to-black">
          <div className="container-fluid px-8 mx-auto flex justify-between items-center">
            <div className="brand-logo-container">
              <Logo />
            </div>
            <p className="text-base text-white uppercase font-bold italic hidden md:block">
              Your one-stop diary for all things beard!
            </p>
            <div className="main-nav-wrapper hidden md:flex justify-between items-center w-full">
              <div className="main-navigation text-black flex space-x-4 border-b-4 border-white-500 py-2">
                <Link href="/">
                  <span className="nav text-white font-bold transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-200">
                    Home
                  </span>
                </Link>
                <Link href="/beard-care">
                  <span className="text-white font-bold transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-200">
                    Beard Care & Grooming
                  </span>
                </Link>
                <Link href="/">
                  <span className="text-white font-bold">About</span>
                </Link>
                <Link href="/">
                  <span className="text-white font-bold">Contact</span>
                </Link>
                <Link href="/privacy-policy">
                  <span className="text-white font-bold">Privacy Policy</span>
                </Link>
              </div>
              <div className="flex space-x-8 items-center">
                <button
                  className="self-center text-2xl md:text-3xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center bg-neutral-100 dark:bg-neutral-800"
                  onClick={() => setShowSearch(!showSearch)}
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                    ></path>
                  </svg>
                </button>
                <button
                  onClick={toggleDarkMode}
                  className="self-center text-2xl md:text-3xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center bg-neutral-100 dark:bg-neutral-800"
                >
                  <span className="sr-only">Enable dark mode</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            {/* Toggle Button for Mobile Navbar */}
            <button className="md:hidden text-white" onClick={toggleSidebar}>
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>
      {(showSearch || shouldSearch) && (
        <div className="mt-5 mb-5 max-w-lg self-auto mx-auto">
        <form className="max-w-4xl mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-4xl"
              placeholder="Type and press enter"
              required
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        </form>
      </div>
      )}
      <div
        className={`fixed inset-0 z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-black bg-opacity-50 md:hidden`}
        onClick={toggleSidebar}
      >
        <div
          className="fixed inset-0 w-full h-full bg-gradient-to-r from-green-400 to-blue-500 dark:from-gray-800 dark:to-black shadow-lg p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <Logo />
            <button
              className="text-white focus:outline-none"
              onClick={toggleSidebar}
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="col-md-auto">
            <div className="footer-social-share-wrapper">
              <div className="footer-social-share">
                <div className="axil-social-title">Find us here</div>
                <ul className="social-share social-share__with-bg">
                  <li>
                    <a href={"https://twitter.com/alphaGhub"}>
                      <FaSquareXTwitter size={35} color="white" />
                    </a>
                  </li>
                  <li>
                    <a href={"https://mastodon.social/@alphagrooming"}>
                      <IoLogoMastodon size={35} color="white" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        "https://flipboard.com/@AlphaGrooming?from=share&utm_source=flipboard&utm_medium=curator_share"
                      }
                    >
                      <FaFlipboard size={35} color="red" />
                    </a>
                  </li>

                  <li>
                    <a href={"https://pin.it/2GN1acQZq"}>
                      <FaPinterest size={35} color="white" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End of .footer-social-share-wrapper */}
          </div>
          <button
            onClick={toggleDarkMode}
            className="self-center text-2xl md:text-3xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center bg-neutral-100 dark:bg-neutral-800"
          >
            <span className="sr-only">Enable dark mode</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              ></path>
            </svg>
          </button>
          {
            <div className="mt-5 ">
              <form className="max-w-4xl mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-4xl"
                    placeholder="Type and press enter"
                    required
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                  />
                </div>
              </form>
            </div>
          }
          <nav className="flex flex-col space-y-4 mt-8 ">
            <Link href="/" className="mb-8"
                          onClick={toggleSidebar}

            >
              <span className="nav text-white font-bold transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-200">
                🧔🏽‍♂️ Home
              </span>
            </Link>
            <Link
              href="/beard-care"
              className="mb-8"
              style={{ marginBottom: "2rem" }}
              onClick={toggleSidebar}
            >
              <span className="text-white font-bold transition duration-500 ease-in-out transform hover:scale-110 hover:text-green-200">
                🧔🏽‍♂️ Beard Care & Grooming
              </span>
            </Link>
            <Link href="/" className="mb-8" style={{ marginBottom: "2rem" }}               onClick={toggleSidebar}
>
              🧔🏽‍♂️ <span className="text-white font-bold">About</span>
            </Link>
            <Link href="/" className="mb-8" style={{ marginBottom: "2rem" }}               onClick={toggleSidebar}
>
              🧔🏽‍♂️ <span className="text-white font-bold">Contact</span>
            </Link>
            <Link
              href="/privacy-policy"
              className="mb-8"
              style={{ marginBottom: "2rem" }}
              onClick={toggleSidebar}

            >
              🧔🏽‍♂️ <span className="text-white font-bold">Privacy Policy</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
