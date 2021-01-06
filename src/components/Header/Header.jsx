import React, { useEffect, useState } from 'react'
import gitLogo from '../Header/headerImg/gitLogo.png'
import './Header.css'
// import UserProfile from "../UserProfile/UserProfile"
import axios from 'axios'

export default function Header() {
  let [userUrl, setUser] = useState('')
  function getUser(val) {
    setUser(
      userUrl = 'https://api.github.com/users/' + val.target.value
    )
  }
  // console.log(userUrl);

  return (
    <header>
      <div className="gitLogo">
        <img src={gitLogo} alt="logoImage" />
      </div>
      <div className="searcharea">
        <input onChange={getUser} type="text" placeholder="Press User Name" />
        {/* <button onClick={getUser}>show user</button> */}

      </div>
      
    </header>
  )
}
