1. Open Project Directory

Navigate to your project directory:

cd MY-API-TEST

2. Verify Node.js Installation

Check if Node.js is installed:

node -v

If not installed, download it from the Node.js official site.

3. Create app.js

Create the main file app.js:

touch app.js

4. Initialize Project and Configure package.json

Initialize the project:

npm init -y

Set ES modules and add a developer script in package.json:

"type": "module",
"scripts": {
  "dev": "node --watch app.js"
}

5. Install Express and Import It

Install Express:

npm install express

6. Create the Server

Set up the server in app.js.

7. Create First Endpoint

Add a GET endpoint to return a simple response.

8. Test in Browser

Run the app:

npm run dev

Test it in the browser at http://localhost:3333.

9. Add Static Files

Create a public folder:

mkdir public

Add an index.html file:

cd public
touch index.html

10. Serve Static Files

Configure Express to serve static files and test it in the browser.

11. Start Creating the API

Plan to use CRUD methods via a router.

12. Create cupsRouter

Create the router file:

touch cupsRouter.js

Define basic routes in the file.

13. Import Router in app.js

Connect the router to your app.

14. Create cupsController

Create a controller file:

touch cupsController.js

Add middleware functions for the routes.

15. Test with Postman

Use Postman to test GET and POST requests to the defined routes.

16. Connect to MongoDB

16.1 Install Dependencies

Install mongoose and dotenv:

npm install mongoose dotenv

16.2 Set Up MongoDB URI

Create a .env file:

touch .env

Add your MongoDB connection string. Add .env to .gitignore:

echo .env >> .gitignore

16.3 Create connectMongo.js

Create a file to manage the MongoDB connection:

touch connectMongo.js

16.4 Import Connection in app.js

Import and initialize the connection in your main app file.

17. Create and Use a Model

17.1 Create cupsModel.js

Define a schema and create a model for your cups collection:

touch cupsModel.js

17.2 Use the Model in cupsController

Update the controller to interact with the database using the defined model.

18. Test CRUD Operations

Use Postman or another HTTP client to test CRUD operations for your API.