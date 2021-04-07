import React from "react"
import { Link } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Page from "../components/layouts/page"
import Article from "../components/article"
import * as styles from "./post.module.css"

const Post = ({pageContext}) => {
    const {
        content,
        headline,
        publishedDate,
        thumbnail
    } = pageContext

    const richTextOpts = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
            [BLOCKS.QUOTE]: (node, children) => <blockquote>
              <div className={styles.blockquoteContainer}>
                <div className={styles.leftQuotationMark}>&ldquo;</div>
                <div>{children}</div>
                <div className={styles.rightQuotationMark}>&rdquo;</div>
              </div>
            </blockquote>,
            [BLOCKS.EMBEDDED_ASSET]: node => {
              const ref = content.references.find(ref => ref.contentful_id === node.data.target.sys.id)
              const image = getImage(ref)
              return (
                <div className={styles.contentImage}>
                    <GatsbyImage image={image} alt={ref.description ? ref.description : ''} />
                </div>
              )
            }
        }
    }

    return (
    <Page>
      <Link to="/"><small>&lt; Home</small></Link>
      <Article 
      headline={headline}
      publishedDate={publishedDate}
      thumbnail={thumbnail}
      content={documentToReactComponents(JSON.parse(content.raw), richTextOpts)}
      />
    </Page>
    )
}

export default Post
