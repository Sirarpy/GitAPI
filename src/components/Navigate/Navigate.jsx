import React from "react";
import {HashRouter as Router, Link} from 'react-router-dom'
import {Route, Switch} from "react-router";
import Repos from "../Repos/Repos";
import Followers from "../Followers/Followers";
import Gists from "../Gists/Gists";
import Following from "../Following/Following";
import './navigation.css'


export default function Navigate(props) {
    return (
        <Router>
            <ul className='nav'>
                <li>
                    <Link to="/repositories"><img src="https://mozilla.github.io/foundation-icons/svgs/access.svg"
                                                  alt="repo"/><p>{props.info.public_repos} <span>Repositories</span></p>
                    </Link>
                </li>
                <li>
                    <Link to="/followers"><img src="https://mozilla.github.io/foundation-icons/svgs/circle-clubs.svg"
                                               alt="followers"/><p>{props.info.followers} <span>Followers</span></p>
                    </Link>
                </li>
                <li>
                    <Link to="/following"><img
                        src="https://mozilla.github.io/foundation-icons/svgs/learning-about-us.svg"
                        alt="following"/><p>{props.info.following} <span>Following</span></p></Link>
                </li>
                <li>
                    <Link to="/gists"><img src="https://mozilla.github.io/foundation-icons/svgs/holding-doc.svg"
                                           alt="gists"/><p>{props.info.public_gists} <span>Gists</span></p></Link>
                </li>
            </ul>

            <Switch>
                {/*<Route exact path="/" component={Repos}>*/}
                {/*    <Repos />*/}
                {/*</Route>*/}
                <Route exact path="/" >
                    <Repos />
                </Route>
                {/*<Route path="/repositories" component={Repos}/>*/}
                <Route exact path="/repositories" >
                    <Repos  userRepos = {props.info.repos_url} />
                </Route>
                <Route path="/followers" component={Followers}/>
                <Route path="/following" component={Following}/>
                <Route path="/gists" component={Gists}/>
            </Switch>
        </Router>

    )
}