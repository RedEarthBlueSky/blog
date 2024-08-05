import React, { useReducer } from 'react'

export default (reducer, actions, initialState) => {
  //  actions object will hold all the different action functions
  //  which describe how we are going to change the state object
  //  Create our Context
  const Context = React.createContext()

  //  Create Provider
  const Provider = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, initialState)

    //  actions is an object we need to loop through, that might have
    //  differing keys such as addBlogPost
    //  this will be a function that expects to be called with dispatch
    //  Inside there we will return a function that will do something
    //  ********************
    //  actions === { addBlogPost: (dispatch) => { return () => { } } }
    //  create function
    //  ********************

    return <Context.Provider value={{ state }}>{children}</Context.Provider>
  }  //  END Provider

  return { Context, Provider }
}