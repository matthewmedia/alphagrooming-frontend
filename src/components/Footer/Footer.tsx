import Image from "next/image";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoMastodon } from "react-icons/io5";
import { FaFlipboard } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="page-footer bg-grey-dark-key">
      <div className="custom-fluid-container">
        <div className="footer-mid pt-0">
          <div className="row align-items-center">
            <div className="col-md">
              <div className="footer-logo-container">
                <Link href="/">
                    <Image 
                      src="/logo.png"
                      alt="footer logo"
                      className="footer-logo"
                        width={50}
                        height={50}
                    />
                </Link>
              </div>
              {/* End of .brand-logo-container */}
            </div>
            {/* End of .col-md-6 */}
			      <div className="col-md-auto">
              <div className="footer-social-share-wrapper">
                <div className="footer-social-share">
                  <div className="axil-social-title">Find us here</div>
                  <ul className="social-share social-share__with-bg">
                  
                  <li>
                    <a href={"https://twitter.com/alphaGhub"}>
                        <FaSquareXTwitter  size={35} color="white"/>
                    </a>
                  </li>
                  <li>
                    <a href={"https://mastodon.social/@alphagrooming"}>
                        <IoLogoMastodon  size={35} color="white"/>
                    </a>
                  </li>
                  <li>
                    <a href={"https://flipboard.com/@AlphaGrooming?from=share&utm_source=flipboard&utm_medium=curator_share"}>
                        <FaFlipboard  size={35} color="red"/>
                    </a>
                  </li>
                 
                  <li>
                    <a href={"https://pin.it/2GN1acQZq"}>
                        <FaPinterest  size={35} color="white"/>
                    </a>
                  </li>
                  </ul>
                </div>
              </div>
              {/* End of .footer-social-share-wrapper */}
            </div>
            {/* End of .col-md-6 */}
          </div>
          {/* End of .row */}
        </div>

        {/* End of .footer-mid */}
        <div className="footer-bottom">
          <ul className="footer-bottom-links">
            <li>
              <Link href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/terms-and-condtions">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/acessability">
                Accessibility &amp; CC
              </Link>
            </li>
            <li>
              <Link href="/disclaimer">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
          
            <li>
              <Link href="/sitemap.xml">
                Sitemap
              </Link>
            </li>
          </ul>
          {/* End of .footer-bottom-links */}
          <p className="axil-copyright-txt">
            © {new Date().getFullYear()}. All rights reserved by AlphaGrooming Inc.
          </p>
        </div>
        {/* End of .footer-bottom */}
      </div>
      {/* End of .container */}
    </footer>
  );
};

export default Footer;