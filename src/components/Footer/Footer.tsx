import Image from "next/image";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";

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
                        <FaSquareXTwitter  size={35}/>
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
              <Link href="/terms">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/about">
                About Us
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
              <Link href="/cookie">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/privacy">
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
            © {new Date().getFullYear()}. All rights reserved by AlphaGrooming.
          </p>
        </div>
        {/* End of .footer-bottom */}
      </div>
      {/* End of .container */}
    </footer>
  );
};

export default Footer;