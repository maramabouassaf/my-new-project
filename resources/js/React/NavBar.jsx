import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";
function NavBar() {
    const[mobile,setMobile]=useState(false)
    const nav=useNavigate()
return(
    <>
        <nav className="navbar">
        <img src="Images/logo.jpg" className={mobile ? "logoClick"  : "logo"} alt=""/>
        <ul
            className={mobile ? "nav-links-mobile " : "nav-links mt-2"} onClick={()=> setMobile(true)}>
      <Link to="/"> <li style={{listStyle:"none"}} className={mobile ? "fontFamily fontWeight lis1"  : "fontFamily fontWeight lis"}>Home</li></Link>
            <Link to="/architecture"> <li  style={{listStyle:"none"}} className={mobile ? "fontFamily fontWeight lis1"  : "fontFamily fontWeight lis"}>Architecture</li></Link>
            <Link to="/land">  <li  style={{listStyle:"none"}} className={mobile ? "fontFamily fontWeight lis1"  : "fontFamily fontWeight lis"}>Landscape</li></Link>
            <Link to="/design"> <li  style={{listStyle:"none"}} className={mobile ? "fontFamily fontWeight lis1"  : "fontFamily fontWeight lis"}>Interior Design</li></Link>
            <Link to="/fit">    <li  style={{listStyle:"none"}} className={mobile ? "fontFamily fontWeight lis1"  : "fontFamily fontWeight lis"}>Fit Out</li></Link>
            <Link to="/contracting">  <li  style={{listStyle:"none"}} className={mobile ? "fontFamily fontWeight lis1"  : "fontFamily fontWeight lis"}>Contracting</li></Link>
        </ul>
        <button className="mobile-menu-icon"  onClick={() => setMobile(!mobile)}>
            {mobile ? <FontAwesomeIcon icon={faXmark}/>  :  <FontAwesomeIcon icon={faBars}/>}
        </button>
        </nav>
        </>
)
}
export default NavBar
