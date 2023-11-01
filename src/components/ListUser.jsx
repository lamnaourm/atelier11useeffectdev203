import React, { useState } from 'react'
import User from './User'

export default function ListUser({ users }) {
    const [activeId, setActiveId] = useState(0)
    return (
        <div className='listuser'>
            {users.map(u =>
                <User key={u.id} user={u} activeId={activeId} handleClick={(id) => setActiveId(id)}/>
            )}
        </div>
    )
}
