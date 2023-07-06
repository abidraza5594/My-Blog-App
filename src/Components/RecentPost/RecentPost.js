import React from 'react'
import Styled from "./RecentPost.module.css"
import { useEffect,useState } from 'react';
import AOS from 'aos';


const RecentPost = () => {

    const objects = [
      {
        image: "https://1.bp.blogspot.com/-OS55YOqI5E0/XwsMHpncMmI/AAAAAAAAI94/7FFrowcjK9UBtcX30qgHOYwPijaWEwqfACNcBGAsYHQ/w867-h440-p-k-no-nu/aircraft-1183171_960_720.jpg",
        title: "Small bridge and a beautiful view of the beach",
        catogery: "Beauty",
        datetime: "-August 23, 2016"
      },

      {
        image: "https://4.bp.blogspot.com/-P-12tKyqaUY/VupZ095myKI/AAAAAAAADXI/gX9DQ4918NcdtEjdIIreFLmjtakuG7b9w/w416-h226-p-k-no-nu/pumpkin-1030817_960_720.jpg",
        title: "Ripe pumpkin in the middle of green grass",
        catogery: "Food",
        datetime: "-March 17, 2016"
      },
      {
        image: "https://4.bp.blogspot.com/-xcrSOZLGycA/VupZydWLg-I/AAAAAAAADXA/2iIF_hX7sakciiBFeolr3xcQGrtJFVMtQ/s1600/italian-1082230_960_720.jpg",
        title: "Cook preparing delicious pasta",
        catogery: "Food",
        datetime: "-Sep 17, 2016"
      },
      {
        image: "https://4.bp.blogspot.com/-dbwt9XYkbGE/VupYCl4Nw4I/AAAAAAAADWo/X8uDXgRC7SMSlYPD3vH12zbQawes3ZWFQ/s1600/ipad-605439_960_720.jpg",
        title: "Cool smartphone with open music application",
        catogery: "Meusic",
        datetime: "-Sep 17, 2012"
      },
      {
        image: "https://1.bp.blogspot.com/-JimZDFhdozw/VupVELDw14I/AAAAAAAADWI/CqDCQKZbTAseFWJg_UgsScbdSGH7QjEcg/s1600/kayaking-918464_960_720.jpg",
        title: "Girl looking at the mountains in her green kayak",
        catogery: "Nature",
        datetime: "-Aug 17, 2019"
      },
      {
        image: "https://1.bp.blogspot.com/-O35ksn594-g/VupVD9H1jvI/AAAAAAAADWE/9OrQ_aiJ3EUp3bWfpbiSHgomAEnWyeRdA/s1600/baseball-1149955_960_720.jpg",
        title: "Baseball player running the game field",
        catogery: "Sports",
        datetime: "-Dec 17, 2013"
      }
    ];

    const [randomObject, setRandomObject] = useState({});

    useEffect(() => {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * objects.length);
        const selectedObject = objects[randomIndex];
        setRandomObject(selectedObject);
      }, 1500);

      return () => clearInterval(interval);
    }, []);


    // ------------------------------------ Randome 1----------------------------------------


    const objects1 = [
      {
        image: "https://4.bp.blogspot.com/-GpvEjj-56Jk/VupW1hQ9COI/AAAAAAAADWc/Z6ULsbZRkDU9Xyd20-pwX1rPzbxaOut4g/s1600/climber-984380_960_720.jpg",
        title: "Man climbing sloping mountain",
        catogery: "Sports",
        datetime: "-August 23, 2016"
      },

      {
        image: "https://4.bp.blogspot.com/-0anv0J_mxEA/VupVGr-PrVI/AAAAAAAADWQ/oW-SngqFzTonHBZRZo1cuzjuuJf-QBVlQ/s1600/treadmill-1201014_960_720.jpg",
        title: "Empty running track and shrouded by fog",
        catogery: "Sports",
        datetime: "-March 17, 2016"
      },
      {
        image: "https://1.bp.blogspot.com/-r6Y4QotniYE/VupSkFdcNTI/AAAAAAAADVk/OuEpRdJUqf4E12PdAd3RMWNjVIIz1WnHg/s1600/forest-1225983_960_720.jpg",
        title: "Dense forest with low light",
        catogery: "Beauty",
        datetime: "-Sep 17, 2016"
      },
      {
        image: "https://2.bp.blogspot.com/-gcOhZ6HP8Bo/VupTHihqM-I/AAAAAAAADVs/zjX6ao4I8XI3-dmLL6WCt9xECi6kUN5mQ/s1600/forest-1149876_960_720.jpg",
        title: "Amazing nature green wallpaper HD",
        catogery: "Beauty",
        datetime: "-Sep 17, 2012"
      }
    ];

    const [randomObject1, setRandomObject1] = useState({});

    useEffect(() => {
      const interval = setInterval(() => {
        const randomIndex1 = Math.floor(Math.random() * objects1.length);
        const selectedObject1 = objects1[randomIndex1];
        setRandomObject1(selectedObject1);
      }, 1500);

      return () => clearInterval(interval);
    }, []);


  // ------------------------------------ Random 2------------------------

  
  const objects2 = [
    {
      image: "https://4.bp.blogspot.com/-GpvEjj-56Jk/VupW1hQ9COI/AAAAAAAADWc/Z6ULsbZRkDU9Xyd20-pwX1rPzbxaOut4g/s1600/climber-984380_960_720.jpg",
      title: "Man climbing sloping mountain",
      catogery: "Sports",
      datetime: "-August 23, 2016"
    },

    {
      image: "https://4.bp.blogspot.com/-0anv0J_mxEA/VupVGr-PrVI/AAAAAAAADWQ/oW-SngqFzTonHBZRZo1cuzjuuJf-QBVlQ/s1600/treadmill-1201014_960_720.jpg",
      title: "Empty running track and shrouded by fog",
      catogery: "Sports",
      datetime: "-March 17, 2016"
    },
    {
      image: "https://1.bp.blogspot.com/-r6Y4QotniYE/VupSkFdcNTI/AAAAAAAADVk/OuEpRdJUqf4E12PdAd3RMWNjVIIz1WnHg/s1600/forest-1225983_960_720.jpg",
      title: "Dense forest with low light",
      catogery: "Beauty",
      datetime: "-Sep 17, 2016"
    },
    {
      image: "https://2.bp.blogspot.com/-gcOhZ6HP8Bo/VupTHihqM-I/AAAAAAAADVs/zjX6ao4I8XI3-dmLL6WCt9xECi6kUN5mQ/s1600/forest-1149876_960_720.jpg",
      title: "Amazing nature green wallpaper HD",
      catogery: "Beauty",
      datetime: "-Sep 17, 2012"
    }
  ];

  const [randomObject2, setRandomObject2] = useState({});

  useEffect(() => {
    const interva2 = setInterval(() => {
      const randomIndex2 = Math.floor(Math.random() * objects2.length);
      const selectedObject2 = objects2[randomIndex2];
      setRandomObject2(selectedObject2);
    }, 1500);

    return () => clearInterval(interva2);
  }, []);

    useEffect(() => {
      AOS.init();
    }, []);
    return (
      <div className={Styled.recentPost_container}>
        <div className={Styled.innerofrecent} data-aos="zoom-in">
          <div className={Styled.recent_inner1}>
            <img src={randomObject.image} alt="" />

            <div className={Styled.imgcontent}>
              <span style={{ color: "gray" }}><span style={{ color: "red" }}>{randomObject.catogery}</span>{randomObject.datetime}</span>
              <h1>{randomObject.title}</h1>
            </div>
          </div>

          <div className={Styled.recent_inner2} data-aos="zoom-in-left">
            <div className={Styled.recent_inner_left1}>
              <div className={Styled.recent_inner1}>
                <img src={randomObject1.image} alt="" />

                <div className={Styled.imgcontent}>
                  <span style={{ color: "gray" }}><span style={{ color: "red" }}>{randomObject1.catogery}</span>{randomObject1.datetime}</span>
                  <h1>{randomObject1.title}</h1>
                </div>
              </div>
            </div>
            <div className={Styled.recent_inner_left2} >
              <div className={Styled.recent_inner1}>
                <img src={randomObject2.image} alt="" />

                <div className={Styled.imgcontent}>
                  <span style={{ color: "gray" }}><span style={{ color: "red" }}>{randomObject2.catogery}</span>{randomObject2.datetime}</span>
                  <h1>{randomObject2.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default RecentPost;