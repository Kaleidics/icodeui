import React from 'react'
import { Link } from 'gatsby'

const Button = (props) => {
  return (
  <Link className="btn" to={props.link} ><span>{props.name}</span></Link>
  )
}

export default Button