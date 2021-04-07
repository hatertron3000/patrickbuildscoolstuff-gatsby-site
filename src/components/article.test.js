import React from "react"
import renderer from "react-test-renderer"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import pageContext  from './__mock__/pageContext'

import Article from "./article"

describe("Article", () => {
    it("matches snapshot", () => {
        const {
            content,
            headline,
            publishedDate,
            thumbnail
        } = pageContext

        const tree = renderer
            .create(<Article 
                content={documentToReactComponents(JSON.parse(content.raw))}
                headline={headline}
                publishedDate={publishedDate}
                thumbnail={thumbnail}
            />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})