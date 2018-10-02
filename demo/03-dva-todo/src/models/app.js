import { utils } from '../utils'

const isTodoExist = (todos, task) => todos.some(todo => todo.task === task)

const getTodoIndex = (todos, task) => todos.findIndex(todo => todo.task === task)

const newTodo = (task, isEdit = false, isCompleted = false) => ({task, isEdit, isCompleted})

const setStorageItem = item => localStorage.setItem(utils.storageKey, JSON.stringify(item))

export default {
  namespace: utils.modelName,

  state: {
    todos: [],
    task: ''
  },

  subscriptions: {
    setup ({dispatch, history}) {
      const cachedTodos = localStorage.getItem(utils.storageKey)
      dispatch({type: 'updateState', payload: {todos: cachedTodos ? JSON.parse(cachedTodos) : []}})
    },
  },

  effects: {
    * CREATE_TASK ({payload}, {put, select}) {
      const todos = yield select(state => state.app.todos)
      if (isTodoExist(todos, payload)) {
        alert(utils.duplicateTaskMsg)
      } else {
        const createdTodos = [...todos, newTodo(payload)]
        yield put({type: 'updateState', payload: {todos: createdTodos}})
        setStorageItem(createdTodos)
      }
    },

    * DELETE_TASK ({payload}, {put, select}) {
      const todos = yield select(state => state.app.todos)
      const filteredTodos = todos.filter(todo => todo.task !== payload)
      setStorageItem(filteredTodos)
      yield put({type: 'updateState', payload: {todos: filteredTodos}})
    },

    * FINISH_TASK ({payload}, {put, select}) {
      const todos = yield select(state => state.app.todos)
      todos[getTodoIndex(todos, payload.task)].isCompleted = !payload.isCompleted
      setStorageItem(todos)
      yield put({type: 'updateState', payload: {todos}})
    },

    * EDIT_TASK ({payload}, {put, select}) {
      const todos = yield select(state => state.app.todos)
      const index = getTodoIndex(todos, payload)
      todos[index].isEdit = true
      yield put({type: 'updateState', payload: {todos, task: todos[index].task}})
    },

    * UPDATE_TASK ({payload}, {put, select}) {
      yield put({type: 'updateState', payload: {task: payload}})
    },

    * SAVE_TASK ({payload}, {put, select}) {
      const {todos, task} = yield select(state => state.app)
      const index = getTodoIndex(todos, payload)
      if (!task || todos[index].task === task) {
        alert(utils.uniqueTaskMsg)
      } else {
        if (isTodoExist(todos, task)) {
          alert(utils.duplicateTaskMsg)
        } else {
          todos[index] = newTodo(task)
          yield put({type: 'updateState', payload: {todos}})
          setStorageItem(todos)
        }
      }
    },

    * CANCEL_TASK ({payload}, {put, select}) {
      const todos = yield select(state => state.app.todos)
      todos[getTodoIndex(todos, payload)].isEdit = false
      yield put({type: 'updateState', payload: {todos}})
    }
  },

  reducers: {
    updateState (state, {payload}) {
      return {...state, ...payload}
    },
  },
}

