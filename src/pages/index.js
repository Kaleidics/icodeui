import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"

import "../sass/main.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date
              dateDelimited
              thumbnail {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <section>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <Card
              linkPath={`/${edge.node.frontmatter.dateDelimited}/${edge.node.fields.slug}`}
              heading={edge.node.frontmatter.title}
              date={edge.node.frontmatter.date}
              image={edge.node.frontmatter.thumbnail.childImageSharp.fluid.src}
            />
          )
        })}
      </section>
    </Layout>
  )
}

export default IndexPage
