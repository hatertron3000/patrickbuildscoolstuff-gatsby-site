import React from "react"
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"
import * as styles from './page.module.css'
import Header from "./common/header"

const Page = ({children, title}) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )

    const siteTitle = data.site.siteMetadata.title
    title = title
            ? `${siteTitle} | ${title}`
            : siteTitle
    
    return <div className="page">
        <Helmet>
            {
                <title>{title}</title>
            }
        </Helmet>
        <Header />
        <div className={styles.main}>
            { children }
        </div>
    </div>
}

export default Page