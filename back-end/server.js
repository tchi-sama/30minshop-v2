const express = require("express");
const { promptifyRoute } = require("./openai");
const app = express();

app.use(express.json())

app.get("/", (request, response) => {
    response.send("Hi there");
});

app.get("/openai",promptifyRoute)
app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});