import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./postList.module.css"

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
            {allContentfulPost
                .edges
                .map(({ node }) => {
                const {
                    headline,
                    slug,
                    thumbnail,
                    summary,
                    publishedDate
                    } = node

                    const date = new Date(publishedDate)

                return <div key={slug} className={styles.container}>
                  <div className={styles.thumbnailContainer}>
                    <Link to={`/${slug}`}>
                        <GatsbyImage 
                            image={getImage(thumbnail)}
                            className={styles.thumbnail}
                            alt={thumbnail.description}
                        />
                    </Link>
                  </div>
                  <div className={styles.listing}>
                    <Link to={`/${slug}`}><h3>{headline}</h3></Link>
                    <div className="dateline">{date.toDateString()}</div>
                    <div className={styles.blurb}>{summary.summary}</div>
                  </div>
                </div>
            })
            .reverse()}
        </>
    )
}

export default PostList
