import React from 'react'
import Styled from "./LastFooter.module.css"
const LastFooter = () => {
  return (
    <div className={Styled.Last_footer}>
        <div className={Styled.Last_footer_container1}>
            <span style={{color:"red",fontSize:"12px",marginLeft:"100px"}}>Created By <span style={{fontSize:"12px"}}>- Abid Ansari</span></span>
        </div>

        <div className={Styled.Last_footer_container2}>
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

export default LastFooter