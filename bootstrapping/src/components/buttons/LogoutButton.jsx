import React from 'react'

export default function LogoutButton() {

    const logoutHandler = () => {}

    
    return (
        <button
        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
        >
        Logout
        </button>
    )
}
