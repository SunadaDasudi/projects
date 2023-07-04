import React from 'react'
import { motion } from 'framer-motion';

import WidgetsIcon from '@mui/icons-material/Widgets';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactsIcon from '@mui/icons-material/Contacts';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

import './HeaderSecondary.css'

function HeaderSecondary() {
    const profileImageUrl = '../sunada-dasudi.jpg';

    return (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div>
                <WidgetsIcon />
            </div>
            {/* Your component content */}
            <div className='headerSecondary'>
                <div className="headerSecondary__icon">
                    <Avatar src={profileImageUrl} sx={{ width: 25, height: 25 }}>
                        <PersonIcon />
                    </Avatar>
                </div>
                <div className="headerSecondary__icon">
                    <ViewTimelineIcon />
                </div>
                <div className="headerSecondary__icon">
                    <WorkOutlineIcon />
                </div>
                <div className="headerSecondary__icon">
                    <ContactsIcon />
                </div>
                <div className="headerSecondary__icon">
                    <LinkedInIcon />
                </div>
                <div className="headerSecondary__icon">
                    <FacebookIcon />
                </div>
                <div className="headerSecondary__icon">
                    <YouTubeIcon />
                </div>

            </div>

        </motion.div>
    )
}

export default HeaderSecondary