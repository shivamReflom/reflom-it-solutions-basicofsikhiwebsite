import React, {useState} from 'react';
import "./Header.css";
import { MenuList } from './MenuList';
import Logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [clicked, setClicked] = useState(false);

    const menuList = MenuList.map(({ url, title }, index) =>{
        return(
        <li key={index}>
            <NavLink exact to={url} activeClassName="active">{title}</NavLink>
        </li>
        ); 
    });

    const handleClick = () =>{
        setClicked(!clicked);
    }

  return (
   <nav>
        <div className='logo'>
            <img src={Logo} alt="site-logo" />
        </div>
        <div className='menu-icon' onClick={handleClick}>
            <i className={ clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "menu-list" : "menu-list close"}>
            { menuList }
            <li><NavLink to="/demo">Login/Register</NavLink></li>
            <li><NavLink to="demo">Donate</NavLink></li>
        </ul>
   </nav>
  )
}

export default Header