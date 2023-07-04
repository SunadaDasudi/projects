import React from 'react'
import { motion } from "framer-motion";

import './Card.css'
import SkillIcon from './SkillIcon';

function Card({ delay, text }) {
    return (
        <motion.div
            className="card"
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1.2 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: delay
            }}
        >
            {text}
            <div className="card__skillIcon">
                <SkillIcon iconPath="./mongodb-icon.png" />
                <SkillIcon iconPath="./express-js.png" />
                <SkillIcon iconPath="./React.png" />
                <SkillIcon iconPath="./nodejs.png" />
            </div>
        </motion.div>
    )
}

export default Card