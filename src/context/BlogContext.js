import React, { useReducer } from "react"
import createDataContext from "./createDataContext"

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

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'add_blogpost'}) 
  } 
}
const clearBlogPosts = (dispatch) => {
  return () => {
    dispatch({ type: 'clear_blogposts'})
  } 
}
const removeBlogPost = () => { dispatch({ type: 'remove_blogpost'})}
const editBlogPost = () => { dispatch({ type: 'edit_blogpost'})}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, clearBlogPosts },
  [],
)