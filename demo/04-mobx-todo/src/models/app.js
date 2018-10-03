import { observable, action } from 'mobx'

import { utils } from '../utils'

const isTodoExist = (todos, task) => todos.some(todo => todo.task === task)

const getTodoIndex = (todos, task) => todos.findIndex(todo => todo.task === task)

const newTodo = (task, isEdit = false, isCompleted = false) => ({task, isEdit, isCompleted})

const setStorageItem = item => localStorage.setItem(utils.storageKey, JSON.stringify(item))

export default class Model {
  constructor () {
    const cachedTodos = localStorage.getItem(utils.storageKey)
    this.todos = cachedTodos ? JSON.parse(cachedTodos) : []
  }

  @observable todos = []
  @observable task = ''

  @action
  CREATE_TASK (payload) {
    if (isTodoExist(this.todos, payload)) {
      alert(utils.duplicateTaskMsg)
    } else {
      const createdTodos = [...this.todos, newTodo(payload)]
      setStorageItem(createdTodos)
      this.todos = createdTodos
    }
  }

  @action
  DELETE_TASK (payload) {
    this.todos = this.todos.filter(todo => todo.task !== payload)
    setStorageItem(this.todos)
  }

  @action
  FINISH_TASK (payload) {
    const tmp = this.todos.slice()
    tmp[getTodoIndex(tmp, payload.task)].isCompleted = !payload.isCompleted
    this.todos = tmp
    setStorageItem(this.todos)
  }

  @action
  EDIT_TASK (payload) {
    const tmp = this.todos.slice()
    const index = getTodoIndex(tmp, payload)
    tmp[index].isEdit = true
    this.task = tmp[index].task
    this.todos = tmp
  }

  @action
  UPDATE_TASK (payload) {
    this.task = payload
  }

  @action
  SAVE_TASK (payload) {
    const index = getTodoIndex(this.todos, payload)
    if (!this.task || this.todos[index].task === this.task) {
      alert(utils.uniqueTaskMsg)
    } else {
      if (isTodoExist(this.todos, this.task)) {
        alert(utils.duplicateTaskMsg)
      } else {
        const tmp = this.todos.slice()
        tmp[index] = newTodo(this.task)
        this.todos = tmp
        setStorageItem(this.todos)
      }
    }
  }

  @action
  CANCEL_TASK (payload) {
    const tmp = this.todos.slice()
    tmp[getTodoIndex(tmp, payload)].isEdit = false
    this.todos = tmp
  }
}