import React, { useState } from "react"
const BlogContext = React.createContext()

const BlogPosts = [
  {title: 'Blog Post #1', },
  {title: 'Blog Post #2', },
  {title: 'Blog Post #3', },
  {title: 'Blog Post #4', },
  {title: 'Blog Post #5', },
  {title: 'Blog Post #6', },
  {title: 'Blog Post #7', },
]

//  named export requires {} braces for import
export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={BlogPosts}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext