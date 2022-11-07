import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"

export default function Home(data) {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <PostItem data={data} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
      allPostsJson {
          nodes {
          category
          content
          date
          id
          slug
          image
          title
          }
      }
  }
`