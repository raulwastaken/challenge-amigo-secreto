# Proyecto: Amigo Secreto

Este proyecto es una aplicación web sencilla que permite organizar un sorteo de "Amigo Secreto". Fue desarrollado como parte de un reto de lógica de programación.

## Funcionalidades

- Agregar nombres de participantes uno por uno.
- Visualizar la lista de amigos agregados.
- Realizar un sorteo aleatorio para elegir un "amigo secreto".
- Limpiar la lista automáticamente después del sorteo para poder se reutilizado sin refrescar la página
  
## Lógica implementada

- Se utiliza un arreglo (`amigos[]`) para almacenar los nombres ingresados.
- Se valida que el nombre no esté vacío antes de agregarlo.
- Se actualiza dinámicamente la lista en el DOM.
- El sorteo selecciona un nombre al azar usando `Math.random()`.
- Después del sorteo, se limpia la lista visual y el arreglo.

## Capturas de pantalla

### 1. Agregar nombres
![Agregar amigos](./screenshots/Agregar%20amigos.jpg)

### 2. Lista de amigos
![Lista de amigos](./screenshots/Lista%20de%20amigos.jpg)

### 3. Resultado del sorteo
![Resultado del sorteo](./screenshots/Sorteo%20de%20amigos.jpg)

### 4. Mensaje al presionar "Añadir" sin nombre
![Error: Añadir sin nombre](./screenshots/Añadir%20sin%20nombre.jpg)

### 5. Mensaje al presionar "Sortear" sin amigos
![Error: Sortear sin amigos](./screenshots/Sortear%20sin%20lista.jpg)
