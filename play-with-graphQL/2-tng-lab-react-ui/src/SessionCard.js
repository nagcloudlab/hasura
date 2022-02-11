


import React from 'react'


function SessionCard({ session }) {
    return (
        <div className='card card-body'>
            <div className='display-3'>{session.title}</div>
            {session.speakers.map((sp, idx) => {
                return (
                    <div className='display-6' key={idx}>
                        {sp.name}
                        <div style={{ fontSize: '16px' }}>{sp.bio}</div>
                    </div>

                )
            })}
        </div>
    )
}

export default SessionCard;