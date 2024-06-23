"use client";
import Link from "next/link";
import Logo from "../Logo/Logo";
import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/contexts/LayoutContextProvider/ThemeContextProvider";
import { SearchContext } from "@/contexts/SearchContextProvider/SearchContextProvider";
import { useSearchParams } from 'next/navigation'


const Navbar = () => {
  const { searchQuery, setSearchQuery, setShouldSearch } = useContext(SearchContext);
  const [showSearch, setShowSearch] = useState(false);
  const searchParams = useSearchParams()
  const query = searchParams?.get('query');



  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { toggleDarkMode } = useContext(ThemeContext);

 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {

    if (event.key === 'Enter') {
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
          </div>
        </nav>
      </header>
      {(showSearch || query && query.length > 0) && <div className="max-w-5xl mx-auto mt-5 lg:mt-0 flex flex-col 	">
        <form className="relative">
          <label
            htmlFor="search-input"
            className="text-neutral-500 dark:text-neutral-300"
          >
            <span className="sr-only">Search all icons</span>
            <input
              type="search"
              className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200/50 bg-white dark:border-neutral-500 dark:focus:ring-primary-500/30 dark:bg-neutral-900 rounded-full text-md font-normal pl-16 py-3 pr-5 md:pl-20 md:py-5 md:pr-5 lg:pl-24 shadow-lg border border-lime-500	"
              id="search-input"
              value={searchQuery}
              placeholder="Type and press enter"
              onChange={handleChange}
              onKeyDown={handleKeyDown}

              
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl md:left-6 lg:left-8">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                ></path>
              </svg>
            </span>
          </label>
        </form>
      </div>}
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
                className="w-6 h-6"
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
          <nav className="flex flex-col space-y-4 mt-8">
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
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
