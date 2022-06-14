# API REST USERS

El proyecto ha sido creado con Node.js [Ir a la API](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Ejecuta la aplicación en el modo de desarrollo. (entorno local)\
abrir [http://localhost:4000](http://localhost:4000) para verlo en su navegador.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hashes.\
¡Tu aplicación está lista para ser implementada!

## Endpoints

Actualmente la API permite gestionar los usuarios mediante peticiones (GET, POST, PUT Y DELETE), los puntos de acceso se describirán a continuacion:\
Url Root [http://localhost:4000/api/users](http://localhost:4000/api/users)

### GET /

Muestra la lista de usuarios registrados en la base de datos.

### POST /create

Permite la creación de nuevos usuarios, este endpoint recibe como parametros un JSON con los datos (name, last_name, phone, email, age, status)\

**
`{
    "name": "Brian",
    "last_name": "Alzate",
    "phone": 3008739243,
    "email": "brianalzate97@gmail.com",
    "age": 25,
    "status": 1
}`
**

### PUT /update/:id

Permite la actualización de usuarios, este endpoint recibe como parametros un JSON con los datos (name, last_name, phone, email, age, status) y un id será enviado mediante la url\

**
`{
    "name": "Brian",
    "last_name": "Alzate",
    "phone": 3008739243,
    "email": "brianalzate97@gmail.com",
    "age": 25,
    "status": 1
}`
**

### GET /:id

Permite obtener la información del usuario, este endpoint recibe como parametros un id será enviado mediante la url\


### DELETE /delete/:id

Permite eliminar usuarios, este endpoint recibe como parametros un id será enviado mediante la url\


### Archivo de prueba - postman

Dentro del directorio tools del proyecto se encuentra un archivo en formato .json que permite rapidamente mediante postman consumir la API REST

### Base de Datos

Dentro del directorio tools del proyecto se encuentra la base de datos de prueba del proyecto.

### `Proyecto en Producción`

El proyecto en producción se encuentra en el siguiente link.\
abrir [http://localhost:4000](http://localhost:4000) para verlo en su navegador.

**
`para probar la API usando un entorno local se remomienda cambiar la url de producción por http://localhost:4000 para que funcione en el entorno local.`
**



