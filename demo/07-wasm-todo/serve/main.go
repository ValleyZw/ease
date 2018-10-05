package main

import (
	"log"
	"net/http"
)

const STATIC_URL = "/static/"

func main() {
	fs := http.FileServer(http.Dir("static/"))
	http.Handle(STATIC_URL, http.StripPrefix(STATIC_URL, fs))

	log.Fatal(http.ListenAndServe(":8080", http.FileServer(http.Dir("."))))
}
