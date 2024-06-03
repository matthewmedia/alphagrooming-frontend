"use client"
import Link from "next/link";
import Logo from "../Logo/Logo";
import React, { useState, useRef} from 'react';


const Navbar = () => {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  
	// Main Menu Toggle 

      
    
      // Offcanvas Menu

 
    


  return (
    <>
      <header className="page-header bg-gradient-to-r from-green-400 to-blue-500">
        <nav className="navbar bg-custom-gray navbar__style-three text-black shadow-lg bg-gradient-to-r from-green-400 to-blue-500 ">
          <div className="container-fluid px-8 mx-auto flex justify-between items-center">
            <div className="brand-logo-container">
              <Logo />      
            </div>
            <p className="text-base	 text-white-500 uppercase font-bold italic">Your one-stop shop for all things beard!</p>

            <div className="main-nav-wrapper flex justify-between items-center w-full">
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
               </div>
              <div className="flex space-x-4 font-bold">
                <Link href="/"><span className="text-white">About</span></Link>
                <Link href="/"><span className="text-white">Contact</span></Link>
                <Link href="/privacy-policy"><span className="text-white">Privacy Policy</span></Link>
              </div>
            </div>
          </div>

        </nav>
      </header>
    </>
  );
};

export default Navbar;