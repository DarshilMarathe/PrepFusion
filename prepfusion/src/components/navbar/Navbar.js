import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png';



export default function Navbar() {

  return (
    <div className="navbar">
        <div className ="logo">
            <img src={logo} alt="Company Logo" />
            <span>Prep<span id="fusion">Fusion</span></span>
        </div>
        <ul>
            <li><Link to='/' className='navbar-no-underline'>Home</Link></li>
            <li><Link to='/upload'className='navbar-no-underline'>Upload</Link></li>
            <li><Link to='/problemset'className='navbar-no-underline'>PYQ's</Link></li>
            <li>Statistics</li>
            <li>About</li>
        </ul>

        <button className ="login-button">
        <Link to='/login'>Login</Link>
          </button>
    </div>

      // {/* <ul>
      //   <li><Link to='/'>Homepage</Link></li>
      //   <li><Link to='/mlpredictor'>Mlpage</Link></li>
      //   <li><Link to='/problemset'>Problemset</Link></li>
      // </ul> */}
  )
}
