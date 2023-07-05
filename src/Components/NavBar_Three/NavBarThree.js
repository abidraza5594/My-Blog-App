import React, { useState, useRef, useEffect } from 'react'
import Styled from "./Navbarthree.module.css"
import { Transition,CSSTransition } from 'react-transition-group';
import {useSelector} from "react-redux"


const NavBarThree = () => {
    const [isopenSearch, setOpenSearch] = useState(true)
    const inputSearchRef = useRef(null);
    const islight=useSelector(state=>state.islight)

    // useEffect(() => {
    //     inputSearchRef.current.focus();
    //   }, [isopenSearch]);

    const SearchHandler = () => {
        console.log("click")
        setOpenSearch(pre => !pre)
    }

    return (
        <div className={Styled.Navbarthree_container} style={{backgroundColor:islight?"#be3c32":"red"}}>
            {isopenSearch ?
                <div className={Styled.innnerNavbar_three} style={{backgroundColor:islight?"#be3c32":"red"}}>
                    <ul>
                        <li>HOME</li>
                        <li>FEATURE</li>
                        <li> MEGA MENU </li>
                        <li>DOCUMENTATION</li>
                        
                    </ul>
                </div> :
                <input style={{backgroundColor:islight?"#be3c32":"red"}} type="text" ref={inputSearchRef} className={Styled.searchInput} placeholder='Search...' />
            }
            {isopenSearch ?
                <span className={Styled.search} onClick={SearchHandler}><i class="fa-solid fa-magnifying-glass"></i></span>
                :
                <span className={Styled.search} onClick={SearchHandler}><i class="fa-solid fa-xmark"></i></span>
            }
        </div>
    )
}

export default NavBarThree