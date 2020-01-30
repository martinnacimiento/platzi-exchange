# platzi-exchange

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Docker setup
Construya la imagen con
```
docker build --tag platzi-exchange:1.0 .
```

Ejecute el contenedor con 
```
docker run --rm -it -p 8080:8080 -v $PWD:/home/node/app platzi-exchange:1.0 bash
```