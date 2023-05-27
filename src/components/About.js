import React from 'react'
import Navbar from './Navbar'

const About = (props) => {
  return (
    <div>
        <Navbar bio={props.bio}/>
        This is About us page
    </div>
  )
}

export default About