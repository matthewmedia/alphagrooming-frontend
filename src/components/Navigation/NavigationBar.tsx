import React from "react";
import Link from "next/link";

import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <>
      <header className="page-header">
        <nav className="navbar bg-custom-gray navbar__style-three text-black" id="navbar-default">
          <div className="container-fluid px-8 mx-auto flex justify-between items-center">
            <div className="brand-logo-container">
              <Logo />      
            </div>
            <div className="main-nav-wrapper flex justify-between items-center w-full">
              <div className="main-navigation text-black flex space-x-4">
                <Link href="/"><span className="nav text-black">Home</span></Link>
                <Link href="/"><span className="text-black">Skin Care Routines</span></Link>
                <Link href="/"><span className="text-black">Beard Care & Grooming</span></Link>
                <Link href="/"><span className="text-black">Hair Styling & Hair Care</span></Link>
              </div>
              <div className="flex space-x-4">
                <Link href="/"><span className="text-black">About</span></Link>
                <Link href="/"><span className="text-black">Contact</span></Link>
                <Link href="/"><span className="text-black">Privacy Policy</span></Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;