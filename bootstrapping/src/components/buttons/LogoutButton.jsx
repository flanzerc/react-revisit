import React from 'react'
import { useDispatch } from 'react-redux'
import authServiceObj from '../../services/authService'
import { logout } from '../../store/UserAuthSlice'


export default function LogoutButton() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        console.log('logoutcalled')
        authServiceObj.logout()
            .then(() => {
                dispatch(logout())
        })
    }

    
    return (
        <button
        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
        >
        Logout
        </button>
    )
}
