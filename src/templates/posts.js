import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import PostsPage from "../components/PostsPage"

const Posts = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        nodes {
          title
          slug
          publishedDate
        }
      }
    }
  `)

  const posts = data.allContentfulBlogPost.nodes

  return (
    <Layout>
      {" "}
      <PostsPage postsList={posts} />{" "}
    </Layout>
  )
}

export default Posts
