import React from 'react'
import './About.css'
import Card from '../components/card/Card'

function About() {
    return (
        <div className='about'>
            <p className="section__title">About Me.</p>
            <p className='section__description'>
                Highly skilled <strong>MERN</strong> stack developer with 8+ years of experience in building scalable and robust web applications.
                Strong expertise in front-end and back-end development, with a focus on JavaScript, React, Node.js, and MongoDB.
                Passionate about delivering high-quality code and exceptional user experiences.
            </p>
            <div className="about__card">
                <Card delay={0.5} text="MERN Stack Developer" />

            </div>
        </div>
    )
}

export default About