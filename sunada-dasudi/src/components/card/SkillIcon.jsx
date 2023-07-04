import React from 'react'
import { motion } from "framer-motion";
import './SkillIcon.css'

function SkillIcon({ iconPath, delay }) {
    return (
        <motion.div
            className="skillIcon"
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1.2 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: delay
            }}
        >
            <img className='skillIcon__image' src={iconPath} alt="" />
        </motion.div>
    )
}

export default SkillIcon