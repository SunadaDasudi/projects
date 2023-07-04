import * as React from "react";
import { motion } from "framer-motion";
import PersonIcon from '@mui/icons-material/Person';
import { Avatar } from "@mui/material";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const profileImageUrl = '../sunada-dasudi.jpg';

export const MenuItem = ({ Icon, text }) => {

    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="icon-placeholder" >
                {Icon == Avatar ? <Icon>
                    <Avatar src={profileImageUrl} />
                </Icon> : <Icon />}
            </div>
            {/* <div className="text-placeholder">
                {text}
            </div> */}
        </motion.li>
    );
};
