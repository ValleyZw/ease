# React With Parcel

>Build react app with [parcel](https://parceljs.org/) may simplify the configuration process. 

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

    - Parcel
    
```npm
$ yarn add --dev parcel-bundler
```

- Add packages: 

    - Babel
    
```npm
$ yarn add --dev @babel/core @babel/preset-react
```

- Add scripts:

>add scripts bellow to package.json
```json
{
  "scripts": {
      "start": "parcel ./src/index.html",
      "build": "parcel build ./src/index.html"
  }
}
``` 

- Add configurations:

```bash
$ touch .babelrc
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
  ├── assets
  │   └── favicon.ico
  └── src
      ├── index.html
      ├── index.js
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
$ http localhost:1234 (or curl localhost:1234)
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

- [Building a Reactjs project with Parceljs](https://blog.vigneshm.com/building-a-reactjs-project-with-parceljs-d88cdd178e50)
- [Set Up A React Project With Parcel: The Zero Configuration App Bundler](https://scotch.io/tutorials/setting-up-a-react-project-with-parcel)
- [Lean React Project With Parcel](https://medium.com/dailyjs/lean-react-project-with-parcel-a6ffe0fac0d2)
- [Create a React App from scratch Using Parceljs](https://codeburst.io/create-a-react-app-with-no-config-using-parceljs-56c15add6a0a)
- [Building a Reactjs project with Parceljs](https://blog.vigneshm.com/building-a-reactjs-project-with-parceljs-d88cdd178e50)
