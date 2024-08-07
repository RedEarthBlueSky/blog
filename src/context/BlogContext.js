import createDataContext from './createDataContext'

console.log(createDataContext)

const blogReducer = (state, action) => {
  const id = action.payload.title.replace(/\s+/g, '')
  switch(action.type) {
    case 'add_blogpost':
      return [...state, {
        id: state.length + id,
        title: action.payload.title,
        content: action.payload.content
      }]
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload)
    default:
      return state
  }
}

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: {title: title, content: content}})
    callback()
  }
}

//  format of an async function that checks the data has been 
//  recieved at the api and api updated, perhaps a token back before callback
const addBlogPostAsync = dispatch => {
  return async (title, content, callback) => {
    try {
      await axios.post('sometext', title, content)
      dispatch({ type: 'add_blogpost', payload: {title: title, content: content}})
      callback()
    } catch(e) {
      console.log('error: ', e)
    }
  }
}

const deleteBlogPost = dispatch => {
  return (id) => {
    // console.log('delete', id)
    dispatch({ type: 'delete_blogpost', payload: id})
  }
}

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost },
    []
  )