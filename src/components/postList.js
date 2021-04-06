import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostList = () => {
    const { allContentfulPost } = useStaticQuery(
        graphql`
            query {
                allContentfulPost {
                edges {
                    node {
                    headline
                    slug
                    thumbnail {
                        description
                        title
                        gatsbyImageData
                    }
                    summary { 
                        summary
                    }
                        publishedDate
                    }
                }
                }
            }
        `
    )

    return (
        <>
            {allContentfulPost.edges.map(({ node }) => {
                const {
                    headline,
                    slug,
                    thumbnail,
                    summary,
                    publishedDate
                    } = node

                    const date = new Date(publishedDate)

                return <div key={slug} style={{display: "flex", marginBottom: "2em"}}>
                  <div style={{maxWidth: "150px"}}>
                    <GatsbyImage image={getImage(thumbnail)} style={{borderRadius: "50%"}} />
                  </div>
                  <div style={{marginLeft: "2em", marginBottom: "1em"}}>
                    <Link to={`/${slug}`}><h3>{headline}</h3></Link>
                    <div className="dateline">{date.toLocaleString()}</div>
                    <div style={{paddingTop: "1em"}}>{summary.summary}</div>
                  </div>
                </div>
            })}
        </>
    )
}

export default PostList