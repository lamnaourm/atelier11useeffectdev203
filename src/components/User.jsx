import React, { useEffect, useState } from 'react'
import { MdOutlineAttachEmail } from 'react-icons/md'
import { FaCity } from 'react-icons/fa'
import { GiDoubleStreetLights } from 'react-icons/gi'
import { BiSolidUserDetail } from 'react-icons/bi'
import axios from 'axios'

export default function User({ user, handleClick, activeId }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (activeId === user.id) {
            const getPosts = async () => {
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + activeId)
                return res.data;
            }
            getPosts().then(posts => setPosts(posts))
        }
    }, [activeId])

    return (
        <div className='user'>
            <h3>Nom : {user.name}</h3>
            <p><MdOutlineAttachEmail /> {user.email}</p>
            <p><FaCity /> : {user.address.city} - <GiDoubleStreetLights /> : {user.address.street}</p>
            <button onClick={() => handleClick(user.id)} disabled={activeId === user.id}><BiSolidUserDetail /> Details user</button>

            {
                activeId === user.id && <div>
                    {
                        posts.map(p =>
                            <div>
                                <h5>{p.title}</h5>
                                <p>{p.body}</p>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    )
}
