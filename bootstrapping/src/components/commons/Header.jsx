import React from 'react'
import {Container, Logo, LogoutButton} from "../index.js"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {login as login} from '../../store/UserAuthSlice.js'


export default function Header() {

    // TODO: change to useSelector here
    const authStatus = useSelector((state) =>  state.auth.isAuthenticated);
    // console.log('auth inside header ' , authStatus);
    const loadpage = (pageurl) => {
        navigate(pageurl)
    }   

    const navigate = useNavigate()

    const navItems = [
        {
          name: 'Home',
          slug: "/",
          active: true
        }, 
        {
          name: "Login",
          slug: "/login",
          active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]


    
    return (
        <div>
            <header className='py-3 shadow bg-gray-300'>
                <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                    <Link to='/'>
                        <Logo width='70px' />
                    </Link>
                    </div>
                    <ul className='flex ml-auto'>
                    {navItems.map((item) => 
                    item.active ? (
                        <li key={item.name}>
                        <button 
                        onClick={() => {
                            loadpage(item.slug)
                        }}
                        className='inline-block px-6 py-2
                            duration-200 hover:bg-blue-100 rounded-full'>
                            {item.name}
                        </button>
                        </li>
                    ) : null)}
                    {authStatus && (
                        <li><LogoutButton /></li>
                    )}
                    </ul>
                </nav>
                </Container>
            </header>
        </div>
    )
}
