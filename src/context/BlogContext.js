import React, { useReducer } from "react"
const BlogContext = React.createContext()

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost' :
      return [...state, { title: `Blog Post #${state.length + 1}`}]
    case 'clear_blogposts' :
      return []
    
    default :
      return state
  }
}

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch ] = useReducer(blogReducer, [])

  const addBlogPost = () => { dispatch({ type: 'add_blogpost'}) }
  const clearBlogPosts = () => { dispatch({ type: 'clear_blogposts'})}
  const removeBlogPost = () => { dispatch({ type: 'remove_blogpost'})}
  const editBlogPost = () => { dispatch({ type: 'edit_blogpost'})}

  return (
    <BlogContext.Provider value={{data: blogPosts, addBlogPost, clearBlogPosts }}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext