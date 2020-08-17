import React from "react"
import { Text } from "theme-ui"
import { Link } from "gatsby"
import "../styles/style.css"

const PostsPage = ({ postsList }) => {
  return (
    <div>
      <h3> RECENT WRITING </h3>
      <div className="indexPost">
        {postsList.map(post => (
          <Text variant="post">
            <Link to={post.slug}>
              <h3> {post.title} </h3>
            </Link>

            <span>{post.publishedDate}</span>
          </Text>
        ))}
      </div>

      {/* <h3> SELECTED WORK </h3> */}
    </div>
  )
}

export default PostsPage
