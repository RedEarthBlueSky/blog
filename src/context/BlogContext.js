import React, { createContext } from 'react'

const BlogContext = createContext()

//  accept a react components as an argument { children }
export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider>
      {children}
    </BlogContext.Provider>
  )
}