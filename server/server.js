"use strict";

const express = require("express");
const morgan = require("morgan");

const { users, articles } = require("./data");

const { getArticles, getUsers, getArticle, publishArticle, connectUser } = require("./handlers");

express()
  .use(morgan("tiny"))
  .use(express.json())

  .use(express.static("public"))

  .get("/api/get-articles", getArticles)
  .get("/api/get-article/:id", getArticle)
  .get("/api/get-users", getUsers)
  .post("/api/connect-user", connectUser)
  .post("/api/publish-article", publishArticle)


  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
