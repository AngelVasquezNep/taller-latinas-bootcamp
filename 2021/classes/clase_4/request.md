# ¿Qué son y cómo se usan las peticiones HTTP?

Una petición HTTP es un protocolo de comunicación que permite las transferencias de información en la web.

Es el lenguaje común para todas las comunicaciones.

Flujo de una petición

Cliente → Internet → Servidor → Se devuelve al cliente

**¿Cómo es una petición?**

```
GET /index.html HTTP/1.1                HTTP/1.1 es la versión del protocolo
Host: www.example.com                   A dónde lo estoy pidiendo
Referer: www.google.com                 De dónde viene
User-Agent: Mozilla/5.0                 Navegador del usuario
Connection: keep-alive                  Qué le va a pasar al enlace entre el cliente y el navegador
```

**¿Cómo es la respuesta?**

```
HTTP/1.1 200 OK                      -  Protocolo y estatus
Date Fri, 31 jul 2020 ... GMT        -  Cuándo se resolvió la petición
Content-type: text/html              -  Tipo de contenido de la respuesta
Content-length:  1221                -  Tamaño del contenido
<html>...</html>                     -  Body
```

**Puntos claves a tener en cuenta:**

- **Métodos:** Qué quieres hacer
- **Estado:** Cómo ha ido la operación
- **Cuerpo:** Lo que el servidor devuelve


## Métodos, cabeceras y estados

----

### Métodos



El verbo que dice "lo que queremos hacer" al servidor.

- **GET** - Obtener información.
- **POST** - Añadir información al servidor (como un nuevo producto o un formulario).
- **PUT** - Reemplazar información - Actualizar algo.
- **PATCH** - Actualizar una parte del la información.
- **DELETE** - Cuando queramos eliminar información.
- **OPTIONS** - Pedir información sobre los métodos (para saber qué métodos podemos utilizar).
    - 💡A veces vemos que antes de que se haga un request a un servidor, el navegador lanza una request con el método options 🙉

### **Cabeceras**



Van a darnos información contextual de la petición.
No es lo que quiero hacer sino cómo lo quiero hacer.

Podemos tener cabeceras de...

- **Autenticación**
    - Asegurate de que puedes pedir cosas al servidor
    - Authorization
- **Caché**
    - Almacenamiento temporal
    - Gestionar durante cuánto tiempo la respuesta será la misma
    - Cache-Control
    - Expires
    - "Si quieres otra vez este recurso pero no ha cambiado, guárdalo y úsalo, no me lo pidas de nuevo al servidor de vuelta que seguirá siendo el mismo"
- **CORS**
    - Cross Origin Resource Sharing
    - Manejar  información desde fuera de nuestro servicio
    - En caso de que vayamos a consumir información fuera de nuestro servidor.
    - Cabecera: Access-Control-Allow-Origin ****- Puedes acceder desde dónde quieras o sólo desde esta dirección.
- **Cookies**
    - Compartir información entre peticiones
- **Accept**
    - Define el contenido que acepta
    - Accept, Accept-Charset, Accept-Encoding.

### Estados

---

Es un código número que indica lo que ha pasado con nuestra petición

**2XX**

  Todo bien
  - 200: Ok
  - 201: Created

**3XX**

  La petición se ha redirigido
  - 301: Moved permanently - de una url a otra...
  - 304: Not modified

**4XX**

  Errores del cliente
  - 400: Bad request - algo me enviaste mal
  - 401: Unauthorized - No sé quién eres
  - 403: Forbidden - Si sé quién eres pero no puedes hacer esto, no tienes permisos
  - 404: Not found - 

**5XX**

  Errores del servidor
  - 500: Internal server error - No se muestra mucha información por seguridad.