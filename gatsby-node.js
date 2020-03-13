const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const post = path.resolve("src/templates/post.js")

    resolve(
      graphql(
        `
          {
            site {
              siteMetada {
                title
              }
            }
          }
        `
      )
    ).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      console.log(result.data)
    })
  })
}
