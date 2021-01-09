import React from "react";
import Repos from "../Repos/Repos";
import Followers from "../Followers/Followers";
import Following from "../Following/Following";
import Gists from "../Gists/Gists";

const router = {
    "/": () => <Repos />,
    "/repos": () => <Repos />,
    "/followers": () => <Followers />,
    "/following": () => <Following />,
    "/gists": () => <Gists />
};
export default router;