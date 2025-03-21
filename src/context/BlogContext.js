import React, { useReducer } from "react"
import createDataContext from "./createDataContext"

const BlogContext = React.createContext()

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, {id: Math.floor(Math.random() * 99999) ,title: `Blog Post #${state.length + 1}`}]
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload)
    case 'clear_blogposts':
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
const deleteBlogPost = (dispatch) => { 
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id})
  }
}
const editBlogPost = () => { dispatch({ type: 'edit_blogpost'})}

export const { Context, Provider } = createDataContext(
  blogReducer,
  {addBlogPost, clearBlogPosts, deleteBlogPost},
  [],
)