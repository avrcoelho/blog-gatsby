import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {edges.map(edge => {
          const {
            node: { frontmatter },
          } = edge

          return (
            <Link key={frontmatter.path} to={`/${frontmatter.path}`}>
              <h1>{frontmatter.title}</h1>
            </Link>
          )
        })}
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "MM")
            path
          }
        }
      }
    }
  }
`

export default IndexPage
