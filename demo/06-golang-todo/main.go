package main

import (
	"net/http"
	"html/template"
	"encoding/json"
)

const STATIC_URL = "/static/"

var temp *template.Template

type Request struct {
	Type    string `json:"type"`
	Payload string `json:"payload"`
}

type SaveValue struct {
	Old string `json:"old"`
	New string `json:"new"`
}

type Todo struct {
	Task        string
	IsCompleted bool
	IsEdit      bool
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

type TodoList struct {
	Title string
	Todos
}

var todos = TodoList{
	Title: "Golang TODO list",
	Todos: []Todo{},
}

func init() {
	temp = template.Must(template.ParseGlob("html/*"))
}

func main() {
	m := http.NewServeMux()
	m.HandleFunc("/", handleIndex)

	fs := http.FileServer(http.Dir("static/"))
	http.Handle(STATIC_URL, http.StripPrefix(STATIC_URL, fs))

	http.ListenAndServe(":80", m)
}

func handleIndex(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPut {
		decoder := json.NewDecoder(r.Body)
		var req Request
		err := decoder.Decode(&req)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		task := req.Payload
		switch req.Type {
		case "CREATE":
			if !todos.Todos.Any(func(todo Todo) bool {
				return todo.Task == task
			}) && len(task) > 0 {
				todos.Todos = append(todos.Todos, Todo{Task: task})
			}
		case "DELETE":
			todos.Todos = todos.Todos.Filter(func(todo Todo) bool {
				return todo.Task != task
			})
		case "FINISH":
			index := todos.Todos.Index(func(todo Todo) bool {
				return todo.Task == task
			})
			todos.Todos[index].IsCompleted = !todos.Todos[index].IsCompleted
		case "EDIT":
			index := todos.Todos.Index(func(todo Todo) bool {
				return todo.Task == task
			})
			todos.Todos[index].IsEdit = true
		case "SAVE":
			var saveValue SaveValue
			err := json.Unmarshal([]byte(task), &saveValue)
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			index := todos.Todos.Index(func(todo Todo) bool {
				return todo.Task == saveValue.Old
			})
			if len(saveValue.New) > 0 {
				todos.Todos[index].Task = saveValue.New
			}
			todos.Todos[index].IsEdit = false
		case "CANCEL":
			index := todos.Todos.Index(func(todo Todo) bool {
				return todo.Task == task
			})
			todos.Todos[index].IsEdit = false
		}
	}

	err := temp.ExecuteTemplate(w, "index.html", &todos)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
