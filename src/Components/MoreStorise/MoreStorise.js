import React from 'react'
import Styled from "./MoreStorise.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useSelector } from "react-redux"


const MoreStorise = () => {
    const islight = useSelector(state => state.islight)
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className={Styled.moreStorise_container}>
            <div className={Styled.addvertisement}>
                <img src="https://1.bp.blogspot.com/-6Jp6oiPX7mA/XE8APiMdJZI/AAAAAAAAD0g/SwKrDjPFgFU_KUUblg8KZsDzDky_O5wWQCK4BGAYYCw/s1600/ads.png" alt="" />
                <h1 style={{ borderBottom: `1px solid ${islight ? "white" : "black"}` }}>MORE STORIES</h1>
            </div>

            <div className={Styled.morestoriseall} >
                <div className={Styled.containtofmorestorise} data-aos="fade-right">
                    <div className={Styled.imgdiv}>
                        <img src="https://1.bp.blogspot.com/-dQBN2UxiXqU/Vupjn7UQgdI/AAAAAAAADY8/y49Bi2v9urM2FcwQqqIA7OmWntqajKusg/w416-h226-p-k-no-nu/woman-1150067_960_720.jpg" alt="" />
                        <span className={Styled.moreStorise_Title}>FASHION</span>
                    </div>
                    <h1>Elegant woman in front of a waterfall</h1>
                    <div className={Styled.PostDetails}>
                        <div className={Styled.profileimg}><img src="https://avatars.githubusercontent.com/u/102030339?v=4" alt="" /></div>
                        <span style={{ color: islight ? "white" : "black" }}>Abid - mar 15</span>
                    </div>
                </div>

                <div className={Styled.containtofmorestorise} data-aos="fade-left">
                    <div className={Styled.imgdiv}>
                        <img src="https://1.bp.blogspot.com/-wnV4ZvWjJaQ/VupiUH0Il2I/AAAAAAAADYs/rwc4kAnERYgXU8EXqsQGrH5-_o8a3_28w/w416-h226-p-k-no-nu/business-839788_960_720.jpg" alt="" />
                        <span className={Styled.moreStorise_Title}>BUSINESS</span>
                    </div>
                    <h1>Business man having a cup of coffee</h1>
                    <div className={Styled.PostDetails}>
                        <div className={Styled.profileimg}><img src="https://tse1.mm.bing.net/th?id=OIP.y0XgqZSOkzrvCysu7BN2dAHaE8&pid=Api&P=0&h=180" alt="" /></div>
                        <span style={{ color: islight ? "white" : "black" }}>Arif - mar 15</span>
                    </div>
                </div>


                <div className={Styled.containtofmorestorise} data-aos="fade-right">
                    <div className={Styled.imgdiv}>
                        <img src="https://4.bp.blogspot.com/-R3jFy7SYZL4/Vupgft_tacI/AAAAAAAADYM/fwh1GYHl8YYIRAREFKG1d-cxgA-05ySNA/w416-h226-p-k-no-nu/hipster-865295_960_720.jpg" alt="" />
                        <span className={Styled.moreStorise_Title}>FASHION</span>
                    </div>
                    <h1>Girl with camera style vintage</h1>
                    <div className={Styled.PostDetails}>
                        <div className={Styled.profileimg}><img src="https://tse2.mm.bing.net/th?id=OIP.Bt86cFV63I4JaLKFhk6sPwHaEK&pid=Api&P=0&h=180" alt="" /></div>
                        <span style={{ color: islight ? "white" : "black" }}>Bushra - Dec 12</span>
                    </div>
                </div>


                <div className={Styled.containtofmorestorise} data-aos="fade-left">
                    <div className={Styled.imgdiv}>
                        <img src="https://1.bp.blogspot.com/-tE181d_K7gs/Vupfu_6tHnI/AAAAAAAADYE/OXF5cqzoXao890DJVCBdSeEMyCtdcKIjA/w416-h226-p-k-no-nu/girl-984155_960_720.jpg" alt="" />
                        <span className={Styled.moreStorise_Title}>FASHION</span>
                    </div>
                    <h1>Girl play with fireworks in nature</h1>
                    <div className={Styled.PostDetails}>
                        <div className={Styled.profileimg}><img src="https://tse2.mm.bing.net/th?id=OIP.Bt86cFV63I4JaLKFhk6sPwHaEK&pid=Api&P=0&h=180" alt="" /></div>
                        <span style={{ color: islight ? "white" : "black" }}>Bushra - Dec 12</span>
                    </div>
                </div>


                <div className={Styled.containtofmorestorise} data-aos="fade-right">
                    <div className={Styled.imgdiv}>
                        <img src="https://1.bp.blogspot.com/-v0QptPDrcVs/VupeaXsiCOI/AAAAAAAADXw/mXxQ3zVItm0UWkJqINGNkzqwVFL4pA6DQ/s1600/books-1185628_960_720.jpg" alt="" />
                        <span className={Styled.moreStorise_Title}>LEARN</span>
                    </div>
                    <h1>Old books stacked on top of a ladder</h1>
                    <div className={Styled.PostDetails}>
                        <div className={Styled.profileimg}><img src="https://tse4.mm.bing.net/th?id=OIP._VKMsS6iBKur0N57MGGOlwAAAA&pid=Api&P=0&h=180" alt="" /></div>
                        <span style={{ color: islight ? "white" : "black" }}>Anil - Oct 20</span>
                    </div>
                </div>


                <div className={Styled.containtofmorestorise} data-aos="fade-left">
                    <div className={Styled.imgdiv}>
                        <img src="https://4.bp.blogspot.com/-hRZbMTprGYM/VupbiPgYX-I/AAAAAAAADXc/ghlbMrG6NxgLTqZOyGb3FDmqvuu584_ZQ/s1600/business-man-1031755_960_720.jpg" alt="" />
                        <span className={Styled.moreStorise_Title}>BUSINES</span>
                    </div>
                    <h1>Business man reading newspaper</h1>
                    <div className={Styled.PostDetails}>
                        <div className={Styled.profileimg}><img src="https://tse1.mm.bing.net/th?id=OIP.leRaZskYpTKA55a0St0tZgHaJa&pid=Api&P=0&h=180" alt="" /></div>
                        <span style={{ color: islight ? "white" : "black" }}>Aman - March 17, 2016</span>
                    </div>
                </div>


                <div className={Styled.containtofmorestorise} data-aos="fade-right">
                    <div className={Styled.imgdiv}>
                        <img src="https://1.bp.blogspot.com/-NgTHE9VTuzU/VupZzu7WM1I/AAAAAAAADXE/GlsZafgUyb8FDNP19GfHsnIhiUTjbFk3w/w416-h226-p-k-no-nu/beef-1204649_960_720.jpg" alt="" />
                        <span className={Styled.moreStorise_Title}>FOOD</span>
                    </div>
                    <h1>Sandwich with delicious cheeses</h1>
                    <div className={Styled.PostDetails}>
                        <div className={Styled.profileimg}><img src="https://tse1.mm.bing.net/th?id=OIP.leRaZskYpTKA55a0St0tZgHaJa&pid=Api&P=0&h=180" alt="" /></div>
                        <span style={{ color: islight ? "white" : "black" }}>Abid - Sep 17, 2016</span>
                    </div>
                </div>

                <div className={Styled.containtofmorestorise} data-aos="fade-left">
                    <div className={Styled.imgdiv}>
                        <img src="https://4.bp.blogspot.com/-WQooH_zXbmE/Vupbh9DASKI/AAAAAAAADXY/ar3YOh4Tu986R3N0gA65ckU8APk43ArQQ/w416-h226-p-k-no-nu/buildings-1149917_960_720.jpg" alt="" />
                        <span className={Styled.moreStorise_Title}>PHOTOGRAPHY</span>
                    </div>
                    <h1>Sunset behind an old and beautiful building</h1>
                    <div className={Styled.PostDetails}>
                        <div className={Styled.profileimg}><img src="https://tse1.mm.bing.net/th?id=OIP.leRaZskYpTKA55a0St0tZgHaJa&pid=Api&P=0&h=180" alt="" /></div>
                        <span style={{ color: islight ? "white" : "black" }}>Abid - Sep 17, 2016</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreStorise