# WebAssembly TODO App

>Build todo app with [golang](https://golang.org/) [WebAssembly](https://en.wikipedia.org/wiki/WebAssembly).

## Content

- [Init Project](#init-project)
- [Folder Structure](#folder-structure)
- [How to use](#how-to-use)
  - [Development](#development)
  - [Production](#production)
- [References](#references)
- [Summary](#summary)


### Init Project

[^Go 1.11](https://golang.org) and [docker](https://www.docker.com) are required.

:v:

### Folder Structure

```bash
my-app
  ├── .dockerignore
  ├── README.md
  ├── Makefile
  ├── main.go
  ├── Dockerfile
  ├── index.html
  ├── wasm_exec.js
  ├── main.go
  ├── static
  │   └── favicon.ico
  └── serve
      └── main.go
```

### How to use

#### Development

- Debug:

Set `GOOS=js` and `GOARCH=wasm` environment variables to compile for WebAssembly:

```bash
$ GOOS=js GOARCH=wasm go build -o main.wasm
```

Copy the JavaScript support file:

```bash
$ cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" .
```

Serve those three files (`index.html`, `wasm_exec.js`, and `main.wasm`) to a web browser.

```bash
$ go run serve/main.go
```


- Check result:
```bash
$ http localhost:80 (or curl localhost:80)
```

:v:

#### Production

- Build:

```bash
$ make build
```

- Deploy:

`docker-compose up` or `make deploy`

- Check result:
```bash
$ http localhost:8080 (or curl localhost:8080)
```

:v:

### References

- [WebAssembly](https://github.com/golang/go/wiki/WebAssembly)
- [Go WebAssembly Tutorial - Building a Calculator Tutorial](https://tutorialedge.net/golang/go-webassembly-tutorial/)
- [Creating Web Components in Go + wasm](https://matthewphillips.info/programming/wasm-golang-ce.html)
- [Go 1.11: WebAssembly for the gophers](https://medium.zenika.com/go-1-11-webassembly-for-the-gophers-ae4bb8b1ee03)
- [wasm-experiments](https://github.com/johanbrandhorst/wasm-experiments)
- [syscall/js](https://golang.org/pkg/syscall/js/)
- [Build web application with Golang](https://astaxie.gitbooks.io/build-web-application-with-golang/en)
- [GopherJS vs WebAssembly for Go](https://dev.to/hajimehoshi/gopherjs-vs-webassembly-for-go-148m)
- [WebAssembly excursion with Go](https://medium.com/@djboris/webassembly-excursion-with-go-2bb3eded536e)
- [Web Assembly and Go: A look to the future](https://brianketelsen.com/web-assembly-and-go-a-look-to-the-future/)

### Summary

>The perfect combination of sexy and cute