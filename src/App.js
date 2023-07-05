import Styled from './App.module.css';
import NavBar1 from './Components/NavBar_one/NavBar1';
import NavBarTwo from './Components/NavBar_two/NavBar_two';
import NavBarThree from './Components/NavBar_Three/NavBarThree';
import FeaturePost from './Components/FeaturePost/FeaturePost';
import RecentPost from './Components/RecentPost/RecentPost';
import MoreStorise from './Components/MoreStorise/MoreStorise';
import PopularPost from './Components/PopularPost/PopularPost';
import Pagination from './Components/Pagination/Pagination';
import Footer from './Components/Footer/Footer';
import LastFooter from './Components/LaftFooter/LastFooter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {useSelector} from "react-redux"


function App() {
  const islight=useSelector(state=>state.islight)

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={Styled.App} style={{backgroundColor:islight?"black":"",color:islight?"white":""}} >
      <NavBar1 />
      <NavBarTwo />
      <NavBarThree />
      <FeaturePost />
      <RecentPost />
      <div className={Styled.containerOF_morestorise_PopularPost}>
        <MoreStorise />
        <PopularPost />
      </div>
      <Pagination/>
      <Footer/>
      <LastFooter/>
    </div>
  );
}

export default App;
