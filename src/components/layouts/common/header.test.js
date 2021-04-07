import React from "react"
import renderer from "react-test-renderer"

import Header from "./header"
import gatsbyConfig from "../../../../gatsby-config"


describe("Header", () => {
    it("matches snapshot", () => {
        const { title } = gatsbyConfig.siteMetadata
        const tree = renderer
            .create(<Header title={title} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})