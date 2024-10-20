import React from 'react'
import '../../stylesheets/nav.css';

function TopNavbar() {
  return (
    <nav className='top-nav'>
      <div className="container">

        <ul>
            <li>
                <a href="#">link 1</a>
            </li>
            <li>
                <a href="#">link 2</a>
            </li>
            <li>
                <a href="#">link 3</a>
            </li>
        </ul>
        <a className='login' href="#">login</a>
        <select>
          <option value="English">Engligh</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>
    </nav>
  )
}

export default TopNavbar