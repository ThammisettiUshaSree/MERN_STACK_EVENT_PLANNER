import React from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi"; // ✅ Correct name

import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="logo">EVENTS</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="HERO" spy={true} smooth={true} duration={500}>
            HOME
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500}>
            ABOUT
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500}>
            SERVICES
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            CONTACT
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};
export default Navbar;
