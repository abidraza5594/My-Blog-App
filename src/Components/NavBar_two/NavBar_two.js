import React, { useState } from 'react';
import Styed from './Navbar_two.module.css';
import DarkMode from '../DarkMode/DarkMode';
import { useSelector } from 'react-redux';

const NavBarTwo = () => {
  const islight = useSelector(state => state.islight);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={Styed.navbartwo_container}>
      <div className={Styed.logo} style={{ color: islight ? '#be3c32' : 'red' }}>
        My Blogs
      </div>
      <div className={Styed.hamburger_menu} onClick={handleMenuToggle}>
        <div className={`${Styed.hamburger_line} ${menuOpen && Styed.hamburger_line_open}`} />
        <div className={`${Styed.hamburger_line} ${menuOpen && Styed.hamburger_line_open}`} />
        <div className={`${Styed.hamburger_line} ${menuOpen && Styed.hamburger_line_open}`} />
      </div>
      <div className={`${Styed.navbar_two_section} ${menuOpen && Styed.navbar_two_section_open}`}>
        <ul>
          <li className={Styed.listSection}>
            <span className={Styed.listSectionLogo} style={{ color: islight ? '#be3c32' : 'red' }}>
              <i className="fa fa-bullhorn" aria-hidden="true" />
            </span>
            LETEST
          </li>

          <li className={Styed.listSection}>
            <span className={Styed.listSectionLogo} style={{ color: islight ? '#be3c32' : 'red' }}>
              <i className="fa fa-heart-o" aria-hidden="true" />
            </span>
            POPULAR
          </li>

          <li className={Styed.listSection}>
            <span className={Styed.listSectionLogo} style={{ color: islight ? '#be3c32' : 'red' }}>
              <i className="fa fa-fire" aria-hidden="true" />
            </span>
            HOT
          </li>

          <li className={Styed.listSection}>
            <span className={Styed.listSectionLogo} style={{ color: islight ? '#be3c32' : 'red' }}>
              <i className="fa fa-line-chart" aria-hidden="true" />
            </span>
            TRENDING
          </li>
          <li className={Styed.listSection}>
            <DarkMode />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarTwo;
