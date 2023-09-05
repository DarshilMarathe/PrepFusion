import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';



export default function Navbar() {


  return (
    <div>
      <ul>
        <li><Link to='/'>Homepage</Link></li>
        <li><Link to='/mlpredictor'>Mlpage</Link></li>
        <li><Link to='/problemset'>Problemset</Link></li>
      </ul>
    </div>
  )
}
