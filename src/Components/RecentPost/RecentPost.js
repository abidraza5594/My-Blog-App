import React from 'react'
import Styled from "./RecentPost.module.css"
import { useEffect } from 'react';
import AOS from 'aos';


const RecentPost = () => {
useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={Styled.recentPost_container}>
      <div className={Styled.innerofrecent} data-aos="zoom-in">
        <div className={Styled.recent_inner1}>
          <img src="https://1.bp.blogspot.com/-OS55YOqI5E0/XwsMHpncMmI/AAAAAAAAI94/7FFrowcjK9UBtcX30qgHOYwPijaWEwqfACNcBGAsYHQ/w867-h440-p-k-no-nu/aircraft-1183171_960_720.jpg" alt="" />

          <div className={Styled.imgcontent}>
            <span style={{ color: "gray" }}><span style={{ color: "red" }}>Beauty</span>-August 23, 2016</span>
            <h1>Small bridge and a beautiful view of the beach</h1>
          </div>
        </div>

        <div className={Styled.recent_inner2} data-aos="zoom-in-left">
          <div className={Styled.recent_inner_left1}>
            <div className={Styled.recent_inner1}>
              <img src="https://4.bp.blogspot.com/-dtSH0tcgqqM/Vupi6ek8JTI/AAAAAAAADY0/juCg2KTOg-UnkU6066GA50dYTHUN4Ifww/w433-h220-p-k-no-nu/notepad-926046_960_720.jpg" alt="" />

              <div className={Styled.imgcontent}>
                <span style={{ color: "gray" }}><span style={{ color: "red" }}>Learn</span>-August 23, 2016</span>
                <h1>Writing lyrics with pen on a stylish thick paper</h1>
              </div>
            </div>
          </div>
          <div className={Styled.recent_inner_left2} >
            <div className={Styled.recent_inner1}>
              <img src="https://1.bp.blogspot.com/-dQBN2UxiXqU/Vupjn7UQgdI/AAAAAAAADY8/y49Bi2v9urM2FcwQqqIA7OmWntqajKusg/w433-h220-p-k-no-nu/woman-1150067_960_720.jpg" alt="" />

              <div className={Styled.imgcontent}>
                <span style={{ color: "gray" }}><span style={{ color: "red" }}>Fashion</span>-March 17, 2016</span>
                <h1>Elegant woman in front of a waterfall</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentPost