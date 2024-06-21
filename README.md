# TypeScript MERN ShopCart

1. Introduction
2. Install Tools
3. Create TypeScript React App By Vite
4. Create Git Repository
   1. add README.md
   2. create github account
   3. connect vs code to github
   4. publish repository
5. List Products
   1. create Product type
   2. create products array
   3. add product images
   4. render products
6. Add React Bootstrap
   1. npm install react-bootstrap bootstrap
   2. import bootstrap css
   3. update App.tsx
7. Add page routing
   1. npm i react-router-dom
   2. create route for home page
   3. create router for product page
   4. add helmet for settting page title
8. Create Node.JS Server
   1. create backend folder and run npm init
   2. npm install express
   3. npm install -save-dev typescript ts-node-dev @types/express
   4. npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
   5. create src/index.ts
   6. create route for / return backend is ready.
   7. copy data.ts from frontend to backend
   8. create route for /api/products
   9. return products
   10. run npm start
9. Fetch Products From Backend
   1. npm install axios
   2. set axios base url
   3. use effect hook
   4. use reducer hook
10. Create Rating ProductItem Component
   1. Rating.js
   2. ProductItem.js
11. Set Page Title
   1. npm i react-helmet-async
12. Load Products By React Query
   1. npm i @tanstack/react-query @tanstack/react-query-devtools
   3. apiClient.ts
   4. hooks/productHook.ts
13. Create Product Page
14. Create React Context
   1. Store.ts
15. Connect To MongoDB
   1. create mongodb database
   2. npm install dotenv mongoose @typegoose/typegoose
   3. put mongodb uri in .env
   4. MONGODB_URI=mongodb://localhost/tsmernamazona
   5. npm i express-async-handler
   6. run <http://localhost:4000/api/products>
16. Cart In Product Page
   1. npm i react-router-bootstrap
17. Create Cart Page