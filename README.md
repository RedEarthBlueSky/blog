Blog App

Basic app to document 

CRUD: create, read, update destroy, and how to best handle the movement of data throughout the app.

Issue with Data to centralize:  Provider Component to wrap application to manage data.  Redux Global State Management. Manage all state from a single location but rebuild/reimplement Redux from scratch using hooks.

Thinking about useReducer

const [state, dispatch ] = useReducer(reducer, initArg, init)

useReducer returns state and dispatch, and accepts the reducer and the initial value of the state as an argument.  It also accepts an init argument to work on state but this feels pretty edge case and I am going to disregard it here.

Reducer:  a function containing a switch statement which specifies how state is updated, in this case a state object.  If your state is not an object containing at least two key value pairs, you should probably be using useState instead.

Action:  Object argument accepted by the reducer to update state.  Generally takes the form of an object with a type value, and a payload value.  The type value determines the case of the switch, the payload some value to update the state according to the case.

Props parent to immediate child
Context parent to deeply nested child





