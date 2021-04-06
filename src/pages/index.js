import React from "react"
import Page from "../components/layouts/page"
import PostList from "../components/postList"

export default function Home({data}) {
  return <Page>
    <h1>Some stuff</h1>
     <PostList />
  </Page>
}