import React,{useState}from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import Logo from '../../Assets/Logo.jpg'
import { Link,NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {

  const [click,seclick]=useState(false)

  const handleClick = () => {
    seclick(!click)
  }
  

  return (
    <div className='header'>
      <div className='container'>
        <div className='nav-bar'>
     <Link to="/">
        <img src={Logo} alt="logo" width={90} height={83}/>
      </Link>

      <ul className={click?"nav-menu active":"nav-menu"}>
        <li onClick={handleClick}>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink to="/menu" className="nav-link">Menu</NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink to="/delivery" className="nav-link">Delivery</NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li onClick={handleClick}>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
        <li onClick={handleClick}>
          <button className='id'>Order now</button>
        </li>
     </ul>

     <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={20} style={{ color: "#fff" }} />
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar