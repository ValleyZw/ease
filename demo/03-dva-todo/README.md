# DVAjs TODO App

>Build todo app with [dvajs](https://dvajs.com/). 

## Content

- [Init Project](#init-project)
- [Folder Structure](#folder-structure)
- [How to use](#how-to-use)
  - [Development](#development)
  - [Production](#production)
- [References](#references)


### Init Project

[Node.js](https://nodejs.org) and the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) are required.

- Init project:

```npm
$ yarn init -y
```

- Add packages: 

    - React
    
```npm
$ yarn add react react-dom
```


- Add packages: 

    - dva
    
```npm
$ yarn add dva
```

- Add packages: 

    - react-scripts
    
```npm
$ yarn add --dev react-scripts
```

- Add scripts:

>add scripts bellow to package.json
```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}
``` 

:v:
  
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
  │   └── favicon.ico
  └── src
      ├── index.js
      ├── router.js
      ├── models/
      ├── utils/
      └── containers/
          ├── components/
          └── app.js
```

### How to use

#### Development

- Debug:

```npm
$ yarn start
```

Check result:
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

- [knowledgemap](https://dvajs.com/knowledgemap/)
- [react-router V4 && DvaJS](https://solodynamo.github.io/react-router-dvaJS-presentation/#/)
