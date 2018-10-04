import React, { Component } from 'react'
import { utils } from '../utils'

const {
  CREATE_TASK,
  DELETE_TASK,
  FINISH_TASK,
  EDIT_TASK,
  UPDATE_TASK,
  SAVE_TASK,
  CANCEL_TASK
} = utils.eventTypes

const cachedTodos = localStorage.getItem(utils.storageKey)

const initState = {
  todos: cachedTodos ? JSON.parse(cachedTodos) : [],
  task: ''
}

export const Context = React.createContext(initState)

export default class Provider extends Component {
  state = initState

  // event handlers for stateless functional components
  handleEvent = ({type, payload}) => {
    let index = 0

    const isTodoExist = task => this.state.todos.some(todo => todo.task === task)

    const getTodoIndex = task => this.state.todos.findIndex(todo => todo.task === task)

    const setStorageItem = item => localStorage.setItem(utils.storageKey, JSON.stringify(item))

    const newTodo = (task, isEdit = false, isCompleted = false) => ({task, isEdit, isCompleted})

    const setState = state => this.setState(() => state)

    switch (type) {
      case CREATE_TASK:
        if (isTodoExist(payload)) {
          alert(utils.duplicateTaskMsg)
        } else {
          const createdTodos = [...this.state.todos, newTodo(payload)]
          setState({todos: createdTodos})
          setStorageItem(createdTodos)
        }
        break
      case DELETE_TASK:
        const filteredTodos = this.state.todos.filter(todo => todo.task !== payload)
        setState({todos: filteredTodos})
        setStorageItem(filteredTodos)
        break
      case FINISH_TASK:
        this.state.todos[getTodoIndex(payload.task)].isCompleted = !payload.isCompleted
        setState({todos: this.state.todos})
        setStorageItem(this.state.todos)
        break
      case EDIT_TASK:
        index = getTodoIndex(payload)
        this.state.todos[index].isEdit = true
        this.state.task = this.state.todos[index].task
        setState({todos: this.state.todos})
        break
      case UPDATE_TASK:
        setState({task: payload})
        break
      case SAVE_TASK:
        index = getTodoIndex(payload)
        if (!this.state.task || this.state.todos[index].task === this.state.task) {
          alert(utils.uniqueTaskMsg)
        } else {
          if (isTodoExist(this.state.task)) {
            alert(utils.duplicateTaskMsg)
          } else {
            this.state.todos[index] = newTodo(this.state.task)
            setState({todos: this.state.todos})
            setStorageItem(this.state.todos)
          }
        }
        break
      case CANCEL_TASK:
        this.state.todos[getTodoIndex(payload)].isEdit = false
        setState({todos: this.state.todos})
        break
    }
  }

  render () {
    return (
      <Context.Provider
        value={{
          ...this.state,
          handleEvent: this.handleEvent,
          eventTypes: utils.eventTypes,
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}