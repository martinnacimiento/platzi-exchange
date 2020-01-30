# crypto-exchange

## Descripción
Proyecto para obtener las cotizaciones de las cryptomonedas mas importantes a traves de la API REST de Coincap.

## Tecnologías utilizadas
- Vuejs
- Tailwind
- Api Fetch
- Docker

## Configuración del proyecto
```
npm install
```

### Compila y re-cargas en caliente para desarrollo
```
npm run serve
```

### Compila y minifica para producción
```
npm run build
```

### Limpia y corrige archivos
```
npm run lint
```

## Configurar entorno de desarrollo con Docker
Construya la imagen con
```
docker build --tag platzi-exchange:1.0 .
```

Ejecute el contenedor con 
```
docker run --rm -it -p 8080:8080 -v $PWD:/home/node/app platzi-exchange:1.0 bash
```