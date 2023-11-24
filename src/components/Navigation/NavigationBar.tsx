
import React from "react";
import Link from "next/link";

import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <>
      <header className="page-header">
			<nav className="navbar bg-custom-gray navbar__style-three text-black" id="navbar-default">
				<div className="container-fluid p-l-md-30 p-r-md-30">
					<div className="navbar-inner justify-content-between ">
						<div className="brand-logo-container">
							<Logo />      
						</div>
						<div className="main-nav-wrapper">
							<ul className="main-navigation list-inline text-black ">
								<li key="/" >
									<Link href="/" className="text-black" >
											Home
									</Link>
								</li>
								<li key="/">
									<Link href="/"   className="text-black">
											Skin Care Routines
									</Link>
								</li>
								<li key="/" >
									<Link href="/"  className="text-black" >
											Beard Care & Grooming
									</Link>
								</li>
								<li key="/">
									<Link href="/"  className="text-black">
										Hair Styling & Hair Care
									</Link>
								</li>
							</ul>
						</div>
            <div className="ml-auto flex">
              <ul className="main-navigation list-inline">
                  <li key="/">
                    <Link href="/"  className="text-black">
                      About
                    </Link>
                  </li>

                  <li key="/">
                    <Link href="/"  className="text-black">
                      Contact
                    </Link>
                  </li>

                  <li key="/">
                    <Link href="/"  className="text-black">
                      Privacy Policy
                    </Link>
                  </li>
              </ul>
            </div>
					</div>
				</div>
			</nav>
		</header>
    </>
  );
};

export default Navbar;