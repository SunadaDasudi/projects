import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";


import Avatar from '@mui/material/Avatar';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactsIcon from '@mui/icons-material/Contacts';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => (
    <motion.ul variants={variants}>
        <MenuItem Icon={Avatar} />
        <MenuItem Icon={ViewTimelineIcon} />
        <MenuItem Icon={WorkOutlineIcon} />
        <MenuItem Icon={ContactsIcon} />
        <MenuItem Icon={LinkedInIcon} />
        <MenuItem Icon={FacebookIcon} />
        <MenuItem Icon={YouTubeIcon} />
    </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];