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
    <>
   <nav>
        <div className='logo'>
            <img src={Logo} alt="site-logo" />
        </div>
        <div className='menu-icon' onClick={handleClick}>
            <i className={ clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "menu-list" : "menu-list close"}>
            { menuList }
            <li><NavLink to="#" data-toggle="modal" data-target="#exampleModal">Login/Register</NavLink></li>
            <li><NavLink to="demo">Donate</NavLink></li>
        </ul>
   </nav>

            {/* Modal */}
<div style={{marginTop: "80px"}} className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default Header