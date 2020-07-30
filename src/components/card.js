import React from "react"
import { Link } from "gatsby"

const Card = props => {
  return (
    <Link className="card" to={props.linkPath}>
      <img className="card__thumbnail" src={props.image} />
      <h2 className="card__heading">{props.heading}</h2>
      <p className="card__date">{props.date}</p>
    </Link>
  )
}

export default Card
