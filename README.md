# SQL Editor Task for Atalan Frontend Developer
This is an SQL editor built for the frontend task of Atlan's front-end developer. This project is built using **[React](https://reactjs.org/)**, _and_ **[MUI](https://mui.com/)** library.

## Implemented Features
1. **Save Query History With Title**: To avoid repeated works, you can save queries with titles and the history shows all queries you have run with their titles and last time used.
And sort saved queries based on their used time and you can select easily by searching with their title or query string at any time.
2. **Tab Based Interface**: An easy-to-use tab based interface allows you to switch between multiple queries at once.
3. **Show/Hide Columns**: You can show or hide columns on data grid.
4. **Filter Function On Queried Result**: There is filter functions where you can easily implement even complex filters on queried result.
5. **Export CSV/Excel/Print**: You can make csv/excel file with searched result.


## List of libraries utilised in the application:
- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [React-Ace](https://github.com/securingsincity/react-ace)

## Page Load Time
- **[web.dev](https://web.dev/measure)**: 
  - **First Contentful Paint**: `0.2s`
  - **Speed Index**: `1.1s`
  - **Largest Contentful Paint**: `0.6s`
  - **Time to Interactive**: `0.7s`
  - **Total Blocking Time**: `0ms`
  - **Cumulative Layout Shift**: `0`

  - **[GTMetrix](https://gtmetrix.com/)**:
  <img src="https://github.com/rdmochih/atlan-sql-editor/blob/main/assets/gtmetrix.png?raw=true" width="800">



## Optimisations
- **Avoid named import from MUI library.**
  - `import Box from "@mui/material/Box";` is 6 times faster than 
  - `import { Box } from "@mui/material";`
- **Used React.lazy()**
Import for `react-ace` editor was long tasks running during page load, Converted it to Lazy loaded component using `React.lazy()` for code-splitting and delaying it's loading.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.