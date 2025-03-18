import React, { useState } from "react"
const BlogContext = React.createContext()

const bPosts = [
  {title: 'Blog Post #1', },
  {title: 'Blog Post #2', },
  {title: 'Blog Post #3', },
  {title: 'Blog Post #4', },
]

//  named export requires {} braces for import
export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState(bPosts)

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}`}])
  }

  return (
    <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext