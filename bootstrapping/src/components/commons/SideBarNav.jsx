import React from 'react'

export default function SideBarNav() {
  return (
    <nav>
        <ul>
            <li>
                <a href={`/contacts/1`} className="text-blue-500 hover:text-blue-700">
                    Your Name
                </a>
            </li>
            <li>
                <a href={`/contacts/2`} className="text-blue-500 hover:text-blue-700">
                    Your Friend
                </a>
            </li>
        </ul>
    </nav>
  )
}
