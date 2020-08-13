import React from "react"
import { Text } from "theme-ui"
import { Link } from "gatsby"

const PostsPage = ({ postsList }) => {
  return (
    <div>
      {postsList.map(post => (
        <div>
          <Text variant="post">
            <Link to={post.slug}>
              {" "}
              <h3> {post.title} </h3>{" "}
            </Link>
            <span>{post.publishedDate}</span>
          </Text>
        </div>
      ))}
    </div>
  )
}

export default PostsPage
