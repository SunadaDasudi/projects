import React from 'react'
import './Home.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Home() {
    return (
        <div className='home'>
            <div className="home__profileText">
                <p>Empowering Success with MERN Stack Development</p>
                <p>HI, I'M SUNADA DASUDI.</p>

                <MoreHorizIcon />
            </div>
            <div className="home__profileImage">
                <img src="../sunada-dasudi.jpg" alt="" />
            </div>
        </div>
    )
}

export default Home