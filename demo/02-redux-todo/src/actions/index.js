import { utils } from '../utils'

const {
  UPDATE_STATE
} = utils.actionTypes

const isTodoExist = (todos, task) => todos.some(todo => todo.task === task)

const getTodoIndex = (todos, task) => todos.findIndex(todo => todo.task === task)

const newTodo = (task, isEdit = false, isCompleted = false) => ({task, isEdit, isCompleted})

const setStorageItem = item => localStorage.setItem(utils.storageKey, JSON.stringify(item))

export const CREATE_TASK = (state, payload) => dispatch => {
  const {todos} = state
  if (isTodoExist(todos, payload)) {
    alert(utils.duplicateTaskMsg)
  } else {
    const createdTodos = [...todos, newTodo(payload)]
    dispatch({type: UPDATE_STATE, payload: {todos: createdTodos}})
    setStorageItem(createdTodos)
  }
}

export const DELETE_TASK = (state, payload) => {
  const {todos} = state
  const filteredTodos = todos.filter(todo => todo.task !== payload)
  setStorageItem(filteredTodos)
  return ({type: UPDATE_STATE, payload: {todos: filteredTodos}})
}

export const FINISH_TASK = (state, payload) => {
  const {todos} = state
  todos[getTodoIndex(todos, payload.task)].isCompleted = !payload.isCompleted
  setStorageItem(todos)
  return ({type: UPDATE_STATE, payload: {todos}})
}

export const EDIT_TASK = (state, payload) => {
  const {todos} = state
  const index = getTodoIndex(todos, payload)
  todos[index].isEdit = true
  return ({type: UPDATE_STATE, payload: {todos, task: todos[index].task}})
}

export const UPDATE_TASK = (state, payload) => (
  {type: UPDATE_STATE, payload: {task: payload}}
)

export const SAVE_TASK = (state, payload) => dispatch => {
  const {todos, task} = state
  const index = getTodoIndex(todos, payload)
  if (!task || todos[index].task === task) {
    alert(utils.uniqueTaskMsg)
  } else {
    if (isTodoExist(todos, task)) {
      alert(utils.duplicateTaskMsg)
    } else {
      todos[index] = newTodo(task)
      dispatch({type: UPDATE_STATE, payload: {todos}})
      setStorageItem(todos)
    }
  }
}

export const CANCEL_TASK = (state, payload) => {
  const {todos} = state
  todos[getTodoIndex(todos, payload)].isEdit = false
  return ({type: UPDATE_STATE, payload: {todos}})
}