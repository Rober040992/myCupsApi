
# Steps to Set Up and Develop Your Express.js Project

This document outlines the steps taken to create your Express.js project, strictly following the files you provided.

## 1. Open Project Directory

Navigate to your project directory:
```bash
cd MY-API-TEST
```

## 2. Verify Node.js Installation

Check if Node.js is installed:
```bash
node -v
```
If not installed, download it from the Node.js official site.

## 3. Create `app.js`

Create the main file `app.js`:
```bash
touch app.js
```

## 4. Initialize Project and Configure `package.json`

Initialize the project:
```bash
npm init -y
```
Set ES modules and add a developer script in `package.json`:
```json
"type": "module",
"scripts": {
  "dev": "node --watch app.js"
}
```

## 5. Install Express and Import It

Install Express:
```bash
npm install express
```

## 6. Create the Server

Set up the server in `app.js`.
```JavaScript
const app = express()
app.listen(3333)
```

## 7. Create First Endpoint

Add a GET endpoint to return a simple response.
```JavaScript
app.get('/', (req, res) => {
    res.send("hello world")
})
```

## 8. Test in Browser

Run the app:
```bash
npm run dev
```
Test it in the browser at `http://localhost:3333`.

## 9. Add Static Files

Create a `public` folder:
```bash
mkdir public
```
Add an `index.html` file:
```bash
cd public
touch index.html
```

## 10. Serve Static Files

Configure Express to serve static files and test it in the browser.
```bash
app.use(express.static("public"))
```
create the endpoit to serve the static file:
```javascript
app.get('/', (req, res) => {
    res.sendFile("index.html")
})
```
Test it in the browser at `http://localhost:3333`.

## 11. Start Creating the API

Plan to use CRUD methods via a router.

## 12. Create `cupsRouter`

Create the router file:
```bash
touch cupsRouter.js
```
Define basic routes in the file.
```javascript
import express from "express"
export const cupsRouter = express.Router() //create the router
// CRUD
cupsRouter.get('/', getAllCups)
cupsRouter.post('/', createNewCup)
cupsRouter.delete('/:id', deleteOneCup)
cupsRouter.put('/:id', updateOneCup)
```

## 13. Import Router in `app.js`
```javascript
import { cupsRouter } from "./cupsRouter.js"
```
Connect the router to your app.
```javascript
app.use('/cups', cupsRouter)
```

## 14. Create `cupsController`

Create a controller file:
```bash
touch cupsController.js
```
Add middleware functions for the routes.
```javascript
export const getAllCups = (req, res) => {
  res.json({
        hello: "my-API"
    })   
}
export const createNewCup = (req, res) => {   
}
export const deleteOneCup = (req, res) => {   
}
export const updateOneCup = (req, res) => {   
}
```
### note 
- to parse json we need `app.use(express.json())` in our app.js

## 15. Test with Postman

Use Postman to test CRUD requests to the defined routes.

## 16. Connect to MongoDB

### 16.1 Install Dependencies

Install `mongoose` and `dotenv`:
```bash
npm install mongoose dotenv
```

### 16.2 Set Up MongoDB URI

Create a `.env` file:
```bash
touch .env
```
Add your MongoDB connection string. Add `.env` to `.gitignore`:
```bash
echo .env >> .gitignore
```

### 16.3 Create `connectMongo.js`

Create a file to manage the MongoDB connection:
```bash
touch connectMongo.js
```

### 16.4 Import Connection in `app.js`

Import and initialize the connection in your main app file.
```javascript
import connectMongoose from "./connectMongo.js"
const connection = await connectMongoose() 
console.log(`conected to: ${connection.name} atlas MongoDB`)
```
## 17. Create and Use a Model

### 17.1 Create `cupsModel.js`

Define a schema and create a model for your `cups` collection:
```bash
touch cupsModel.js
```

### 17.2 Use the Model in `cupsController`

Update the controller to interact with the database using the defined model.

## 18. Test CRUD Operations

Use Postman or another HTTP client to test CRUD operations for your API.
