const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const post = path.resolve("src/templates/post.js")

  return graphql(
    `
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
  ).then(result => {
    if (result.errors) {
      reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      const { frontmatter } = node

      createPage({
        path: frontmatter.path,
        component: post,
        context: {
          path: frontmatter.path,
        },
      })
    })
  })
}
