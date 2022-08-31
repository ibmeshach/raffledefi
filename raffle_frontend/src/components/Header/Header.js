import React, { useState } from "react";
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from "react-router-dom";


import { ConnectButton } from "web3uikit"
import "./Header.css";
// import rlogo from '../../assets/rlogo.png'
import rlogo from '../../assets/rrlogo.svg'
import rd from '../../assets/rd.png'
import rd1 from '../../assets/rd1.png'
// import rlogo1 from '../../assets/rlogo1.png'

const Header = () => {

  const [isOpen, setisOpen] = useState(false)

  return (
    <div className="header">
      <nav className="navbar">
        {/* <span className="nav__logo">
          <img className="logo-img" src={rd} alt="logo" />
        </span> */}
        <div className={`nav__items  ${isOpen && 'open'}`}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About Us</NavLink>
          <NavLink to='/transactions'>My Transations</NavLink>
          <NavLink to='/contact'>Contact Us</NavLink>

        </div>

        <div  className="moralis"><ConnectButton moralisAuth={false} /></div>
      
       <div onClick={() => setisOpen(!isOpen)} className={`nav__toggle ${isOpen && 'open'}`}>
          <div className="bar"></div>
        </div>
      </nav>
           
      
    </div>

  );
};

export default Header;