# Explora SV — práctica académica de desarrollo web

## Contenido
- `index.html`: estructura semántica y cuatro partes solicitadas (identidad/logo, navbar, body y footer).
- `styles.css`: diseño responsive y estilos separados.
- `script.js`: menú responsive, cambio de tema y validación de formulario.

## Cómo ejecutar
Abre `index.html` en un navegador o usa Live Server en Visual Studio Code.

## Uso de IA (declaración)
Se utilizó una herramienta de IA como apoyo para generar una primera propuesta de estructura, estilos e interacciones. El estudiante debe revisar, comprender, personalizar y probar todo el código antes de entregar. Las interacciones del formulario son demostrativas: no envían datos a un servidor.

## Historial Git requerido
La práctica solicita un commit explícito por cada parte. Para cumplirlo correctamente, desarrolla y selecciona los cambios de cada parte por separado. Como los archivos se comparten entre secciones, usa `git add -p` para seleccionar fragmentos (hunks) del componente que estás trabajando:
1. `git add -p index.html` y `git add -p styles.css` → selecciona solo Logo/Identidad; `git commit -m "Crear identidad y logo"`.
2. Selecciona fragmentos Navbar en HTML/CSS/JS → `git commit -m "Crear barra de navegación"`.
3. Selecciona fragmentos Body en HTML/CSS/JS → `git commit -m "Crear contenido principal interactivo"`.
4. Selecciona fragmentos Footer en HTML/CSS/JS → `git commit -m "Crear pie de página"`.

No uses `git add .` antes de esos commits, porque podría mezclar las cuatro partes en un solo commit. Revisa con `git log --oneline`.

## Personalización recomendada
Cambia el nombre, textos, colores o destinos para que reflejen tu propia idea. Asegúrate de poder explicar cada elemento y cada función en la verificación individual.
