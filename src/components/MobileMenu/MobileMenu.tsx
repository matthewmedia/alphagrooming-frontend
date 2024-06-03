import Link from "next/link";
import Offcanvas from 'react-bootstrap/Offcanvas';

interface OffcanvasMenuProps {
    canvasshow: boolean;
    canvasHandleClose: () => void;
}

const OffcanvasMenu = ({canvasshow, canvasHandleClose} : OffcanvasMenuProps ) => {
    return ( 
        <Offcanvas show={canvasshow} onHide={canvasHandleClose} placement="end" className="offcanvas-menu">
            <Offcanvas.Header closeButton className="close-offcanvasmeu"></Offcanvas.Header>
            <div className="side-nav">
                <span className="display-1 fs-1 light mb-5" id="brand-name" style={{color : "#000000"}}>Find what you&apos;re looking for</span>

                <div className="side-nav-inner nicescroll-container">
                    <div className="side-nav-content">
                        <div className="lg:flex lg:space-x-4"> {/* Utilizing flex layout */}
                            <div className="lg:w-3/4"> {/* On desktop, takes up 3/4 of the screen */}
                                <ul className="main-navigation side-navigation list-inline flex-column">
                                    <li>
                                        <Link href="/contact">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="lg:w-1/4"> {/* On desktop, takes up 1/4 of the screen */}
                                <div className="axil-contact-info-inner">
                                    <div>
                                        <Link className="h5 m-b-xs-5 mt-5" href="/privacy">
                                            Privacy Policy
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="h5 m-b-xs-5" href="/disclaimer">
                                            Disclaimer
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="h5 m-b-xs-5" href="/cookie">
                                            Cookie Policy
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="h5 m-b-xs-5" href="/terms">
                                            Terms of Use
                                        </Link>
                                    </div>
                                    <div className="contact-social-share m-t-xs-30">
                                        <div className="axil-social-title h5">Follow Us on Twitter</div>
                                        <ul className="social-share social-share__with-bg">
                                            {/* Your social media links here */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Offcanvas>
    );
}
 
export default OffcanvasMenu;
