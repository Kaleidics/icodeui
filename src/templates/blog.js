import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Post from "../components/post"

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        summary
        tags
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <Post
        title={props.data.markdownRemark.frontmatter.title}
        date={props.data.markdownRemark.frontmatter.date}
        summary={props.data.markdownRemark.frontmatter.summary}
        tags={props.data.markdownRemark.frontmatter.tags}
        html={props.data.markdownRemark.html}
      />
    </Layout>
  )
}

export default Blog
