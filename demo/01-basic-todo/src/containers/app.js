import React, { Component } from 'react'
import { Form, Table } from './components'
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

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: [],
      task: ''
    }

    this.handleEvent = this.handleEvent.bind(this)
  }

  // load todo items from local storage
  componentDidMount () {
    const cachedTodos = localStorage.getItem(utils.storageKey)
    this.setState({todos: cachedTodos ? JSON.parse(cachedTodos) : []})
  }

  // event handlers for stateless functional components
  handleEvent ({type, payload}) {
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
      <React.Fragment>
        <h2>React TODO list</h2>

        <hr/>

        <Form handleEvent={this.handleEvent}
              eventTypes={utils.eventTypes}/>
        <Table handleEvent={this.handleEvent}
               eventTypes={utils.eventTypes}
               todos={this.state.todos}
               task={this.state.task}/>
      </React.Fragment>
    )
  }
}

export default App