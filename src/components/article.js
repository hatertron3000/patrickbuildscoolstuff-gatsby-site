import React from "react"
import * as styles from "./article.module.css"

const Post = ({
    headline,
    publishedDate,
    thumbnail,
    published,
    content,
}) => {
    const date = new Date(publishedDate)

    return <div>
        <h1>{headline}</h1>
        <div className={styles.dateline}>
            <p>{date.toLocaleString()}</p>
        </div>
        <div>
            {content}
        </div>
    </div>
}

export default Post
