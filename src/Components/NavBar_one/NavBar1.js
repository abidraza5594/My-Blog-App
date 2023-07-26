import React from 'react';
import Styled from './Navbar1.module.css';

const NavBar1 = () => {
  return (
    <div className={Styled.navbar1_container}>
      <div className={Styled.left_container}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className={Styled.right_container}>
        <ul>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
        </ul>
      </div>
    </div>
  );
};

export default NavBar1;
