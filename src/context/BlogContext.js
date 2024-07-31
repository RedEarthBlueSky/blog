import React, { createContext, useState } from 'react'
// import { blogPosts } from '../data'

const BlogContext = createContext()

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([])

  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts, 
      { 
        title: `Blog Post #${blogPosts.length + 1}`, 
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      }
    ])
  }

  return (
    <BlogContext.Provider 
      value={{data: blogPosts, addBlogPost}}
    >
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext