// Requires all of the modules needed
const http = require("http");
const path = require("path");
const express = require("express");
const logger = require("morgan");
const PORT = process.env.PORT || 3000;

// Makes an Express app
const app = express();

// tells Express that the views are in the view folder
app.set("views", path.join(__dirname, "views"));
// views will use the EJS engine
app.set("view engine", "ejs");

// creates a global array to store guestbook entries and makes it empty to start
let entries = [];

// Makes the entries array available in all views
app.locals.entries = entries;

// Uses Morgan to log every request
app.use(logger("dev"));

// Populates a variable called req.body if the user is submitting a form. (The extended option is required).
app.use(express.urlencoded({ extended: false}));

// When visiting the site root, renders the homepage (at views/index.ejs)
app.get("/", function(request, response){
    response.render("index");
});

// Renders the "new entry" page (at views/index.ejs) when GETting the URL
app.get("/new-entry", function(request, response) {
    response.render("new-entry");
});

// Defines a route handler when you POST to the "new-entry" URL in contrast to a GET
app.post("/new-entry", function(request, response) {
    // If user submits the form with no title or content, responds with a 400 error
    if (!request.body.title || !request.body.body) {
        response.status(400).send("Entries must have a title and a body.");
        return;
    }
    // adds a new entry to the list of entries
    entries.push({
        title: request.body.title,
        body: request.body.body,
        published: new Date()
    });
    // Redirects to the homepage to see your new entry
    response.redirect("/");
});

// Renders a 404 page because you're requesting an unknown source
app.use(function(request, response){
    response.status(404).render("404");
});

// Starts the server on port 3000
app.listen(PORT, ()=>{console.log('Guestbook app started on port:' + PORT)});