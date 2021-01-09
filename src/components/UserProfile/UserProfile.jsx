import React from "react";
import './userProfile.css'

export default function UserProfile(props) {
    return (
        <div>
            <div className='userProfile' key={props.info.id}>
                <div className='profileLeft'>
                    <img src={props.info.avatar_url} alt="avatar" className='userAvatar'/>
                    <h3>{props.info.login}</h3>
                    <a href={props.info.html_url} target='_blank' rel="noreferrer" className='userProfLink'>User
                        Profile</a>
                </div>
                <div className="profileRight">
                    <h2 className='userName'>{props.info.name}</h2>
                    <p className='userBio'>{props.info.bio}</p>
                    <ul className='userCont'>
                        <li className='userLocation'><img
                            src="https://mozilla.github.io/foundation-icons/svgs/map-marker.svg"
                            alt="map"/>{props.info.location ? props.info.location : "No Location"}</li>
                        <li className='userCompany'><img
                            src="https://mozilla.github.io/foundation-icons/svgs/skill-participate.svg"
                            alt="company"/>{props.info.company ? props.info.company : "NoCompany"}</li>
                        <li className='userEmail'><img src="https://mozilla.github.io/foundation-icons/svgs/email.svg"
                                                       alt="mail"/>{props.info.email ? props.info.email : "No Email"}
                        </li>
                    </ul>
                    <div className='userProfTiming'>
                        <span>Updated at : {props.info.updated_at ? props.info.updated_at.slice(0, 10) : ''}</span>
                        <span>Created at : {props.info.created_at ? props.info.created_at.slice(0, 10) : ''}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}