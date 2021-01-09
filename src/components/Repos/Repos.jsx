import React, {useEffect, useState} from 'react'

import axios from 'axios'


export default function Repos(props) {
    const userRepos = props.userRepos;
    const [repo, getRepo] = useState('')

    useEffect(() => {
        axios
            .get(userRepos)
            .then(res => {
                    getRepo(res.data)
                }
            )
    }, [userRepos])

    let items;

    if (repo && repo.id) {
        items = repo.map((item) =>
            <div key={item.id}><p>{item.name}</p></div>
        )
    }


    return (
        <div className='repos'>
            <p>Repos</p>

            {items ? items : "no result"}

        </div>
    )

}