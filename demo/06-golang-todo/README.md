# Golang TODO App

>Build todo app with [golang](https://golang.org/). 

## Content

- [Init Project](#init-project)
- [Folder Structure](#folder-structure)
- [How to use](#how-to-use)
  - [Development](#development)
  - [Production](#production)
- [References](#references)
- [Summary](#summary)


### Init Project

[golang](https://golang.org) and [docker](https://www.docker.com) are required.

:v:
  
### Folder Structure

```bash
my-app
  ├── .dockerignore
  ├── README.md
  ├── docker-compose.yml
  ├── Makefile
  ├── main.go
  ├── Dockerfile
  ├── static
  │   └── favicon.ico
  └── html
      └── index.html
```

### How to use

#### Development

- Debug:

```bash
$ go run main.go
```

Check result:
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

- [The Go Programming Language](https://www.amazon.com/Programming-Language-Addison-Wesley-Professional-Computing/dp/0134190440)
- [Go (programming language)](https://en.wikipedia.org/wiki/Go_(programming_language))
- [Template](https://golang.org/pkg/text/template/)
- [Why I Love Golang](https://medium.com/@saginadir/why-i-love-golang-90085898b4f7)
- [Golang Web Apps](https://reinbach.com/blog/golang-webapps-1/)
- [Go Web Examples](https://gowebexamples.com/)
- [Golang & Angular Series](https://auth0.com/blog/developing-golang-and-angular-apps-part-1-backend-api/#)
- [Serving HTML with Golang](https://meshstudio.io/blog/2017-11-06-serving-html-with-golang/)
- [Build Web Application with Golang](https://astaxie.gitbooks.io/build-web-application-with-golang/en/)
- [Building a (Web) HTTP Server with Go](https://itnext.io/building-a-web-http-server-with-go-6554029b4079)
- [Building a Go Web App from Scratch to Deploying on Google Cloud](https://medium.com/google-cloud/building-a-go-web-app-from-scratch-to-deploying-on-google-cloud-part-1-building-a-simple-go-aee452a2e654)
- [Building Scalable Web Services in Golang](https://medium.com/myntra-engineering/my-journey-with-golang-web-services-4d922a8c9897)
- [Build a web application in Go ](https://www.sohamkamani.com/blog/2017/09/13/how-to-build-a-web-application-in-golang/)
- [Golang Templates-1: Introduction](https://hackernoon.com/golang-template-1-bcb690165663)
- [Golang Template-2: Template composition and how to organize template files ?](https://hackernoon.com/golang-template-2-template-composition-and-how-to-organize-template-files-4cb40bcdf8f6)
- [Understanding Go’s template package](https://medium.com/@IndianGuru/understanding-go-s-template-package-c5307758fab0)
- [The Ultimate Guide to Writing Dockerfiles for Go Web-apps](https://blog.hasura.io/the-ultimate-guide-to-writing-dockerfiles-for-go-web-apps-336efad7012c)
- [Why I Don’t Use Go Web Frameworks](https://medium.com/code-zen/why-i-don-t-use-go-web-frameworks-1087e1facfa4)

### Summary

>Just for fun, refresh entire page is inefficient
