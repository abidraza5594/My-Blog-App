import React from 'react'
import Styled from "./Featurepost.module.css"
const FeaturePost = () => {
    const FeatureData = [
        {
            image: "https://2.bp.blogspot.com/-9Pjnlj15VNE/Vuphu52FpVI/AAAAAAAADYg/twYTib_UQUMBouIGv4ljl2c0ZVxV-nClQ/w217-h106-p-k-no-nu/backpack-1149544_960_720.jpg",
            title: "Fashion and beautiful backpack"
        },
        {
            image: "https://3.bp.blogspot.com/-bMsroVx7_uw/Vupg5rq-1WI/AAAAAAAADYQ/1-6c33dATVYltlxAX-YMs83KkSYkMSBOg/w217-h106-p-k-no-nu/pathway-1149113_960_720.jpg",
            title: "Small bridge and a beautiful view of the beach"
        },
        {
            image: "https://4.bp.blogspot.com/-R3jFy7SYZL4/Vupgft_tacI/AAAAAAAADYM/fwh1GYHl8YYIRAREFKG1d-cxgA-05ySNA/w217-h106-p-k-no-nu/hipster-865295_960_720.jpg",
            title: "Girl with camera style vintage"
        },
        {
            image: "https://1.bp.blogspot.com/-tE181d_K7gs/Vupfu_6tHnI/AAAAAAAADYE/OXF5cqzoXao890DJVCBdSeEMyCtdcKIjA/w217-h106-p-k-no-nu/girl-984155_960_720.jpg",
            title: "Girl play with fireworks in nature"
        },
        {
            image: "https://4.bp.blogspot.com/-GkUyTOGonKQ/Vupe8svLNsI/AAAAAAAADX0/tqWMHfiRudY_V82YeEE7yq86apVldYnZA/w217-h106-p-k-no-nu/photographer-1150052_960_720.jpg",
            title: "Cool vintage photograph"
        }
    ]
    return (
        <div className={Styled.featurePost_container}>
            <div className={Styled.feature_inner}>
                {FeatureData.map(data =>
                    <div className={Styled.feature_containt}>
                        <div className={Styled.img_container}>
                            <img src={data.image} alt="" />
                        </div>
                        <h3>{data.title}</h3>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FeaturePost