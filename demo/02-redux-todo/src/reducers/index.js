import { utils } from '../utils'

const {
  UPDATE_STATE
} = utils.actionTypes

const cachedTodos = localStorage.getItem(utils.storageKey)

const initState = {
  todos: cachedTodos ? JSON.parse(cachedTodos) : [],
  task: ''
}

export default (state = initState, {type, payload}) => {
  switch (type) {
    case UPDATE_STATE:
      return {...state, ...payload}
    default:
      return state
  }
}
