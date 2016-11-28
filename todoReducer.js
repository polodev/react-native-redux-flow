// Initial state of the store
import constants from './todoConst';
const initialState = {
  todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
}
export const reducer = (state = initialState, action) => {
  const {todos} = state
  const {type, payload} = action
  switch (type) {
    case constants.ADD: {
      return {
        ...state,
        todos: [payload, ...todos],
      }
    }
    case constants.REMOVE: {
      return {
        ...state,
        todos: todos.filter((todo, i) => i !== payload),
      }
    }
  }

  return state
}


/**
 switch(action.type)
 return {
  ...state,
  todos : [...todos, payload]
 }
 */

