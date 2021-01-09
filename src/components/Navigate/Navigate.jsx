import React from "react";
import { HashRouter as Router, Switch, Link } from 'react-router-dom';
import Repos from "../Repos/Repos";
import Followers from "../Followers/Followers";
import Gists from "../Gists/Gists";
import Following from "../Following/Following";

// import { useRoutes, A } from "hookrouter";
// import router from "../Router/Router";

export default function Navigate(props) {
    // const routeResult = useRoutes(router);
    // console.log(routeResult)
    return(
        <Router>

            <ul>
                <li>
                    <Link to="/repositories">{props.info.public_repos} Repo</Link>
                </li>
                <li>
                    <Link to="/followers">{props.info.followers} Followers</Link>
                </li>
                <li>
                    <Link to="/following">{props.info.following} Following</Link>
                </li>
                <li>
                    <Link to="/gists">{props.info.public_gists} Gists</Link>
                </li>
            </ul>

            <Switch>
                <Router exact path="/"  component={Repos} />
                {/*<Router exact path="/repos"  component={Repos} />*/}
                <Router  path="/followers"  component={Followers} />
                <Router  path="/following"  component={Following} />
                <Router  path="/gists"  component={Gists} />
            </Switch>
        </Router>

        // <div>
        //     <div className="App">
        //         <A href="/">{props.info.public_repos} </A> <br />
        //         <A href="/repositories">{props.info.public_repos} Repositories</A> <br />
        //         <A href='/followers'>{props.info.followers} Followers</A>
        //         <A href="/following">{props.info.following} Following</A>
        //         <A href="/gists">{props.info.public_gists} Gists</A>
        //         <br />
        //         {routeResult || 'no page found'}
        //     </div>
        // </div>
    )
}