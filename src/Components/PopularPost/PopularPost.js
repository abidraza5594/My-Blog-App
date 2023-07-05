import React from 'react'
import Styled from "./PopularPost.module.css"
import { useEffect } from 'react';
import AOS from 'aos';
import {useSelector} from "react-redux"


const PopularPost = () => {
    const islight=useSelector(state=>state.islight)
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className={Styled.PopularPost_container}>
        <div className={Styled.PopolerPost_Header} style={{borderBottom:`1px solid ${islight?"white":"black"}`}}><h1>POPULAR POSTS</h1></div>
        
        <div className={Styled.inner_popularPost} data-aos="zoom-in-left">
            <div className={Styled.popularPost_img}>
                <img src="https://1.bp.blogspot.com/-OS55YOqI5E0/XwsMHpncMmI/AAAAAAAAI94/7FFrowcjK9UBtcX30qgHOYwPijaWEwqfACNcBGAsYHQ/w110-h77-p-k-no-nu/aircraft-1183171_960_720.jpg" alt="" />
            </div>
            <div className={Styled.popularPost_containt}>
                <h3>Small bridge and a beautiful view of the beach</h3>
                <span>August 23, 2016</span>
            </div>
        </div>

        <div className={Styled.inner_popularPost} data-aos="zoom-in-left">
            <div className={Styled.popularPost_img}>
                <img src="https://1.bp.blogspot.com/-dQBN2UxiXqU/Vupjn7UQgdI/AAAAAAAADY8/y49Bi2v9urM2FcwQqqIA7OmWntqajKusg/w110-h77-p-k-no-nu/woman-1150067_960_720.jpg" alt="" />
            </div>
            <div className={Styled.popularPost_containt}>
                <h3>Elegant woman in front of a waterfall</h3>
                <span>March 17, 2016</span>
            </div>
        </div>

        <div className={Styled.inner_popularPost} data-aos="zoom-in-left">
            <div className={Styled.popularPost_img}>
                <img src="https://1.bp.blogspot.com/-wnV4ZvWjJaQ/VupiUH0Il2I/AAAAAAAADYs/rwc4kAnERYgXU8EXqsQGrH5-_o8a3_28w/w110-h77-p-k-no-nu/business-839788_960_720.jpg" alt="" />
            </div>
            <div className={Styled.popularPost_containt}>
                <h3>Elegant Business man having a cup of coffee</h3>
                <span>August 23, 2016</span>
            </div>
        </div>

        <div className={Styled.youtube}>
            <div className={Styled.innerYoutube}>
                <h1 className={Styled.FeaturedPost}>FEATURED POST</h1>
            <iframe width="405" height="300" src="https://www.youtube.com/embed/slb-gnG8Jhk?start=45?showinfo=0" data-aos="fade-up"
     data-aos-duration="3000"></iframe>
            <iframe width="403" height="300" src="https://www.youtube.com/embed/IUN664s7N-c?start=45" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-aos="fade-up"
     data-aos-duration="3000"></iframe>
            <iframe width="403" height="300" src="https://www.youtube.com/embed/OO3uO8EzC14?start=45" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-aos="fade-up"
     data-aos-duration="3000"></iframe>
            </div>
            
        </div>
    </div>
    
  )
}

export default PopularPost