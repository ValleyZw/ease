package main

import (
	"encoding/json"
	"fmt"
	"strconv"
	"syscall/js"
)

/**
 storageKey: 	browser localStorage key
 todoId: 		simple unique todo id
 todos: 		array of todos for dom update
 document: 		dom document
 alert:			browser alert event
 storage: 		browser localStorage
 */
const storageKey = "todos"

var (
	todoId                   uint64
	todos                    Todos
	document, alert, storage js.Value
)

type Todo struct {
	Id          uint64 `json:"id"`
	Task        string `json:"task"`
	IsCompleted bool   `json:"is_completed"`
	IsEdit      bool   `json:"is_edit"`
}

type Todos []Todo

func (t Todos) Index(f func(Todo) bool) int {
	for k, v := range t {
		if f(v) {
			return k
		}
	}
	return -1
}

func (t Todos) Any(f func(Todo) bool) bool {
	for _, v := range t {
		if f(v) {
			return true
		}
	}
	return false
}

func (t Todos) Filter(f func(Todo) bool) Todos {
	tf := make(Todos, 0)
	for _, v := range t {
		if f(v) {
			tf = append(tf, v)
		}
	}
	return tf
}

func init() {
	document = js.Global().Get("document")
	alert = js.Global().Get("alert")
	storage = js.Global().Get("localStorage")
}

func main() {
	c := make(chan struct{}, 0)

	initializeDom()
	registerCallbacks()
	<-c
}

func initializeDom() {
	todoJson := storage.Call("getItem", storageKey).String()
	if err := json.Unmarshal([]byte(todoJson), &todos); err != nil {
		panic(err)
	}

	for _, v := range todos {
		createTodo(v)
		if v.Id > todoId {
			todoId = v.Id
		}
	}
}

func registerCallbacks() {
	js.Global().Set("handleEvents", js.NewCallback(handleEvents))
}

func getElementById(id string) js.Value {
	return document.Call("getElementById", id)
}

func createTodo(todo Todo) {
	table := getElementById("TABLE_BODY")
	tr := document.Call("createElement", "tr")
	tr.Set("id", fmt.Sprintf("%d_TR", todo.Id))

	color, _ := formatState(todo)

	td1 := fmt.Sprintf("<td style=\"color: %s\" id=\"%d_TD_Task\">%s</td>", color, todo.Id, formatTask(todo))
	td2 := fmt.Sprintf("<td id=\"%d_TD_Actions\"> %s </td>", todo.Id, formatAction(todo))

	tr.Set("innerHTML", td1+td2)
	table.Call("appendChild", tr)
}

func formatTask(todo Todo) string {
	if todo.IsEdit {
		return fmt.Sprintf("<input type=\"text\" id=\"%d_TD_Task_Value\" value=\"%s\" autoFocus required></input>", todo.Id, todo.Task)
	}
	return fmt.Sprintf("<div id=\"%d_TD_Task_Value\">%s</div>", todo.Id, todo.Task)
}

func formatAction(todo Todo) string {
	if todo.IsEdit {
		return fmt.Sprintf(
			"<button onClick=\"handleEvents('SAVE', '%d');\" id=\"%d_TD_Save\">Save</button>"+
				"<button onClick=\"handleEvents('CANCEL', '%d');\" id=\"%d_TD_Cancel\">Cancel</button>",
			todo.Id, todo.Id, todo.Id, todo.Id)
	}

	_, name := formatState(todo)

	return fmt.Sprintf(
		"<button onClick=\"handleEvents('EDIT', '%d');\" id=\"%d_TD_Edit\">Edit</button>"+
			"<button onClick=\"handleEvents('FINISH', '%d');\" id=\"%d_TD_Finish\">%s</button>"+
			"<button onClick=\"handleEvents('DELETE', '%d');\" id=\"%d_TD_Delete\">Delete</button>",
		todo.Id, todo.Id, todo.Id, todo.Id, name, todo.Id, todo.Id)
}

func formatState(todo Todo) (color, name string) {
	if todo.IsCompleted {
		color = "#333"
		name = "Start"
	} else {
		color = "#ccc"
		name = "Finish"
	}
	return
}

func todoValidation(task string, f func()) {
	if !todos.Any(func(todo Todo) bool {
		return todo.Task == task
	}) && len(task) > 0 {
		f()
	} else {
		alert.Invoke("unique task is needed")
	}
}

func handleEvents(i []js.Value) {
	id, _ := strconv.Atoi(i[1].String())

	index := todos.Index(func(todo Todo) bool {
		return todo.Id == uint64(id)
	})

	switch i[0].String() {
	case "CREATE":
		todoInput := getElementById(i[1].String())
		task := todoInput.Get("value").String()
		todoValidation(task, func() {
			todoId++
			newTodo := Todo{Task: task, Id: todoId}
			todos = append(todos, newTodo)
			createTodo(newTodo)
			todoInput.Set("value", "")
		})
	case "DELETE":
		table := getElementById("TABLE_BODY")
		tr := getElementById(fmt.Sprintf("%d_TR", todos[index].Id))
		table.Call("removeChild", tr)

		todos = todos.Filter(func(todo Todo) bool {
			return todo.Id != uint64(id)
		})
	case "FINISH":
		todos[index].IsCompleted = !todos[index].IsCompleted

		tdTask := getElementById(fmt.Sprintf("%d_TD_Task", todos[index].Id))
		tdFinish := getElementById(fmt.Sprintf("%d_TD_Finish", todos[index].Id))

		color, name := formatState(todos[index])

		tdTask.Set("style", "color:"+color)
		tdFinish.Set("innerText", name)
	case "EDIT":
		todos[index].IsEdit = true
		tdActions := getElementById(fmt.Sprintf("%d_TD_Actions", todos[index].Id))
		tdActions.Set("innerHTML", formatAction(todos[index]))

		tdInput := getElementById(fmt.Sprintf("%d_TD_Task", todos[index].Id))
		tdInput.Set("innerHTML", formatTask(todos[index]))
	case "SAVE":
		todos[index].IsEdit = false
		tdTask := getElementById(fmt.Sprintf("%d_TD_Task", todos[index].Id))
		tdActions := getElementById(fmt.Sprintf("%d_TD_Actions", todos[index].Id))

		tdTaskValue := getElementById(fmt.Sprintf("%d_TD_Task_Value", todos[index].Id)).Get("value").String()

		todoValidation(tdTaskValue, func() {
			todos[index].Task = tdTaskValue
			tdTask.Set("innerHTML", formatTask(todos[index]))
			tdActions.Set("innerHTML", formatAction(todos[index]))
		})

	case "CANCEL":
		todos[index].IsEdit = false
		tdTask := getElementById(fmt.Sprintf("%d_TD_Task", todos[index].Id))
		tdActions := getElementById(fmt.Sprintf("%d_TD_Actions", todos[index].Id))

		tdTask.Set("innerHTML", formatTask(todos[index]))
		tdActions.Set("innerHTML", formatAction(todos[index]))
	}
	todoJson, _ := json.Marshal(todos)
	storage.Call("setItem", storageKey, string(todoJson))
}
