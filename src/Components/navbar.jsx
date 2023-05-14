import React from 'react'
import "./navbar.css"
export const Navbar = () => {
  return (
     <>
       <div className="navbarparent" >
         <img src="./rotten.png" alt="" className="logo" />
          <form action="">
            <input type="text" name="" id="" placeholder='Search for movies'/>
          </form>
          <ul>
            <li>MOVIES</li>
            <li>TV SHOWS</li>
            <li>MOVIE TRIVIA</li>
            <li>NEWS</li>

          </ul>
       </div>
     </>
  )
}
