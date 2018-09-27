# React With Fuse-box

>Build react app with [fuse-box](https://fuse-box.org/). 

## Content

- [Init Project](#init-project)
- [Folder Structure](#folder-structure)
- [How to use](#how-to-use)
  - [Development](#development)
  - [Production](#production)
- [References](#references)

### Init Project

- Init project:

```npm
$ yarn init -y
```

- Add packages: 

    - React
    
```npm
$ yarn add react react-dom react-router-dom
```

- Add packages: 

    - Fuse-box
    
```npm
$ yarn add --dev fuse-box typescript
```

- Add packages: 

    - Babel
    
```npm
$ yarn add --dev babel-core babel-plugin-transform-react-jsx babel-preset-latest
```

- Add scripts:

>add scripts bellow to package.json
```json
{
  "scripts": {
    "start": "node fuse",
    "dist": "node fuse dist"
  }
}
``` 

- Add configurations:

```bash
$ touch .babelrc fuse.js
```

- Set up configurations and add main scripts

:v:
  
### Folder Structure

```bash
my-app
  ├── .babelrc
  ├── README.md
  ├── node_modules/
  ├── package.json
  ├── docker-compose.yml
  ├── Makefile
  ├── fuse.js
  └── src
      ├── assets
      │   └── favicon.ico
      ├── index.html
      ├── index.js
      ├── tsconfig.json
      └── pages/
          ├── about/
          ├── error/
          ├── home/
          ├── login/
          └── App.js
```

### How to use

#### Development

[Node.js](https://nodejs.org) and the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) are required.

- Debug:

```npm
$ yarn start
```

- Check result:
```bash
$ http localhost:8080 (or curl localhost:8080)
```

:v:

#### Production

- Deploy:

`docker-compose up` or `make deploy`

- Check result:
```bash
$ http localhost:8080 (or curl localhost:8080)
```

:v:

### References

- [FuseBox: JavaScript project](https://fuse-box.org/docs/getting-started/javascript-project)
- [Introduction to FuseBox — a Faster, Simpler webpack Alternative](https://www.sitepoint.com/fusebox-faster-webpack-alternative/)
- [From Webpack To FuseBox](https://engineering.huiseoul.com/from-webpack-to-fusebox-bf3b058fdaea)
- [React example](https://github.com/fuse-box/react-example)