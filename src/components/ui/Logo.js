import React from 'react'

function Logo(props) {
    return (
        <div {...props} >
            <svg width="115" height="30" viewBox="0 0 115 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="15" fill="var(--logo-color)"/>
            <circle cx="70" cy="15" r="15" fill="var(--logo-color)"/>
            <rect x="35" width="15" height="30" fill="var(--logo-color)"/>
            <path d="M100 0H115L100 30H85L100 0Z" fill="var(--logo-color)"/>
            </svg>
        </div>
    )
}

export default Logo
