# Curso react-tracasa-101

## Comandos disponibles

- `npm install` Instala las dependencias
- `npm run dev` Levanta el servidor en modo desarrollo
- `npm run build` Crea en la carpeta `./dist` con la app lista para subir a producción
- `npm run lint` Ejecuta los linters sobre el código de la carpeta `./src`
- `npm run test` Ejecuta los tests
- `npm run pre-commit` Valida los ficheros que están en staging antes de hacer el commit (lo ejecuta automáticamente Husky `.husky/pre-commit`)
- `npm run preview`Levanta un servidor local que sirve el contenido de la carpeta `./dist`
- `npm run prepare` Comando que se ejecuta automáticamente tras el install, en este caso configura los hooks de git (husky)

## Enlaces recomendados

### 1.1. VS Code

[Descarga vscode](https://code.visualstudio.com/)

Plugins que deberías instalarte para desarrollar React

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)


- [Axe Accessibility Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter)

Atajos de teclado que deberías memorizar:

- [ctrl]+[p]
- [ctrl]+[shift]+[p]
### 1.2. Git básico 

- [Git](https://git-scm.com/)
- [Fundamentos de Git](https://git-scm.com/book/es/v2)
- [Git cheatsheet](https://training.github.com/downloads/es_ES/github-git-cheat-sheet/)
- Flujos de trabajo de git:
  - [Gitflow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow)
  - [Github flow](https://docs.github.com/en/get-started/using-github/github-flow) (mi preferido)
- [¿Qué es conventional commits?](https://www.conventionalcommits.org/es/v1.0.0/)


### 1.3. TypeScript

- [Typescript](https://www.typescriptlang.org/)
- [Typescript cheatsheets](https://www.typescriptlang.org/cheatsheets/)
- [types vs interfaces, cuando utilizar cada una](https://matiashernandez.dev/blog/post/types-vs-interfaces-cuando-utilizar-cada-una)
### 1.4. Herramientas de debug de React

- [React Developer Tools](https://react.dev/learn/react-developer-tools)
### 1.5. Estructura de un proyecto Javascript moderno


#### 1.5.1 inicializadores 

Para crear un proyecto React con typescript

```bash
npm init react-app hola-mundo-app --template typescript
```
o
```bash
npm init vite
```
- [vite](https://vitejs.dev/)

#### 1.5.2. Linters

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Commitlint](https://commitlint.js.org/)

Buena práctica: instalar [Husky](https://typicode.github.io/husky/) para asegurarnos de hacemos commits con los linters pasados

## 2. Introducción a React

- Facebook 2013
- Características
  - Componentes
  - JSX (JavaScript XML)
  - Virtual DOM 
  - Flujo de datos unidireccional (de padre a hijo sólo)
  - Hooks (16.8)
### 2.1. Estructura de un proyecto de React

- [Documentación oficial de react](https://react.dev/learn)

- [Frameworks react](https://react.dev/learn/start-a-new-react-project)

- [Describing the UI](https://react.dev/learn/describing-the-ui)
- [Thinking in react](https://react.dev/learn/thinking-in-react)
- [Render and Commit](https://react.dev/learn/render-and-commit)

#### Pensar en componentes

1. Descomponer la Interfaz
    - Identificar Componentes
    - Árbol de Componentes
2. Crear render estático
    - Componentes sin Estado
    - Datos Simulados
3. Identificar estado
    - Qué debe estar en el Estado
    - Dónde debe estar el Estado
4. Definir flujo de datos unidireccional
    - Props de Padres a Hijos
    - Callbacks para Actualizar Estado
5. Interactividad y eventos
    - Manejo de Eventos
    - Actualizar Estado
6. Llamadas a APIs y efectos secundarios
    - useEffect: Llamadas a APIs y suscripciones
7. Optimización del Rendimiento
    - Evitar Re-renders: useMemo, useCallback...
    - División de Código: React.lazy, Suspense

####  Las reglas de React

1. Los componentes y hooks deben ser puros
   - Sólo piensan en su propia lógica
   - Mismas entradas, producen mismas salidas
   - No deben dependender de la secuencia de renderizado de otros	
   - No se deben mutar los parámetros de entrada ni estados directamente
2. React llama a los componentes y a los hooks (no tú)
3. Sólo llama a los hooks en el primer nivel y sólo desde componentes funcionales u hooks propios

### 2.4. Hooks

Los hooks son una poderosa característica de React que facilita la gestión del estado y otros aspectos en componentes funcionales, mejorando la reutilización y la composición de código

📖 [React Hooks](https://react.dev/reference/react/hooks)

#### useState

- `useState` es un hook que permite añadir estado a componentes funcionales en React.

  (Antes de los hooks, solo los componentes de clase podían tener estado.)

- Cuando "seteamos el estado" se solicita un re-render del componente

- 💡Truco: tratar las variables como de solo lectura (por ejemplo `[...datos, nuevoDato]` en vez de `datos.push(nuevoDato)`)

👀 [Ver ejemplo de la documentación](https://react.dev/learn/state-as-a-snapshot)

📖 [doc useEffect](https://react.dev/reference/react/useEffect)

#### useCallback

- useCallback es un hook que devuelve una versión memorizada de una función callback.
- Utilizado para optimizar el rendimiento al evitar la recreación de funciones en cada renderizado.

📖 [doc useCallback](https://react.dev/reference/react/useCallback)

#### useMemo

- permite cachear el resultado de un cálculo entre re-renderizados

📖 [doc useMemo](https://react.dev/reference/react/useMemo)

### 2.5. Puertas de escape

- A veces es necesario controlar o sincronizar cosas fuera del ciclo de react (ejemplo, empezar/pausar un video, modificar el dom directamente...)
- Existen varios mecanismos

#### useRef

- se usa cuando quieres recordar alguna información, pero no quieres forzar un nuevo renderizado
- si la referencia cambia no se fuerza el re-renderizado

📖[doc useRef](https://react.dev/reference/react/useRef)

#### useEffect

- useEffect es un hook que permite realizar efectos secundarios en componentes funcionales de React.
- Efectos secundarios pueden incluir: suscripción a datos, cambios en el DOM, peticiones HTTP, etc.
- Se ejecuta después del renderizado, permitiendo sincronizar el componente con recursos externos.
- > useEffect retrasa un trozo de codigo y lo ejecuta cuando el render ha sido reflejado en pantalla

📖[Synchronizing with effects](https://react.dev/learn/synchronizing-with-effects)
📖[doc useEffect](https://react.dev/reference/react/useEffect)

#### hooks propios

- siempre empiezan por `use`
- pueden usar otros hooks dentro de ellos
- permiten reutilizar logica (no estado en si)
- componentes más limpios

📖[reusing login with custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

### 2.6. Aplicando estilo a nuestros componentes

- [CSS modules](https://github.com/css-modules/css-modules)

### 2.7. Formularios en React

- [A Better Guide To Forms in React](https://dev.to/ajones_codes/a-better-guide-to-forms-in-react-47f0)

### 2.8. Manejo de estado en la aplicación

- [useReducer + useContext](https://react.dev/learn/scaling-up-with-reducer-and-context)
- [React Context](https://react.dev/reference/react/useContext)
- [useReducer](https://react.dev/reference/react/useReducer)

- [api ejemplo de tareas](https://github.com/francho-plain/todolist-api-node)

Otras

- [axios](https://axios-http.com/)
- [react-query](https://tanstack.com/query/latest)
- [zustand](https://github.com/pmndrs/zustand)

### 2.9. Testeando componentes

- [testing library](https://testing-library.com/)
- [vitest](https://vitest.dev/)
- [jest](https://jestjs.io/)

## 3. Otras librerías React que deberías conocer

- [react-router](https://reactrouter.com/en/main)
- [react-i18next](https://react.i18next.com/)
- [react-hook-form](https://react-hook-form.com/)
- [react-helmet](https://github.com/nfl/react-helmet#readme)