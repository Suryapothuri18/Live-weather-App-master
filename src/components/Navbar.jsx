import React from "react";

function Navbar(){
    return( <nav className="navbar">
        <div className="listItems">
          <ul>
            <li>Weather App</li>
            <li>About this app</li>
            <li>Usage guide</li>
          </ul>
        </div>
        <div className="searchBar">
          <form id="searchForm" action="">
            <input type="search" id="city" placeholder="Search" />
          </form>
          <button id="submit">Search</button>
        </div>
      </nav>
    )
}

export default Navbar;