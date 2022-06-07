"use strict";

const express = require("express");
const morgan = require("morgan");

express()
  .use(morgan("tiny"))
  .use(express.json())

  .use(express.static("public"))

  .post("/save-draft", (req, res) => {
    const newDraft = req.body;
    console.log("newDraft", newDraft);

    res.status(200).json({
      status: 200,
      message: "article saved!",
      data: newDraft,
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
