import React, { useState } from "react"
const BlogContext = React.createContext()

//  named export requires {} braces for import
export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([])

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