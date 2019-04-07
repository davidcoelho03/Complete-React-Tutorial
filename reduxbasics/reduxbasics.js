
// we must add the redux cdn -> https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.1/redux.js

const { createStore } from Redux;

const initState = {
  todos: [],
  posts: []
}

// state -> state of the store
//need to create initial state
function myreducer(state = initState, action) {

  if(action.type === 'ADD_TODO'){
    return {
      // returning object with updated todos
      todos: [...state.todos, action.todo]
    }
  }
}

// this creates the store and uses the myreducer as the Reducer
const store = createStore(myreducer);

const todoAction = {
  type: 'ADD_TODO',
  todo: 'buy milk'
};

// we need to dispatch the action 
store.dispatch(todoAction);