import React, {useEffect, useState} from 'react'
import gitLogo from '../Header/headerImg/gitLogo.png'
import UserProfile from "../UserProfile/UserProfile";
import Navigate from "../Navigate/Navigate";
import './Header.css'
import axios from 'axios'

export default function Header() {
    let [userUrl, setUser] = useState('')

    function getUser(val) {
        setUser(
            userUrl = 'https://api.github.com/users/' + val.target.value
        )
    }

    const [user, getData] = useState([])

    useEffect(() => {
        axios
            .get(userUrl)
            .then(res => {
                getData(res.data)
            }
    )
    }, [userUrl])

    console.log(user)
    console.log(userUrl)

    return (
        <header>
            <div className="gitLogo">
                <img src={gitLogo} alt="logoImage"/>
            </div>
            <div className="searchRow">
                <input onChange={getUser} type="text" placeholder="Press User Name"/>
                <button>search</button>
            </div>
            <div>
                {
                    // user && user.id ?
                    user ?
                        <UserProfile  info={user} />
                        :
                        "user not found"
                }
                <Navigate info={user}/>
            </div>
        </header>
    )
}
