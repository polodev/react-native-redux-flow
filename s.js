// Helper functions to dispatch actions, optionally with payloads
import constants from 'todoConst'
export const actionCreators = {
  add: (item) => {
    return {type: constants.ADD, payload: item}
  },
  remove: (index) => {
    return {type: constants.REMOVE, payload: index}
  }
}