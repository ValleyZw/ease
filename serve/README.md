# Gin Serve

Minimal docker container for SPA.

<p align='center'>
<img src='https://github.com/ValleyZw/ease/tree/master/other/console.png' width='600' alt='console'>
</p>

## Content

- [Folder Structure](#folder-structure)
- [How to use](#how-to-use)
  - [Development](#development)
  - [Production](#production)
- [References](#references)
  - [Best Practice](#best-practice)
  - [Minimal container](#minimal-container)

### Folder Structure

```bash
gin-serve
  ├── .dockerignore
  ├── Dockerfile
  ├── main.go
  ├── Makefile
  ├── README.md
  └── html
      └── index.html
```

### How to use

#### Development

For development, [Golang](https://golang.org) and [Gin](https://gin-gonic.github.io/gin/
) are required.

- Check environment:

```bash
$ go version
```

- Get packages:

```bash
$ go get github.com/gin-contrib/static github.com/gin-gonic/gin
```

- Debug:

```bash
$ go run main.go
```

- Check result:
```bash
$ http localhost:80 (or curl localhost:80)
```

:v:

#### Production

For production, [Docker](https://www.docker.com/) is needed.

- Run docker engine:


- Check environment:

```bash
$ docker version
```

- Build image:

```bash
$ make build
```

- Check image info:

```bash
$ docker images gin-serve
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
gin-serve           latest              50009d989f4d        About an hour ago   9.85MB
```

>Compared with nginx:
```bash
$ docker images nginx
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
nginx               alpine              ebe2c7c61055        5 months ago        18MB
```

>:smiley: The image is small enough.

- Run container:

```bash
$ make run
```

- Check result:
```bash
$ http localhost:8080 (or curl localhost:8080)
```

:v:

### References

#### Best Practice

- [Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [Docker ENTRYPOINT & CMD: Dockerfile best practices](https://medium.freecodecamp.org/docker-entrypoint-cmd-dockerfile-best-practices-abc591c30e21)
- [Docker COPY: Dockerfile best practices](https://medium.com/the-code-review/docker-copy-dockerfile-best-practices-503704bee69f)


#### Minimal container

- [Use multi-stage builds](https://docs.docker.com/develop/develop-images/multistage-build/)
- [Builder pattern vs. Multi-stage builds in Docker](https://blog.alexellis.io/mutli-stage-docker-builds/)
- [Building Minimal Docker Containers for Go Applications](https://blog.codeship.com/building-minimal-docker-containers-for-go-applications/)
- [Create the smallest and secured golang docker image based on scratch](https://medium.com/@chemidy/create-the-smallest-and-secured-golang-docker-image-based-on-scratch-4752223b7324)
- [How to create the smallest possible Docker image for your Golang application](https://blog.cloud66.com/how-to-create-the-smallest-possible-docker-image-for-your-golang-application/)
- [3 simple tricks for smaller Docker images](https://learnk8s.io/blog/smaller-docker-images)