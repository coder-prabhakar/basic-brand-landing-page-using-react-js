import '../css/header.css'
import BrandImage from '../img/brand-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Header() {

  const [menuButton, setMenuButton] = useState(true);

    return (
      <header>
          <FontAwesomeIcon icon={menuButton ? faBars : faXmark} 
            className='menuBtn'
            onClick={()=>setMenuButton(!menuButton)}
          />
          <img src={BrandImage} className='brand-img' alt="brand-logo" />
          <nav className={menuButton ? "" : "navbar-active"}>
            {
                ["MENU","LOCATION","ABOUT","CONTACT"].map((value,index)=>
                    <a href="#" key={index}>{value}</a>
                )
            }
          </nav>
          <button className='loginBtn'>Login</button>
      </header>
    )
}