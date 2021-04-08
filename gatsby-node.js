const path = require('path')

exports.onCreateNode = ({node}) => {
    console.log(`Node created of type "${node.internal.type}`)
}

exports.createPages = async ({ graphql, actions, reporter}) => {
    const { createPage } = actions
    const posts = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            node_locale
            content {
              raw 
                references {
                  id
                  contentful_id
                  gatsbyImageData
              }
            }
            summary {
              summary
            }
            publishedDate
            slug
            headline
            thumbnail {
              gatsbyImageData
              title
              fixed(width: 250) {
                src
                srcSet
                width
                height
              }
            }
          }
        }
      }
    }      
    `)

    if(posts.error) {
      reporter.panicOnBuild(`Error querying Contentful for posts`)
    }

    const postTemplate = path.resolve('./src/templates/post.js')
    posts.data.allContentfulPost.edges.forEach(({ node }) => {
        const {
            content,
            summary,
            publishedDate,
            slug,
            headline,
            thumbnail
        } = node
        createPage({
            path: slug,
            component: postTemplate,
            context: {
                content,
                headline,
                summary,
                publishedDate,
                slug,
                headline,
                thumbnail
            }
        })
    })
}