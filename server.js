const express = require("express");

const app = express();

app.get("/", (req, res) =>
{
    res.send("<h1>Hello world!</h1>");
});

app.get("/contact", (req, res) =>
{
    res.send("Contact me at: devdeveshsingh@gmail.com");
});

app.get("/about", (req, res) =>
{
    res.send("My name is Devesh Kumar Singh, and I am currently learning web development. I have created this local web server just for practicing.");
});

app.listen(3000, () =>
{
    console.log("Server has started on port 3000");
});