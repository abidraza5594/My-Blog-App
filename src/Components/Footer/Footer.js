import React from 'react'
import Styled from "./Footer.module.css"
import PopularPost from '../PopularPost/PopularPost'
import { useEffect } from 'react';
import AOS from 'aos';
import {useSelector} from "react-redux"


const Footer = () => {
    const islight=useSelector(state=>state.islight)
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className={Styled.footer_container} style={{backgroundColor:islight?"#121212":"",borderTop:`1px solid ${islight?"white":"black"}`,borderBottom:`1px solid ${islight?"white":"black"}`}}>
            <div className={Styled.innerContainer_footer}>

                <div className={Styled.footer_section1}>

                    <h1>POPULAR POSTS</h1>
                    <div className={Styled.inner_footer} data-aos="fade-right">
                        <div className={Styled.Footer_img}>
                            <img src="https://1.bp.blogspot.com/-OS55YOqI5E0/XwsMHpncMmI/AAAAAAAAI94/7FFrowcjK9UBtcX30qgHOYwPijaWEwqfACNcBGAsYHQ/w110-h77-p-k-no-nu/aircraft-1183171_960_720.jpg" alt="" />
                        </div>
                        <div className={Styled.Footer_containt}>
                            <h3>Small bridge and a beautiful view of the beach</h3>
                            <span style={{fontSize:"10px"}}>August 23, 2016</span>
                        </div>
                    </div>
                    <div className={Styled.inner_footer} data-aos="fade-right">
                        <div className={Styled.Footer_img}>
                            <img src="https://4.bp.blogspot.com/-d_nKdu-jKwA/VupUS_8FhyI/AAAAAAAADV4/8JudMeWR3WAu1LA2vRP2fSBnAEoa0ENkw/w110-h77-p-k-no-nu/child-997231_960_720.jpg" alt="" />
                        </div>
                        <div className={Styled.Footer_containt}>
                            <h3>Elegant woman in front of a waterfall</h3>
                            <span style={{fontSize:"10px"}}>August 23, 2016</span>
                        </div>
                    </div>
                    <div className={Styled.inner_footer} data-aos="fade-right">
                        <div className={Styled.Footer_img}>
                            <img src="https://4.bp.blogspot.com/-dtSH0tcgqqM/Vupi6ek8JTI/AAAAAAAADY0/juCg2KTOg-UnkU6066GA50dYTHUN4Ifww/w110-h77-p-k-no-nu/notepad-926046_960_720.jpg" alt="" />
                        </div>
                        <div className={Styled.Footer_containt}>
                            <h3>Writing lyrics with pen on a stylish thick paper</h3>
                            <span style={{fontSize:"10px"}}>March 23, 2016</span>
                        </div>
                    </div>
                </div>


                <div className={Styled.footer_section2}>
                    <div>
                    <h1>Categories</h1>
                    <div>
                        <li>
                            <span>><a href="">Business</a></span>
                            <span>5</span>
                        </li>
                        <li>
                            <span>><a href="">Sports</a></span>
                            <span>4</span>
                        </li>
                        <li>
                            <span>><a href="">Technology</a></span>
                            <span>5</span>
                        </li>
                    </div>
                    </div>

                    <div>
                    <h1 className={Styled.Tags}>Tags</h1>
                    <div className={Styled.AllTags}>
                        <div className={Styled.button}>Bussines</div>
                        <div className={Styled.button}>Food</div>
                        <div className={Styled.button}>Sports</div>
                        <div className={Styled.button}>Education</div>
                        <div className={Styled.button}>Technology</div>
                        <div className={Styled.button}>Learn</div>
                        <div className={Styled.button}>Photography</div>
                        <div className={Styled.button}>Nature</div>
                        <div className={Styled.button}>People</div>

                    </div>
                    </div>
                </div>



                <div className={Styled.footer_section3}>
                    <h1>Recent in Beauty</h1>
                    <div className={Styled.inner_footer} data-aos="fade-left">
                        <div className={Styled.Footer_img}>
                            <img src="https://2.bp.blogspot.com/-vlEsQFjiSKk/VupYFIU67qI/AAAAAAAADWs/AJbQSsLgu0cAGn1mbyFzTrXnExTodbCAQ/w416-h226-p-k-no-nu/guitar-1139397_960_720.jpg" alt="" />
                        </div>
                        <div className={Styled.Footer_containt}>
                            <h3>Beautiful girl sitting and playing acoustic guitar</h3>
                            <span style={{fontSize:"10px"}}>August 23, 2016</span>
                        </div>
                    </div>
                    <div className={Styled.inner_footer} data-aos="fade-left">
                        <div className={Styled.Footer_img}>
                            <img src="https://1.bp.blogspot.com/-JimZDFhdozw/VupVELDw14I/AAAAAAAADWI/CqDCQKZbTAseFWJg_UgsScbdSGH7QjEcg/s1600/kayaking-918464_960_720.jpg" alt="" />
                        </div>
                        <div className={Styled.Footer_containt}>
                            <h3>Girl looking at the mountains in her green kayak</h3>
                            <span style={{fontSize:"10px"}}>August 23, 2016</span>
                        </div>
                    </div>
                    <div className={Styled.inner_footer} data-aos="fade-left">
                        <div className={Styled.Footer_img}>
                            <img src="https://1.bp.blogspot.com/-r6Y4QotniYE/VupSkFdcNTI/AAAAAAAADVk/OuEpRdJUqf4E12PdAd3RMWNjVIIz1WnHg/s1600/forest-1225983_960_720.jpg" alt="" />
                        </div>
                        <div className={Styled.Footer_containt}>
                            <h3>Dense forest with low light</h3>
                            <span style={{fontSize:"10px"}}>March 23, 2016</span>
                        </div>
                    </div>
                


                </div>

            </div>
        </div>
    )
}

export default Footer