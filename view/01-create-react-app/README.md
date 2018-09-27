# Create React App

>One of the easiest way of creating a react app is by using [create-react-app](https://github.com/facebook/create-react-app).

## Content

- [Init Project](#init-project)
- [Folder Structure](#folder-structure)
- [How to use](#how-to-use)
  - [Development](#development)
  - [Production](#production)
- [References](#references)
  
### Init Project

[Node.js](https://nodejs.org) and the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) are required.

- Create app:

>Refer to [Create React App](https://github.com/facebook/create-react-app)

- Install packages:

```npm
$ yarn add react-router-dom
```

- Simplify files:

>Simplify default files and add routes

  
### Folder Structure

```bash
my-app
  ├── README.md
  ├── node_modules/
  ├── package.json
  ├── docker-compose.yml
  ├── Makefile
  ├── public
  │   ├── index.html
  │   ├── favicon.ico
  │   └── manifest.json
  └── src
      ├── index.js
      ├── registerServiceWorker.js
      └── pages/
          ├── about/
          ├── home/
          ├── login/
          └── App.js
```

### How to use

#### Development

- Debug:

```npm
$ yarn start
```

- Check result:
```bash
$ http localhost:3000 (or curl localhost:3000)
```

:v:

#### Production

- Build:

```npm
$ yarn build
```

- Deploy:

`docker-compose up` or `make deploy`

- Check result:
```bash
$ http localhost:8080 (or curl localhost:8080)
```

:v:

### References

- [Getting Started](https://reactjs.org/docs/getting-started.html)
- [How to build a web app with Go, Gin, and React](https://medium.freecodecamp.org/how-to-build-a-web-app-with-go-gin-and-react-cffdc473576)
- [Our Best Practices for Writing React Components](https://engineering.musefind.com/our-best-practices-for-writing-react-components-dec3eb5c3fc8)
- [How To Write Better Code In React](https://blog.bitsrc.io/how-to-write-better-code-in-react-best-practices-b8ca87d462b0)
- [React Router 4: A Practical Introduction](https://auth0.com/blog/react-router-4-practical-tutorial/)
- [React Router Tutorial](https://github.com/reactjs/react-router-tutorial)





