import React, {useState, useRef, useContext} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'
import logo from '../Assets/Logo.jpg'
import scanner_icon from '../Assets/scanner.jpg'
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.jpg'

const Navbar = () => {

    const[menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    } 

  return (
    <div className='navbar'> 
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>SMARTSHOP</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=""/>
      <ul ref={menuRef} className='nav-menu'>
        <li className='dropdown' onMouseEnter={()=> setMenu("shop")} onMouseLeave={()=>setMenu("default")}>
        <Link style={{textDecoration: 'none'}} to='/'>Shop</Link>
                    {menu === "shop" && (
                        <div className='dropdown-content'>
                            <a href='https://www.amazon.com' target='_blank' rel='noopener noreferrer'>Amazon</a>
                            <a href='https://www.flipkart.com' target='_blank' rel='noopener noreferrer'>Flipkart</a>
                            <a href='https://www.meesho.com' target='_blank' rel='noopener noreferrer'>Meesho</a>
                        </div>
                    )}
          {menu === "shop" ? <hr/> : <></>}
        </li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}}to='/mens'>Men</Link>{menu=="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}}to='/womens'>Women</Link>{menu=="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}}to='/kids'>Kids</Link>{menu=="kids"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>}
        
        <Link to='/cart'><img src={scanner_icon} alt=""/></Link>

      </div>
    </div>
  )
}

export default Navbar
