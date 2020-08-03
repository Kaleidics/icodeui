import React from "react"
import { Link } from "gatsby"

import Button from "../components/button"

const Post = props => {
  let tagsArray = props.tags.split(",")
  let tags = tagsArray.map(tag => {
    return <p className="post__tag">{tag}</p>
  });

  return (
    <div className="post">
      <Button link={"/"} name={"Let's go back"} />
      <div className="post__inner">
        <div className="post__card">
          <h2 className="post__heading">{props.title}</h2>
          <p className="post__date">{props.date}</p>
          <p className="post__description">{props.summary}</p>
          <div className="post__tag-container">
            {tags}
          </div>
        </div>
        <div
          className="post__content"
          dangerouslySetInnerHTML={{ __html: props.html }}
        ></div>
      </div>
    </div>
  )
}

export default Post
