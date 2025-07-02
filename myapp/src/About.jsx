import React from 'react'

function About(props) {
  return (
    <div>About<br/>

      {props.name}<br/>{props.address}
    </div>
  )
}

export default About