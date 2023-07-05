import React from 'react'
import Styled from "./Navbar1.module.css"
const NavBar1 = () => {
  return (
    <div className={Styled.navbar1_container}>
        <div className={Styled.inner_container1}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </div>

        <div className={Styled.inner_container2}>
          <ul>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
          </ul>
        </div>
    </div>
  )
}

export default NavBar1