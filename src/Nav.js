import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>{
        if(window.scrollY > 100){
            handleShow(true);
        }else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll",null);
    }
  
}, [])
  return (
    <div className={`nav ${show && "nav_black"}`}>
        {/* logo */}
        <img className='nav_logo' 
        src = "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" alt = "Netflix Logo" />

        

        <img className='nav_avatar' 
        src = "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg" alt = "Your Netflix Avatar" />

        
        {/* <button className='signIn'>SignIn</button> */}
    </div>
  )
}

export default Nav;