import React from 'react'
import SideBarNav from './SideBarNav'
import { useSelector } from 'react-redux'

export default function sidebar() {
    const authStatus = useSelector((state) => state.auth.isAuthenticated)
    console.log('sideNav:isAuthenticated: ', authStatus)
    return (
        <div>
            <form id="search-form" role="search" className="mb-4 flex">
                <input
                    id="q"
                    aria-label="Search contacts"
                    placeholder="Search"
                    type="search"
                    name="q"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <div id="search-spinner" aria-hidden="true" className="w-6 h-6 ml-2"></div>
                <div className="sr-only" aria-live="polite"></div>
            
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    New
                </button>
            
            </form>
            <SideBarNav />
        </div>
    )
}
