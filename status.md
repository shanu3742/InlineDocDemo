# Coding Process Document
Documenting the problem solving strategy and the process.

## TASK 1: 
```
Create a React[^1] application that lists all users and their addresses provided by the users API of JSONPlaceholder[^2].
```
### Strategy
Creating a custom hook that can fetch the JSONPlaceholder API and display the user list.
### Process
- Created a custom hook named `useAsync` that can fetch API.
- Mapped result over a list card that can show `photo`, `name` and `address`


## Task 2
```
Add at least one unit test for each of the components you created using Jest[^3]. More is better.
```
### Strategy
Adding test js files using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [jest](https://jestjs.io/)
### Process
- Target the specific component using `render()` by adding comopnent inside render.
- Need to specify the expected value for the component being tested.
- Lastly, returns the status of component by `passed` or `failed`.

## Task 3
```
Add the possibility to view the albums and the photos of a selected user.
```
### Strategy
Reused custom `useAsync` hook that can fetch  `albumResult` and `photoResult` data for a specific user ,passed API link to `useAsync()`
### Process
- Mapped `albumResult` over a list card that can show `Album Title` and `button` of a specific user
- Mapped `photoResult` over a list card that can show  all `image` of a specific Album.

## Task 2 Update
```
Add at least one unit test for each of the components you created using Jest[^3]. More is better.
```
### Strategy
Adding test js files using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [jest](https://jestjs.io/)
### Process
- Target the `AlbumComponent` using `render()` by adding comopnent inside render ex-`render(<App/>)`.
- Target the `PhotoComponent` using `render()` by adding comopnent inside render ex- `render(<App/>)`
- Lastly, returns the status of component by `passed` or `failed`.
## Task 4 
```
Add at least one end-to-end for your application using cypress[^4]. More is better.
```
### Strategy
install cypress using npm package  `npm install cypress --save-dev` and  for running the [cypress] type ` npx cypress open` in terminal and perform e-2-e testing
### build 
- for running the testing file follow the path after opening cypress page `cypres ->integration ->2-advanced-examples -> App.spec.js `.
- inside visit add url `visit(url)`, in this app url is `http://localhost:3000`

### Process

- inside visit add url `visit(url)`, in this app url is `http://localhost:3000`
- open specific url using  `cy.visit()`
- tested button `view profile` using `cy.get('selector')`
- similarly tested   `view picture`  and all other `button`


