"use strict";

const express = require("express");
const morgan = require("morgan");

const { users, articles } = require("./data");

express()
  .use(morgan("tiny"))
  .use(express.json())

  .use(express.static("public"))

  .post("/api/publish-article", (req, res) => {
    const newArticle = req.body;
    articles.push(newArticle);
    res.status(200).json({
      status: 200,
      message: "article saved!",
      data: newArticle,
    });
  })

  .get("/api/get-article/:id", (req, res) => {
    const article = req.params.id;

    let result;
    result = articles[0].data;

    res.status(200).json({
      status: 200,
      data: result,
    });
  })

  .get("/api/get-articles", (req, res) => {
    let result;
    result = articles;

    res.status(200).json({
      status: 200,
      data: result,
    });
  })

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
