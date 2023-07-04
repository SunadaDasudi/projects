import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <li><a href='#'>Home</a> </li>
                    <li><a href='#'>About</a> </li>
                    {/* <li><a href='#'>Skills</a> </li>
                    <li><a href='#'>Work Experience</a> </li> */}
                    <li><a href='#'>Portfolio</a> </li>
                    <li><a href='#'>Contact</a> </li>
                </ul>
            </nav>

        </div>
    )
}

export default Header